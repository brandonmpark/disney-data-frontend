import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const MenuBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Wait Times</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default MenuBar;
