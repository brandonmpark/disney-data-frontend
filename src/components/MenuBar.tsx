import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const MenuBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/disneyland"
                    sx={{ textDecoration: "none", color: "white" }}
                >
                    Disneyland
                </Typography>
                <Typography
                    variant="h6"
                    marginLeft="2em"
                    component={Link}
                    to="/california-adventure"
                    sx={{ textDecoration: "none", color: "white" }}
                >
                    California Adventure
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default MenuBar;
