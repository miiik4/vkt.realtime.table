import './Timeslot.css';

import { Departures } from 'src/typings/stoptimes';
import { getDateTime, readableTimeUntil } from 'src/utils/time';

interface TimeslotProps {
  departureDetails: Departures;
}

const Timeslot = ({
  departureDetails: { departureSchedule, departureRealtime, headingTextOverride },
}: TimeslotProps) => {
  const schedule = getDateTime(departureSchedule);
  const realtime = readableTimeUntil(departureRealtime);

  return (
    <div className="departureWrapper">
      <h2 className="schedule">{schedule}</h2>
      <h2 className="realtime">{realtime}</h2>
      <h1>{headingTextOverride}</h1>
    </div>
  );
};

export default Timeslot;
