import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { WaitTimeData, WaitTimeGraphEntry } from "../types/waitTime";

const WaitTimeGraph = ({ data }: { data: WaitTimeData }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    const dimensions = { width: 500, height: 300 };
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };

    useEffect(() => {
        if (!data.entries.length) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const points = data.entries.map((entry) => ({
            ...entry,
            timestamp: new Date(entry.timestamp),
        }));

        const latestTimestamp = d3.max(points, (d) => d.timestamp) as Date;
        const twoDaysAgo = new Date(latestTimestamp);
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2); // Adjust for two days

        // Scales
        const xScale = d3
            .scaleTime()
            .domain([twoDaysAgo, latestTimestamp])
            .range([margin.left, dimensions.width - margin.right]);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(points, (d) => d.waitTime)] as number[])
            .range([dimensions.height - margin.bottom, margin.top]);

        const line = d3
            .line<WaitTimeGraphEntry>()
            .x((d) => xScale(d.timestamp))
            .y((d) => yScale(d.waitTime))
            .curve(d3.curveBasis);

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        const zoomBehavior = d3
            .zoom()
            .scaleExtent([1, 5])
            .translateExtent([
                [0, 0],
                [dimensions.width, dimensions.height],
            ])
            .on("zoom", (event) => {
                const zoomState = event.transform;
                svg.select(".x-axis").call(
                    xAxis.scale(zoomState.rescaleX(xScale))
                );
                svg.select(".line").attr(
                    "d",
                    line.x((d) => zoomState.rescaleX(xScale)(d.timestamp))
                );
            });

        svg.call(zoomBehavior);

        // Append the line
        svg.append("path")
            .datum(points)
            .attr("class", "line")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-width", 2);

        svg.append("g")
            .attr("class", "x-axis")
            .attr(
                "transform",
                `translate(0, ${dimensions.height - margin.bottom})`
            )
            .call(xAxis);

        svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", `translate(${margin.left}, 0)`)
            .call(yAxis);
    }, [data]); // Dependency array

    return (
        <svg ref={svgRef} width={dimensions.width} height={dimensions.height} />
    );
};

export default WaitTimeGraph;
