import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components";
import Info from "./context/Info"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import OptionsPage from "./pages/OptionsPage"
import PlanPage from "./pages/PlanPage"
import GlobalStyle from "./assets/styles/GlobalStyle";

export default function App() {
    return (
        <BrowserRouter>
            <ContainerScreen>
                <GlobalStyle />
                <Info>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/sign-up" element={<RegisterPage />} />
                        <Route path="/subscriptionsID" element={<PlanPage />} />
                        <Route path="/subscriptions" element={<OptionsPage />} />
                        <Route path="/home" element={<HomePage />} />
                    </Routes>
                </Info>
            </ContainerScreen>
        </BrowserRouter>
    )
}

const ContainerScreen = styled.div`
background-color: black;
margin: 0 auto;
min-width: 40vh;
height: 100vh;
`