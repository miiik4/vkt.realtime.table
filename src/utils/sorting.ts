import { Departure } from 'src/typings/stoptimes';

export const sortDeparturesByAsc = (depA: Departure, depB: Departure) => {
  if (depA.departureRealtime && depB.departureRealtime) {
    return new Date(depA.departureRealtime).valueOf() - new Date(depB.departureRealtime).valueOf();
  }

  return new Date(depA.departureSchedule).valueOf() - new Date(depB.departureSchedule).valueOf();
};
