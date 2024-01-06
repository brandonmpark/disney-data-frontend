import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom/client";
import "typeface-lato";
import App from "./App.tsx";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        fontFamily: [
            "Lato"
        ].join(","),
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
