import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WaitTimeGraph from "../components/WaitTimeGraph";
import { Status } from "../types/attraction";
import type { WaitTimeData, WaitTimeGraphEntry } from "../types/waitTime";
import * as api from "../utils/api";

const mapDataToGraph = (data: WaitTimeData): WaitTimeGraphEntry[] =>
    data.entries
        .filter((entry) => entry.status === Status.OPEN)
        .map((entry) => {
            return {
                timestamp: new Date(entry.timestamp).valueOf(),
                waitTime: entry.waitTime,
            };
        });

const Attraction = () => {
    const [data, setData] = useState<WaitTimeData | null>(null);
    const params = useParams<{ id: string }>() as { id: string };

    useEffect(() => {
        api.getAttractionData(params.id).then((res) => {
            setData(res);
        });
    }, []);

    return data === null ? (
        "loading"
    ) : (
        <div>
            <h1>{data.attractionName}</h1>
            <WaitTimeGraph data={mapDataToGraph(data)} />
        </div>
    );
};

export default Attraction;
