import { Line, LineChart, XAxis, YAxis } from "recharts";
import { WaitTimeGraphEntry } from "../types/waitTime";

const WaitTimeGraph = ({ data }: { data: WaitTimeGraphEntry[] }) => {
    const dateFormatter = (date: number) => {
        const d = new Date(date);
        return `${d.getHours().toString().padStart(2, "0")}:${d
            .getMinutes()
            .toString()
            .padStart(2, "0")}`;
    };

    const domain = ([dataMin, dataMax]: [number, number]): [number, number] => {
        return [dataMin, dataMax];
    };

    return (
        <LineChart width={600} height={300} data={data}>
            <XAxis
                dataKey="timestamp"
                type="number"
                // tickFormatter={dateFormatter}
                domain={['dataMax - 10000', 'dataMax']}
                scale="time"
            />
            <YAxis />
            <Line type="basis" dataKey="waitTime" stroke="#8884d8" dot={false} />
        </LineChart>
    );
};

export default WaitTimeGraph;
