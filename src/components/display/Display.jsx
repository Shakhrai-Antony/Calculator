import React from 'react'
import {useSelector} from "react-redux";
import {getExpression, getResult} from "../../store/selectors/Selectors";
import s from './display.module.scss'

const Display = () => {

    const expression = useSelector(getExpression)
    const result = useSelector(getResult)

    return (
        <div>
            <div className={s.expression_section} id='expression'>
                {expression}

            </div>
            <div id='result' className={s.result_section}>
                {result}
            </div>
        </div>
    )
}

export default Display