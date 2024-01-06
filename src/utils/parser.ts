import { Age, Attraction, Park, RawAge, RawAttraction, RawPark, RawStatus, RawType, Status, Type } from "../types/attraction";

const capitalize = (s: string) => {
    return s
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ");
};

const parsePark = (park: RawPark) => {
    return capitalize(park) as Park;
}

const parseArea = (area: string) => {
    if (area === "mickeys toontown") return "Mickey's Toontown";
    if (area === "star wars galaxys edge") return "Star Wars: Galaxy's Edge";
    if (area === "main street usa") return "Main Street, U.S.A.";
    return capitalize(area);
}

const parseType = (type: RawType) => {
   return capitalize(type) as Type;
}

const parseStatus = (status: RawStatus) => {
    return capitalize(status) as Status;
}

const parseAges = (ages: RawAge[]) => {
    return ages.map((age) => capitalize(age) as Age);
}

export const parseAttraction = (attraction: RawAttraction): Attraction => {
    return {
        ...attraction,
        name: attraction.actualName,
        park: parsePark(attraction.park),
        area: parseArea(attraction.area),
        type: parseType(attraction.type),
        status: parseStatus(attraction.status),
        waitTimeLastUpdated: new Date(attraction.waitTimeLastUpdated),
        ages: parseAges(attraction.ages)
    };
};
