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

    const dimensions = { width: 500, height: 300 };
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };

    useEffect(() => {
        if (!data.entries.length) return; // Handling empty data

        const svg = d3.select(svgRef.current);

        const points = parseData(data);

        // Scales
        const xScale = d3
            .scaleTime()
            .domain([
                new Date(
                    new Date().setDate(
                        points[points.length - 1].timestamp.getDate() - 1
                    )
                ),
                points[points.length - 1].timestamp,
            ])
            .range([margin.left, dimensions.width - margin.right]);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(points, (d) => d.waitTime)] as [number, number])
            .range([dimensions.height - margin.bottom, margin.top]);

        // Line generator
        const line = d3
            .line<WaitTimeGraphEntry>()
            .x((d) => xScale(d.timestamp))
            .y((d) => yScale(d.waitTime))
            .curve(d3.curveBasis);

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
        <svg ref={svgRef} width={dimensions.width} height={dimensions.height}>
            <g
                ref={xAxisRef}
                transform={`translate(0, ${dimensions.height - margin.bottom})`}
            />
            <g
                ref={yAxisRef}
                transform={`translate(${margin.left}, 0)`}
            />
        </svg>
    );
};

export default WaitTimeGraph;
