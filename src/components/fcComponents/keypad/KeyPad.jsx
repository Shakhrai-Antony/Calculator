import { Button, KeyPadWrapper } from "@styles";
import PropTypes from "prop-types";
import React from "react";

import { buttons } from "./config";

const KeyPad = ({ handleClick }) => {
  return (
    <KeyPadWrapper>
      {buttons.map(({ value, command }, index) => (
        <Button
          id={"handle_Click" + index}
          onClick={handleClick(command)}
          key={value}
        >
          {value}
        </Button>
      ))}
    </KeyPadWrapper>
  );
};

KeyPad.propTypes = {
  handleClick: PropTypes.func,
};

export default KeyPad;
