import './Timetable.css';
import config from 'src/appConfig.json';

import { useEffect, useState } from 'react';
import { DepartureDetails } from 'src/typings/stoptimes';
import useTimetableApiHook from './api/times';
import Timeslot from './components/Timeslot';

const Timetable = () => {
  const { getStopTimes } = useTimetableApiHook();
  const [timeslots, setTimeslots] = useState<DepartureDetails[]>([]);

  const getAllStopTimes = async () => {
    await getStopTimes()
      .then(setTimeslots)
      .catch((e) => console.warn('Unable to fetch stops: ', e));
  };

  useEffect(() => {
    getAllStopTimes();
    const interval = setInterval(() => {
      getAllStopTimes();
    }, config.updateInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <table className="timetable">
      <thead>
        <tr>
          <th className="line">
            <span>Linje</span>
            <span>Line</span>
          </th>
          <th className="destination">
            <span>Destinasjon</span>
            <span>Destination</span>
          </th>
          <th className="departure">
            <span>Avgang</span>
            <span>Departure</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {timeslots.map(
          (departureDetails: DepartureDetails, index: number) =>
            index < config.results && (
              <Timeslot
                key={departureDetails.departureSchedule + departureDetails.headingTextOverride}
                departureDetails={departureDetails}
              />
            )
        )}
      </tbody>
    </table>
  );
};

export default Timetable;
