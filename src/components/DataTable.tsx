import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
} from "@mui/material";
import { useState } from "react";
import { Attraction } from "../types/attraction";

const DataTable = ({ data }: { data: Attraction[] }) => {
    const [sortField, setSortField] = useState<keyof Attraction | null>(null);
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    const handleSort = (field: keyof Attraction) => {
        const isAsc = sortField === field && sortDirection === "asc";
        setSortField(field);
        setSortDirection(isAsc ? "desc" : "asc");
    };

    const sortedData = [...data].sort((a, b) => {
        if (!sortField) return 0;
        if (a[sortField] === undefined || b[sortField] === undefined) return 0;

        const fieldA = a[sortField];
        const fieldB = b[sortField];

        let comparison = 0;
        if (typeof fieldA === "number" && typeof fieldB === "number") {
            comparison = fieldA < fieldB ? -1 : fieldA > fieldB ? 1 : 0;
        } else if (typeof fieldA === "string" && typeof fieldB === "string") {
            comparison = fieldA.localeCompare(fieldB);
        }

        return sortDirection === "asc" ? comparison : -comparison;
    });

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TableSortLabel
                                active={sortField === "name"}
                                direction={
                                    sortField === "name" ? sortDirection : "asc"
                                }
                                onClick={() => handleSort("name")}
                            >
                                Name
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortField === "waitTime"}
                                direction={
                                    sortField === "waitTime"
                                        ? sortDirection
                                        : "asc"
                                }
                                onClick={() => handleSort("waitTime")}
                            >
                                Wait Time
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={sortField === "status"}
                                direction={
                                    sortField === "status"
                                        ? sortDirection
                                        : "asc"
                                }
                                onClick={() => handleSort("status")}
                            >
                                Status
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedData.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.waitTime}</TableCell>
                            <TableCell>{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
