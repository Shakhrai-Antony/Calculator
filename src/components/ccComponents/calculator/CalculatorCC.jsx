import React from 'react'
import {connect} from "react-redux";
import {actions} from "@store/reducer/CalculatorReducer";
import {calculate, replacePlusMinus} from "@store/calculations/Calculations";
import {getExpression, getResult} from "@store/selectors/Selectors";
import PropTypes from 'prop-types'
import KeypadCC from "../keypad/KeypadCC";


class CalculatorCC extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.inputValue = this.inputValue.bind(this)
    }

    handleClick = (value) => () => {
        this.inputValue(value)
    }

    inputValue = (value) => {
        switch (value) {
            case '=':
                if (this.props.expression.length === 0) break
                // don't have expression nothing happened
                try {
                    // if count of "(" !== ")" throw Error
                    if (this.props.expression.match(/[()]/) && (this.props.expression.match(/[(]/g).length !== this.props.expression.match(/[)]/g).length)) {
                        throw Error;
                    }
                    this.props.loadHistory(this.props.expression)
                    this.props.changeResult(calculate(this.props.expression))
                } catch {
                    this.props.changeResult(calculate(this.props.expression))
                }
                this.props.changeExpression('')
                break
            case 'C':
                (this.props.expression.length > 0)
                    ? this.props.changeExpression(this.props.expression.slice(0, -1))
                    : this.props.changeResult('0')
                break
            case 'AC':
                this.props.changeExpression('')
                this.props.changeResult('0')
                this.props.resetHistory()
                break
            case '+/-':
                /* eslint-disable */
                if (this.props.expression.length !== 0 && this.props.expression.match(/[%*\/\-+=]/)) {
                    this.props.changeExpression(replacePlusMinus(this.props.expression))
                }
                break
            default:
                //if expression last index equal operator and current value equal operator slice expression till operator
                /* eslint-disable */
                if (this.props.expression.length !== 0 && this.props.expression[this.props.expression.length - 1].match(/[%*\/\-+]/)
                    && value.match(/[%*\/\-+]/)) {
                    this.props.changeExpression(this.props.expression.slice(0, this.props.expression.length - 1) + value)
                    break
                }
                if (this.props.expression.length === 0 && this.props.result !== 'Error' && this.props.result !== '0'
                    /* eslint-disable */
                    && this.props.result !== 'NaN' && value.match(/[%*\/\-+()=]/)) {
                    this.props.changeExpression(this.props.result + this.props.expression + value)
                }
                /* eslint-disable */
                if (this.props.expression.match(/[%*\/\-+=]/) && value.match(/[%*\/\-+=]/)) {
                    this.props.changeResult(calculate(this.props.expression))
                    this.props.changeExpression(this.props.expression + value)
                } else {
                    this.props.changeExpression(this.props.expression + value)
                }
        }
    }

    render() {
        return (
            <KeypadCC handleClick={this.handleClick} theme={this.props.theme}/>
        )
    }
}

CalculatorCC.propTypes = {
    expression: PropTypes.string,
    result: PropTypes.string,
    changeResult: PropTypes.func,
    changeExpression: PropTypes.func,
    loadHistory: PropTypes.func,
    resetHistory: PropTypes.func,
    theme: PropTypes.string
}

let mapStateToProps = (state) => {
    return {
        expression: getExpression(state),
        result: getResult(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeResult: (result) => {
            dispatch(actions.setResult(result))
        },
        changeExpression: (expression) => {
            dispatch(actions.setExpression(expression))
        },
        loadHistory: (history) => {
            dispatch(actions.setHistory(history))
        },
        resetHistory: () => {
            dispatch(actions.clearHistory())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorCC)