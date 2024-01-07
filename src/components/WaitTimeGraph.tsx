import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { WaitTimeData, WaitTimeGraphEntry } from "../types/waitTime";

const WaitTimeGraph = ({ data }: { data: WaitTimeData }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const xAxisRef = useRef<SVGGElement | null>(null);
    const yAxisRef = useRef<SVGGElement | null>(null);

    const parseData = (data: WaitTimeData): WaitTimeGraphEntry[] => {
        return data.entries.map((entry) => ({
            ...entry,
            timestamp: new Date(entry.timestamp),
        }));
    };

    useEffect(() => {
        if (!data.entries.length) return; // Handling empty data

        const svg = d3.select(svgRef.current);
        const width = 500; // Consider making these responsive
        const height = 300;

        const points = parseData(data);

        // Scales
        const xScale = d3
            .scaleTime()
            .domain(d3.extent(points, (d) => d.timestamp) as [Date, Date])
            .range([0, width]);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(points, (d) => d.waitTime)] as [number, number])
            .range([height, 0]);

        // Line generator
        const line = d3
            .line<WaitTimeGraphEntry>()
            .x((d) => xScale(d.timestamp))
            .y((d) => yScale(d.waitTime));

        const linePath = line(points);

        // Axes
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        d3.select(xAxisRef.current).call(xAxis as any);
        d3.select(yAxisRef.current).call(yAxis as any);

        // Append the path
        svg.append("path")
            .attr("d", linePath)
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-width", 2);
    }, [data]); // Dependency array

    return (
        <svg ref={svgRef} width="500" height="300">
            <g transform="translate(50, 250)">
                <g ref={xAxisRef} />
                <g ref={yAxisRef} transform="translate(0,-250)" />
            </g>
        </svg>
    );
};

export default WaitTimeGraph;
