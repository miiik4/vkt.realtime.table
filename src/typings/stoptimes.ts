export interface DepartureDetails {
  departureRealtime: string;
  departureSchedule: string;
  headingTextOverride: string;
  realtimeId: string;
  lineName: string;
}

export interface Departure {
  departureRealtime: string;
  departureSchedule: string;
  headingTextOverride: string;
  realtimeId: string;
}

export interface BusLine {
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
  departures: Departure[];
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
