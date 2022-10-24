import React from 'react'
import s from './keypad.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getExpression, getResult} from "../../store/selectors/Selectors";
import {calculate} from "../../store/calculations/Calculations";
import {actions} from "../../store/reducer/Calculator";

const buttons = ['7', '8', '9', '*', '/', '4', '5', '6', '-','+', '1', '2', '3', '%', '.', '(', '0', ')', '=', 'AC', 'C']

const KeyPad = () => {

    const dispatch = useDispatch()
    const expression = useSelector(getExpression)
    const result = useSelector(getResult)

    const handleClick = (value) => () => {
        switch (value) {
            case '=':
                if (expression.length === 0) break
                // don't have expression nothing happened
                try {
                    // if count of "(" !== ")" throw Error
                    if (expression.match(/[()]/) && (expression.match(/[(]/g).length !== expression.match(/[)]/g).length)) {
                        throw Error;
                    }
                    dispatch(actions.setHistory(expression))
                    dispatch(actions.setResult(calculate(expression)))
                } catch {
                    dispatch(actions.setResult('Error'))
                }
                dispatch(actions.setExpression(''))
                break
            case 'C':
                (expression.length > 0) ? dispatch(actions.setExpression(expression.slice(0, -1))) : dispatch(actions.setResult('0'))
                break
            case 'AC':
                dispatch(actions.setExpression(''))
                dispatch(actions.setResult('0'))
                break
            default:
                //if expression last index equal operator and current value equal operator slice expression till operator
                if (expression.length !== 0 && expression[expression.length - 1].match(/[%\/*\-+]/) && value.match(/[%\/*\-+]/)) {
                    dispatch(actions.setExpression(expression.slice(0, expression.length - 1) + value))
                    break
                }
                (expression.length === 0 && result !== 'Error' && result !== '0' && result !== 'NaN' && value.match(/[%\/*\-+\(\)=]/)) ?
                    dispatch(actions.setExpression(result + expression + value)) :
                    dispatch(actions.setExpression(expression + value))
        }
    }

    return (
        <div className={s.keypad_section}>
            {buttons.map((value, index) => (
                <button id={'handle_Click' + index} onClick={handleClick(value)} key={value}>{value}</button>
            ))}
        </div>
    )
}


export default KeyPad