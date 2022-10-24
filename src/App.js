import React from 'react'
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import styled, {ThemeProvider} from 'styled-components'
import {getCurrentTheme} from "./store/selectors/Selectors";
import {useSelector} from "react-redux";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";


const StyledApp = styled.div`
    min-height: 100vh;
    background-color: ${(props) => props.theme.body}
`
const darkTheme = {
    body: '#1c1c1c'
}
const lightTheme = {
    body: '#fff'
}

function App() {
    const theme = useSelector(getCurrentTheme)

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <ErrorBoundary>
                <StyledApp>
                    <Header/>
                    <Routes>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </StyledApp>
            </ErrorBoundary>
        </ThemeProvider>
    );
}

export default App;
