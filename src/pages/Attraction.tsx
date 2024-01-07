import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WaitTimeGraph from "../components/WaitTimeGraph";
import type { WaitTimeData } from "../types/waitTime";
import * as api from "../utils/api";

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
            <WaitTimeGraph data={data} />
        </div>
    );
};

export default Attraction;
