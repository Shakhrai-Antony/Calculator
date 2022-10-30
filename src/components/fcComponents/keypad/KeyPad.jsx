import React from 'react'
import PropTypes from "prop-types";
import {Button, Wrapper} from "./styles.keypad";

const buttons = ['7', '8', '9', '*', '/', '4', '5', '6', '-','+', '1', '2', '3', '%', '.', '(', '0', ')', '=', 'AC', 'C', '+/-']

const KeyPad = ( {handleClick, theme} ) => {

    return (
        <Wrapper theme={theme}>
            {buttons.map((value, index) => (
                <Button theme={theme} id={'handle_Click' + index} onClick={handleClick(value)} key={value}>{value}</Button>
            ))}
        </Wrapper>
    )
}

KeyPad.propTypes = {
    handleClick: PropTypes.func,
    theme: PropTypes.string
}

export default KeyPad