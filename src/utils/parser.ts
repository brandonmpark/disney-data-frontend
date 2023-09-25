import { Attraction } from "../types/attraction";
import { AttractionView } from "./../types/attraction";

const capitalize = (s: string) => {
    return s
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ");
};

const parseArea = (area: string) => {
    if (area === "mickeys toontown") return "Mickey's Toontown";
    if (area === "star wars galaxys edge") return "Star Wars: Galaxy's Edge";
    if (area === "main street usa") return "Main Street, U.S.A.";
    return capitalize(area);
}

export const parseAttraction = (attraction: Attraction): AttractionView => {
    return {
        ...attraction,
        name: attraction.actualName,
        park: capitalize(attraction.park),
        area: parseArea(attraction.area),
        type: capitalize(attraction.type),
        status: capitalize(attraction.status),
        waitTimeLastUpdated: new Date(attraction.waitTimeLastUpdated),
    };
};
