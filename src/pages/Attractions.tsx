import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { RawAttraction, RawPark } from "../types/attraction";
import * as api from "../utils/api";
import { parseAttraction } from "../utils/parser";

const Attractions = () => {
    const [attractions, setAttractions] = useState<RawAttraction[]>([]);

    useEffect(() => {
        api.getAttractions().then((res) => {
            setAttractions(res);
        });
    }, []);

    return (
        <div>
            {attractions.length === 0 ? (
                "loading"
            ) : (
                <>
                    <DataTable data={attractions.filter((attraction) => attraction.park === RawPark.DISNEYLAND).map(parseAttraction)} />
                </>
            )}
        </div>
    );
};

export default Attractions;
