import { buttons } from "@componentsStyles/keypad/config";
import { Button, KeyPadWrapper } from "@styles";
import PropTypes from "prop-types";
import React from "react";

class KeypadCC extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick } = this.props;
    return (
      <KeyPadWrapper>
        {buttons.map(({ value, index, command }) => (
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
  }
}

KeypadCC.propTypes = {
  handleClick: PropTypes.func,
};

export default KeypadCC;
