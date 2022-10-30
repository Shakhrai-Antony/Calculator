import React from 'react'
import Display from "@components/fcComponents/display/Display";
import History from "@components/fcComponents/history/History";
import Calculator from "@components/fcComponents/calculator/Calculator";
import {CalculatorSection, DisplaySection, HistorySection, Wrapper} from "./styles.home";
import {useSelector} from "react-redux";
import {getCurrentTheme} from "@store/selectors/Selectors";

const HomeFC = () => {

    const theme = useSelector(getCurrentTheme)

    return (
        <Wrapper theme={theme}>
            <HistorySection>
                <History theme={theme}/>
            </HistorySection>
            <CalculatorSection theme={theme}>
                <DisplaySection theme={theme}>
                    <Display theme={theme}/>
                </DisplaySection>
                <Calculator theme={theme}/>
            </CalculatorSection>
        </Wrapper>
    )
}

export default HomeFC