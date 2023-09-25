export enum Status {
    OPEN = "open",
    CLOSED = "closed",
    CLOSED_TEMPORARILY = "closed temporarily",
    CLOSED_FOR_REFURBISHMENT = "closed for refurbishment",
}

export enum StatusView {
    OPEN = "Open",
    CLOSED = "Closed",
    CLOSED_TEMPORARILY = "Closed Temporarily",
    CLOSED_FOR_REFURBISHMENT = "Closed for Refurbishment",
}

export enum Type {
    RIDE = "ride",
    SHOW = "show",
    ATTRACTION = "attraction",
}

export enum TypeView {
    RIDE = "Ride",
    SHOW = "Show",
    ATTRACTION = "Attraction",
}

export enum Park {
    DISNEYLAND = "disneyland",
    CALIFORNIA_ADVENTURE = "california adventure",
}

export enum ParkView {
    DISNEYLAND = "Disneyland",
    CALIFORNIA_ADVENTURE = "California Adventure",
}

export enum Age {
    PRESCHOOLERS = "preschoolers",
    KIDS = "kids",
    TWEENS = "tweens",
    TEENS = "teens",
    ADULTS = "adults",
}

export enum AgeView {
    PRESCHOOLERS = "Preschoolers",
    KIDS = "Kids",
    TWEENS = "Tweens",
    TEENS = "Teens",
    ADULTS = "Adults",
}

export interface Attraction {
    name: string;
    actualName: string;
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
    waitTimeLastUpdated: string;
}

export interface AttractionView {
    name: string;
    actualName: string;
    type: string;
    park: string;
    area: string;
    heightRequirement: number;
    ages: string[];
    tags: string[];
    seasonal?: boolean;
    variant?: boolean;
    todaysHours: [number, number] | [];
    todaysTimes: number[];
    waitTime: number;
    status: string;
    waitTimeLastUpdated: Date;
}