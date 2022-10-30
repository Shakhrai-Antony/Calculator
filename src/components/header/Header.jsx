import React from 'react'
import {Wrapper, Link, Navigation, NavigationLi, Title} from "./styles.header";

const links = [
    {id: 1, value: 'HomeFC', to: '/homefc' },
    {id: 2, value: 'SettingsFC', to: '/settingsfc' },
    {id: 3, value: 'HomeCC', to: '/homecc'},
    {id: 4, value: 'SettingsCC', to: '/settingscc'}
]

const Header = () => {
    return (
        <Wrapper>
            <Title id='calculator_App'>Calculator App</Title>
            <nav>
                <Navigation id='navigation_links'>
                    {links.map(({id, value, to}) => (
                        <NavigationLi key={id}>
                            <Link id={'link' + id} to={to}>{value}</Link>
                        </NavigationLi>
                    ))}
                </Navigation>
            </nav>
        </Wrapper>
    )
}

export default Header