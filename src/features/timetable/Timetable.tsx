import './Timetable.css';
import config from '../../appConfig.json';

import { useEffect, useState } from 'react';
import useTimetableApiHook from './api/times';
import Timeslot from './components/Timeslot';
import { DepartureDetails } from 'src/typings/stoptimes';

const Timetable = () => {
  const { getStopTimes } = useTimetableApiHook();
  const [timeslots, setTimeslots] = useState<any>([]);

  const getAllStopTimes = async () => {
    await getStopTimes()
      .then(setTimeslots)
      .catch((e) => console.warn('Unable to fetch stops: ', e));
  };

  useEffect(() => {
    getAllStopTimes();
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
          (departureDetails: DepartureDetails, index) =>
            index < config.results && (
              <Timeslot key={departureDetails.realtimeId} departureDetails={departureDetails} />
            )
        )}
      </tbody>
    </table>
  );
};

export default Timetable;
