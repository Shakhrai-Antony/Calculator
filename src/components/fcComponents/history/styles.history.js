import styled, {css} from 'styled-components'

const Wrapper = styled.div `
    display:flex;
    width: 100%;
    justify-content: space-between;
`

const SharedButton = css `
    max-height: 50px;
    margin-top: 300px;
    cursor: pointer;
    font-size: 25px;
    width: 42px;
    height: 42px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.span `
    ${SharedButton}
    background-color: ${props => (props.theme === 'light' ? '#a9a9a9' : '#fff')}; 
    color: ${props => (props.theme === 'light' ? '#fff' : '#000')};
`

const SharedHistoryStyle = css `
    border-radius: 15px;
    overflow-y:auto;   
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
`

const HistorySection = styled.div `
    ${SharedHistoryStyle}
    background-color: ${props => (props.theme === 'light' ? '#a9a9a9' : '#fff')};
    color: ${props => (props.theme === 'light' ? '#fff' : '#000')};
`

export {Wrapper, Button, HistorySection}