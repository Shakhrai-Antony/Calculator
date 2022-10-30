import React, {useState} from 'react'
import {useSelector} from "react-redux";
import {getHistory} from "@store/selectors/Selectors";
import {Button, HistorySection, Wrapper} from "./styles.history";
import PropTypes from "prop-types";

const History = ( {theme} ) => {

    const history = useSelector(getHistory)
    const [historyStatus, setHistoryStatus] = useState(false)

    const handleClick = () => {
        setHistoryStatus(!historyStatus)
    }

    return (
        <Wrapper>
            <Button theme={theme} onClick={handleClick}>➛</Button>
            {historyStatus
                ?
                <HistorySection theme={theme}>
                    <h3>History</h3>
                    {history.map((value, index) => (
                    <p key={index}>{value}</p>))}
                </HistorySection>
                    :
                null
            }
        </Wrapper>
    )
}

History.propTypes = {
    theme: PropTypes.string
}

export default History