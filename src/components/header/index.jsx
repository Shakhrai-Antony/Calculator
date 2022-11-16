import React from 'react';

import { links } from '@constants';
import {
  HeaderTitle,
  HeaderWrapper,
  Link,
  Navigation,
  NavigationLi,
} from '@styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle id="calculator_App">Calculator App</HeaderTitle>
      <nav>
        <Navigation id="navigation_links">
          {links.map(({ id, value, to }) => (
            <NavigationLi key={id}>
              <Link id={'link' + id} to={to}>
                {value}
              </Link>
            </NavigationLi>
          ))}
        </Navigation>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
