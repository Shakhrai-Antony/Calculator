import React from 'react'
import {useSelector} from "react-redux";
import {getExpression, getResult} from "@store/selectors/Selectors";
import {ExpressionSection, ResultSection} from "./styles.display";
import PropTypes from "prop-types";

const Display = ({ theme }) => {

    const expression = useSelector(getExpression)
    const result = useSelector(getResult)

    return (
        <>
            <ExpressionSection theme={theme} id='expression'>
                {expression}
            </ExpressionSection>
            <ResultSection theme={theme} id='result'>
                {result}
            </ResultSection>
        </>
    )
}

Display.propTypes = {
    theme: PropTypes.string
}


export default Display