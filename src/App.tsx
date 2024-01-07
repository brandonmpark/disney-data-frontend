import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import { AttractionContext } from "./hooks/attractionContext";
import Attraction from "./pages/Attraction";
import Attractions from "./pages/Attractions";
import { RawAttraction } from "./types/attraction";
import * as api from "./utils/api";

const App = () => {
    const [attractions, setAttractions] = useState<RawAttraction[]>([]);

    useEffect(() => {
        api.getAttractions().then((res) => {
            setAttractions(res);
        });
    }, []);

    return (
        <>
            <AttractionContext.Provider value={attractions}>
                <MenuBar />
                <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
                    <HashRouter>
                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to="attractions" />}
                            />
                            <Route path="/attractions">
                                <Route index element={<Attractions />} />
                                <Route path=":id" element={<Attraction />} />
                            </Route>
                            <Route path="*" element={<h1>404 Not Found</h1>} />
                        </Routes>
                    </HashRouter>
                </Container>
            </AttractionContext.Provider>
        </>
    );
};

export default App;
