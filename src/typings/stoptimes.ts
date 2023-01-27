export interface Departures {
  departureRealtime: string;
  departureSchedule: string;
  headingTextOverride: string;
  realtimeId: string;
}

interface BusLine {
  lineOperator: {
    operatorId: number;
    operatorSymbol: string;
    operatorName: string;
  };
  lineName: string;
  lineId: string;
  lineDirectionName: string;
  directionCode: string;
  vehicleType: string;
  departures: Departures[];
}

export interface BusStop {
  stopName: string;
  stopCode: string;
  nextStopName: string;
  stopIconType: string;
  stopCoordinate: {
    x_lon: number;
    y_lat: number;
  };
  lines: BusLine[];
}

export interface Stoptimes {
  stopsGroupName: string;
  groupStopIconType: string;
  stops: BusStop[];
}
