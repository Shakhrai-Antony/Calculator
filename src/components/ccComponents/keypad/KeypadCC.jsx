import { Button, Wrapper } from "@componentsStyles/keypad/styles.keypad";
import PropTypes from "prop-types";
import React from "react";

import { buttons } from "./config";

class KeypadCC extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper theme={this.props.theme}>
        {buttons.map((value, index) => (
          <Button
            theme={this.props.theme}
            id={"handle_Click" + index}
            onClick={this.props.handleClick(value)}
            key={value}
          >
            {value}
          </Button>
        ))}
      </Wrapper>
    );
  }
}

KeypadCC.propTypes = {
  handleClick: PropTypes.func,
  theme: PropTypes.string,
};

export default KeypadCC;
