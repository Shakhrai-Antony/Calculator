import React, {useEffect} from 'react'
import {Route, Routes} from "react-router-dom";
import Header from "@components/header/Header";
import styled, {ThemeProvider} from 'styled-components'
import {getCurrentTheme} from "@store/selectors/Selectors";
import {useSelector} from "react-redux";
import ErrorBoundary from "@components/errorBoundary/ErrorBoundary";
import HomeFC from "@pages/fcPages/home/Home";
import ControlPanelFC from "@pages/fcPages/settings/Settings";
import HomeCC from "@pages/ccPages/home/HomeСС";
import ControlPanelCC from "@pages/ccPages/settings/SettingsCC";


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

    useEffect(() => {
            localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeProvider theme={theme === 'light' || !theme ? lightTheme : darkTheme}>
            <ErrorBoundary>
                <StyledApp>
                    <Header/>
                    <Routes>
                        <Route path='/homefc' element={<HomeFC/>}/>
                        <Route path='/settingsfc' element={<ControlPanelFC/>}/>
                        <Route path='/homecc' element={<HomeCC/>}/>
                        <Route path='/settingscc' element={<ControlPanelCC/>}/>
                    </Routes>
                </StyledApp>
            </ErrorBoundary>
        </ThemeProvider>
    );
}

export default App;
