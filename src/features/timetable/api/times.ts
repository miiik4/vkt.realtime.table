import config from 'src/appConfig.json';

import { DepartureDetails, Stoptimes } from 'src/typings/stoptimes';
import { sortDeparturesByAsc } from 'src/utils/sorting';

const useTimetableApiHook = () => {
  const getStopTimes = async () => {
    const departures: DepartureDetails[] = [];

    for (let i = 0; i < config.selected.length; i++) {
      const selected = config.selected[i];

      await fetch(`${config.api}&stopCode=${selected.stopCode}`)
        .then((response) => response.json())
        .then((stoptimes: Stoptimes) => {
          const selectedStop = stoptimes.stops.find((stop) => stop.stopCode === selected.stopCode);
          const selectedLine = selectedStop?.lines.find(
            (line) =>
              line.lineName === selected.lineName && line.directionCode === selected.directionCode
          );

          const detailedDepartures = selectedLine?.departures.map((departure) => ({
            ...departure,
            lineName: selectedLine.lineName,
          }));

          detailedDepartures && departures.push(...detailedDepartures);
        })
        .catch((e) => console.warn('Unable to fetch stoptimes: ', e));
    }

    return departures.sort(sortDeparturesByAsc);
  };

  return { getStopTimes };
};

export default useTimetableApiHook;
