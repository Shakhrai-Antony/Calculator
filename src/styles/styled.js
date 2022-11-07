import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import { lightTheme } from "../theme";

export const StyledApp = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.body};
`;

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 20px 40px;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.grayishBlue};
`;

export const Navigation = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: gray;
  font-size: 22px;
  padding: 0;
  align-items: center;
  &:after {
    content: "";
    width: 0;
    height: 2px;
    display: block;
    background: ${({ theme }) => theme.colors.defaultWhite};
    transition-duration: 300ms;
  }
  &:hover {
    &:after {
      width: 100%;
    }
  }
  &.active {
    text-decoration: ${({ theme }) => theme.colors.defaultWhite};
    color: ${({ theme }) => theme.colors.defaultWhite};
    &:after {
      width: 100%;
    }
  }
`;

export const NavigationLi = styled.li`
  align-items: center;
  padding-right: 25px;
  height: 10vh;
  display: flex;
`;

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.defaultWhite};
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: ${({ theme }) => (theme.width = 700)}px;
  margin: 50px auto;
`;
export const HistorySection = styled.div`
  order: 2;
  display: flex;
  width: ${({ theme }) => (theme.width = 350)}px;
`;

export const CalculatorSection = styled.div`
  order: 1;
  text-align: end;
  border-radius: 15px;
  width: ${({ theme }) => (theme.width = 400)}px;
  padding: 10px;
  background: ${({ theme }) =>
    theme === lightTheme ? theme.colors.lightGrey : theme.colors.defaultWhite};
  border: 2px solid #c0c0c0;
`;

export const DisplaySection = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme === lightTheme ? theme.colors.lightSlateGray : theme.colors.lavender};
  height: ${({ theme }) => (theme.height = 120)}px;
  position: relative;
`;

export const SettingsSection = styled.div`
  margin: 100px 0 0 150px;
`;

export const Title = styled.h1`
  margin-bottom: 50px;
  font-style: italic;
  color: ${({ theme }) =>
    theme === lightTheme
      ? theme.colors.defaultBlack
      : theme.colors.defaultWhite};
`;

export const Text = styled.p`
  margin: 20px 0 20px 0;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  color: ${({ theme }) =>
    theme === lightTheme
      ? theme.colors.defaultBlack
      : theme.colors.defaultWhite};
`;

export const Select = styled.select`  
    display: block; 
    font-size: 16px; 
    font-family: sans-serif; 
    font-weight: 700; 
    color: #444; 
    line-height: 1.3; 
    padding: .6em 1.4em .5em .8em; 
    box-sizing: border-box; 
    margin: 0; 
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04); 
    border-radius: .5em;
    -webkit-appearance: none;
    background-color: #fff; 
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%); 
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%; 
    .select-css::-ms-expand { display: none; } 
    .select-css:hover { border-color: #888; } 
    .select-css:focus { 
                        border-color: #aaa; 
                        box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
                        box-shadow: 0 0 0 3px -moz-mac-focusring; 
                        color: #222;
                        outline: none; 
                        } 
    .select-css option { font-weight:normal; } 
    *[dir="rtl"] .select-css, :root:lang(ar) .select-css, :root:lang(iw) .select-css { 
    background-position: left .7em top 50%, 0 0; 
    padding: .6em .8em .5em 1.4em; 
`;

export const ClearHistory = styled.button`
  margin-top: 50px;
  border-radius: 15px;
  padding: 20px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.tomato};
  border: transparent;
  color: ${({ theme }) => theme.colors.defaultWhite};
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const ExpressionSection = styled.div`
  margin-bottom: 50px;
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) =>
    theme === lightTheme
      ? theme.colors.defaultWhite
      : theme.colors.defaultBlack};
  padding: 5px;
  overflow: hidden;
`;

export const ResultSection = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) =>
    theme === lightTheme
      ? theme.colors.defaultWhite
      : theme.colors.defaultBlack};
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

export const KeyPadWrapper = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: ${({ theme }) => (theme.width = 400)}px;
  box-sizing: border-box;
  padding: 10px;
`;

export const Button = styled.button`
  box-sizing: border-box;
  width: 70px;
  padding: 22px;
  border-radius: 40px;
  border: 1px solid #fffff0;
  background-color: ${({ theme }) =>
    theme === lightTheme ? theme.colors.defaultWhite : theme.colors.darkGrey};
  color: ${({ theme }) =>
    theme === lightTheme
      ? theme.colors.defaultBlack
      : theme.colors.defaultWhite};
  font-size: 20px;
  margin-bottom: 15px;
  margin-right: 5px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: ${({ theme }) =>
      theme === lightTheme ? theme.colors.sienna : theme.colors.tomato};
    border-color: #a0522d;
    color: #fff;
  }
`;

export const HistoryWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SharedButton = css`
  max-height: 50px;
  margin-top: 300px;
  cursor: pointer;
  font-size: 25px;
  width: ${({ theme }) => (theme.width = 42)}px;
  width: ${({ theme }) => (theme.height = 42)}px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HistoryButton = styled.span`
  ${SharedButton}
  background-color: ${({ theme }) =>
    theme === lightTheme ? theme.colors.lightGrey : theme.colors.defaultWhite};
  color: ${({ theme }) =>
    theme === lightTheme
      ? theme.colors.defaultWhite
      : theme.colors.defaultBlack};
`;

const SharedHistoryStyle = css`
  border-radius: 15px;
  overflow-y: auto;
  text-align: center;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  padding-top: 20px;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  -ms-line-clamp: 2;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
`;

export const HistoryBlock = styled.div`
  ${SharedHistoryStyle}
  background-color: ${({ theme }) =>
    theme === lightTheme ? theme.colors.lightGrey : theme.colors.defaultWhite};
  color: ${({ theme }) =>
    theme === lightTheme
      ? theme.colors.defaultWhite
      : theme.colors.defaultBlack};
`;
