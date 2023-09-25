import { Paper } from "@mui/material";
import {
    DataGrid,
    GridFilterModel,
    type GridColDef,
    GridToolbar,
} from "@mui/x-data-grid";
import { AttractionView } from "../types/attraction";

const columns: GridColDef[] = [
    {
        field: "name",
        headerName: "Attraction",
        flex: 1,
    },
    {
        field: "area",
        headerName: "Area",
        flex: 1,
    },
    {
        field: "type",
        headerName: "Type",
        flex: 1,
    },
    {
        field: "status",
        headerName: "Status",
        flex: 1,
    },
    {
        field: "waitTime",
        headerName: "Wait Time",
        flex: 1,
    },
];

const initialFilter: GridFilterModel = {
    items: [{ field: "status", operator: "equals", value: "Open" }],
}; 

const DataView = (props: { rows: AttractionView[] }) => {
    return (
        <Paper elevation={1}>
            <DataGrid
                rows={props.rows}
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                initialState={{
                    filter: { filterModel: initialFilter },
                    pagination: { paginationModel: { pageSize: 10 } },
                    columns: {columnVisibilityModel: { status: false}}
                }}
            />
        </Paper>
    );
};

export default DataView;
