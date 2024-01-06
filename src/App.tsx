import { Container } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Attraction from "./pages/Attraction";
import Attractions from "./pages/Attractions";

const App = () => (
    <>
        <MenuBar />
        <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="attractions" />} />
                    <Route path="/attractions">
                        <Route index element={<Attractions />} />
                        <Route path=":id" element={<Attraction />} />
                    </Route>
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </Container>
    </>
);

export default App;
