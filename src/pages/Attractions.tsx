import { useContext } from "react";
import DataTable from "../components/DataTable";
import { AttractionContext } from "../hooks/attractionContext";
import { RawPark } from "../types/attraction";
import { parseAttraction } from "../utils/parser";

const Attractions = () => {
    const attractions = useContext(AttractionContext);

    return (
        <div>
            {attractions.length === 0 ? (
                "loading"
            ) : (
                <>
                    <DataTable
                        data={attractions
                            .filter(
                                (attraction) =>
                                    attraction.park === RawPark.DISNEYLAND
                            )
                            .map(parseAttraction)}
                    />
                    <DataTable
                        data={attractions
                            .filter(
                                (attraction) =>
                                    attraction.park ===
                                    RawPark.CALIFORNIA_ADVENTURE
                            )
                            .map(parseAttraction)}
                    />
                </>
            )}
        </div>
    );
};

export default Attractions;
