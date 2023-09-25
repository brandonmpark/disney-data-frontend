import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import DataView from "../components/DataView";
import { Attraction, Park } from "../types/attraction";
import * as api from "../utils/api";
import { parseAttraction } from "../utils/parser";

const WaitTimes = () => {
    const [attractions, setAttractions] = useState<Attraction[]>([]);

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
                    <DataView
                        rows={attractions.filter(
                            (attraction) => attraction.park === Park.DISNEYLAND
                        ).map(parseAttraction)}
                    />
                    <Divider />
                    <DataView
                        rows={attractions.filter(
                            (attraction) =>
                                attraction.park === Park.CALIFORNIA_ADVENTURE
                        ).map(parseAttraction)}
                    />
                </>
            )}
        </div>
    );
};

export default WaitTimes;
