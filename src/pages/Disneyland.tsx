import { useContext } from "react";
import DataTable from "../components/DataTable";
import { AttractionContext } from "../hooks/attractionContext";
import { RawPark } from "../types/attraction";
import { parseAttraction } from "../utils/parser";

const Disneyland = () => {
    const attractions = useContext(AttractionContext);

    return (
        <>
            <DataTable
                data={attractions
                    .filter(
                        (attraction) => attraction.park === RawPark.DISNEYLAND
                    )
                    .map(parseAttraction)}
            />
        </>
    );
};

export default Disneyland;
