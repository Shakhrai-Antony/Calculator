import React from "react";

import { links } from "./config";
import {
  Link,
  Navigation,
  NavigationLi,
  Title,
  Wrapper,
} from "./styles.header";

const Header = () => {
  return (
    <Wrapper>
      <Title id="calculator_App">Calculator App</Title>
      <nav>
        <Navigation id="navigation_links">
          {links.map(({ id, value, to }) => (
            <NavigationLi key={id}>
              <Link id={"link" + id} to={to}>
                {value}
              </Link>
            </NavigationLi>
          ))}
        </Navigation>
      </nav>
    </Wrapper>
  );
};

export default Header;
