import { createContext } from "react";
import { Misdemeanour } from "../types/types";

export const CrimesContext = createContext < {
    crimes: Misdemeanour[];
    setCrimes: (crimes: Misdemeanour[]) => void;
} | undefined >
    (undefined);



