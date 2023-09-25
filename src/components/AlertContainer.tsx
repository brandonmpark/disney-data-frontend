import { Alert, Box } from "@mui/material";
import type { Alert as AlertType } from "../types/alert";

const AlertContainer = ({ alerts }: { alerts: AlertType[] }) => {
    return (
        <Box>
            {alerts.map((alert) => {
                return <Alert severity={alert.type}>{alert.message}</Alert>;
            })}
        </Box>
    );
};

export default AlertContainer;