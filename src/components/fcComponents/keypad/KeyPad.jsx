import PropTypes from "prop-types";
import React from "react";

import { buttons } from "./config";
import { Button, Wrapper } from "./styles.keypad";

const KeyPad = ({ handleClick, theme }) => {
  return (
    <Wrapper theme={theme}>
      {buttons.map((value, index) => (
        <Button
          theme={theme}
          id={"handle_Click" + index}
          onClick={handleClick(value)}
          key={value}
        >
          {value}
        </Button>
      ))}
    </Wrapper>
  );
};

KeyPad.propTypes = {
  handleClick: PropTypes.func,
  theme: PropTypes.string,
};

export default KeyPad;
