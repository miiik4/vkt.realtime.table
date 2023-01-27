import './Timetable.css';

import { useEffect, useState } from 'react';
import { BusStop, Departures, Stoptimes } from 'src/typings/stoptimes';
import useTimetableApiHook from './api/times';
import Timeslot from './components/Timeslot';

interface TimetableProps {
  stopCode: string;
  lineName: string;
  directionCode: string;
}

const Timetable = ({ stopCode, lineName, directionCode }: TimetableProps) => {
  const [departures, setDepartures] = useState<Departures[]>([]);
  const [stopDetails, setStopDetails] = useState<BusStop>({});
  const { getStopTimes } = useTimetableApiHook();

  const getNewStopTimes = async () => {
    await getStopTimes(stopCode)
      .then((stoptimes: Stoptimes) => {
        const selectedStop = stoptimes.stops.find((stop) => stop.stopCode === stopCode);
        const selectedLine = selectedStop?.lines.find(
          (line) => line.lineName === lineName && line.directionCode === directionCode
        );

        if (selectedStop && selectedLine) {
          setDepartures(selectedLine.departures);
          setStopDetails(selectedStop);
        }
      })
      .catch((error) => console.warn('Unable to fetch data from API: ', error));
  };

  useEffect(() => {
    // fetches updated stop times every minute
    const getTimesEveryMinute = setTimeout(() => getNewStopTimes(), 1000);
    return () => clearTimeout(getTimesEveryMinute);
  }, []);

  return (
    <div className="busStopWrapper">
      <div className="busStopHeader">
        <h1>
          {stopDetails.stopName} — Line {lineName}
        </h1>
      </div>
      <div className="departureHeader">
        <h3>Schedule</h3>
        <h3>Realtime</h3>
        <h3>Direction</h3>
      </div>
      <div className="timeslotWrapper">
        {departures?.length ? (
          departures.map(
            (departure, index) =>
              index < 3 && (
                <Timeslot
                  key={departure.departureSchedule + departure.headingTextOverride}
                  departureDetails={departure}
                />
              )
          )
        ) : (
          <h1>No departures found</h1>
        )}
      </div>
    </div>
  );
};

export default Timetable;
