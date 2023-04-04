import { useContext, useState } from "react";
import { Misdemeanour } from "../types/types";
import { CrimesContext } from "./crimes";

const CrimesProvider = ({ children }: { children: React.ReactNode }) => {
    const [crimes, setCrimes] = useState<Misdemeanour[]>([]);

    const value = {
        crimes,
        setCrimes,
    };
    return (
        <CrimesContext.Provider value={value}>
            {children}
        </CrimesContext.Provider>
    );
};

const useCrimes = () => {
    const context =useContext(CrimesContext);
    if (context === undefined) {
        throw new Error("useCrimes must be used within a CrimesProvider");
    }
    return context;
}

export { CrimesProvider, useCrimes };