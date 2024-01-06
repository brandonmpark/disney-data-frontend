export enum RawStatus {
    OPEN = "open",
    CLOSED = "closed",
    CLOSED_TEMPORARILY = "closed temporarily",
    CLOSED_FOR_REFURBISHMENT = "closed for refurbishment",
}

export enum Status {
    OPEN = "Open",
    CLOSED = "Closed",
    CLOSED_TEMPORARILY = "Closed Temporarily",
    CLOSED_FOR_REFURBISHMENT = "Closed for Refurbishment",
}

export enum RawType {
    RIDE = "ride",
    SHOW = "show",
    ATTRACTION = "attraction",
}

export enum Type {
    RIDE = "Ride",
    SHOW = "Show",
    ATTRACTION = "Attraction",
}

export enum RawPark {
    DISNEYLAND = "disneyland",
    CALIFORNIA_ADVENTURE = "california adventure",
}

export enum Park {
    DISNEYLAND = "Disneyland",
    CALIFORNIA_ADVENTURE = "California Adventure",
}

export enum RawAge {
    PRESCHOOLERS = "preschoolers",
    KIDS = "kids",
    TWEENS = "tweens",
    TEENS = "teens",
    ADULTS = "adults",
}

export enum Age {
    PRESCHOOLERS = "Preschoolers",
    KIDS = "Kids",
    TWEENS = "Tweens",
    TEENS = "Teens",
    ADULTS = "Adults",
}

export interface RawAttraction {
    name: string;
    actualName: string;
    type: RawType;
    park: RawPark;
    area: string;
    heightRequirement: number;
    ages: RawAge[];
    tags: string[];
    seasonal?: boolean;
    variant?: boolean;
    todaysHours: [number, number] | [];
    todaysTimes: number[];
    waitTime: number;
    status: RawStatus;
    waitTimeLastUpdated: string;
}

export interface Attraction {
    name: string;
    type: Type;
    park: Park;
    area: string;
    heightRequirement: number;
    ages: Age[];
    tags: string[];
    seasonal?: boolean;
    variant?: boolean;
    todaysHours: [number, number] | [];
    todaysTimes: number[];
    waitTime: number;
    status: Status;
    waitTimeLastUpdated: Date;
}