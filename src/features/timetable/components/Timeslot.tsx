import { DepartureDetails } from 'src/typings/stoptimes';
import { getTimeOfDate, readableTimeUntil } from 'src/utils/time';

interface TimeslotProps {
  departureDetails: DepartureDetails;
}

const Timeslot = ({ departureDetails }: TimeslotProps) => {
  const realtime = readableTimeUntil(departureDetails.departureRealtime);
  const scheduled = getTimeOfDate(departureDetails.departureSchedule);

  console.log(realtime, scheduled);

  return (
    <tr>
      <td>{departureDetails.lineName}</td>
      <td>{departureDetails.headingTextOverride}</td>
      <td>{realtime ?? scheduled}</td>
    </tr>
  );
};

export default Timeslot;
