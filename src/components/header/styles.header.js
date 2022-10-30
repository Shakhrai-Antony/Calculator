import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const Wrapper = styled.header`
  display: flex;
  padding: 20px 40px;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  background-color: #282c34;
`

const Navigation = styled.ul`
      display: flex;
      margin: 0;
      padding: 0;
      width: 100%;
      justify-content: center;
      text-align: center;
      align-items: center;  
`

const Link = styled(NavLink)`
          text-decoration: none;
          color: gray;
          font-size: 22px;
          padding: 0;
          align-items: center;
             &:after  {
                content: '';
                width: 0;
                height: 2px;
                display: block;
                background: #ffffff;
                transition-duration: 300ms;
        }
        &:hover{
           &:after {
                width: 100%
                  }
        } 
          &.active {
            text-decoration: #ffffff;
            color: #ffffff;
          &:after {
            width:100%;
          }
        }            
`

const NavigationLi = styled.li`
        align-items: center;
        padding-right: 25px;
        height: 10vh;
        display: flex;  
`

const Title = styled.h1`
    color: #fff;
`

export {Wrapper, Title, Navigation, NavigationLi, Link}