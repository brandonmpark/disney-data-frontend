import { createContext } from "react";
import { RawAttraction } from "../types/attraction";

export const AttractionContext = createContext<RawAttraction[]>([]);