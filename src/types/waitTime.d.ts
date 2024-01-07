import { Status } from "./attraction";

export interface Weather {
    temperature: number;
    conditions: number;
}

export interface WaitTimeEntry {
    timestamp: string;
    weather: Weather;
    status: Status;
    waitTime: number;
}

export interface WaitTimeGraphEntry {
    timestamp: Date;
    waitTime: number;
}

export interface WaitTimeData {
    id: string;
    attractionName: string;
    entries: WaitTimeEntry[];
}
