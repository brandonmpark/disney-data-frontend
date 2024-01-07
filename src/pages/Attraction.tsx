import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WaitTimeGraph from "../components/WaitTimeGraph";
import { AttractionContext } from "../hooks/attractionContext";
import { RawAttraction } from "../types/attraction";
import type { WaitTimeData } from "../types/waitTime";
import * as api from "../utils/api";

const Attraction = () => {
    const [data, setData] = useState<WaitTimeData | null>(null);
    const [attraction, setAttraction] = useState<RawAttraction | null>(null);
    const attractions = useContext(AttractionContext);
    const params = useParams<{ id: string }>() as { id: string };

    useEffect(() => {
        api.getAttractionData(params.id).then((res) => {
            setData(res);
            setAttraction(
                attractions.find(
                    (attraction) => attraction.id === params.id
                ) as RawAttraction
            );
        });
    }, []);

    return data === null ? (
        "loading"
    ) : (
        <div>
            <h1>{attraction?.actualName}</h1>
            <WaitTimeGraph data={data} />
        </div>
    );
};

export default Attraction;
