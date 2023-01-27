const URL =
  'https://sanntid.vkt.no/api/web/v1/schedule/departures?citySymbol=NO_VESTFOLD&fullSchedule=false&stopGroupDepartures=true';

const useTimetableApiHook = () => {
  const getStopTimes = async (stopCode: string) => {
    const response = await fetch(`${URL}&stopCode=${stopCode}`);
    return response.json();
  };

  return { getStopTimes };
};

export default useTimetableApiHook;
