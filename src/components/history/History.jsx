import React from 'react'
import {useSelector} from "react-redux";
import {getHistory} from "../../store/selectors/Selectors";

const History = () => {

    const history = useSelector(getHistory)

    return (
        <div>
            <h3>History</h3>
            {history.map((value, index) => (
                <p key={index}>{value}</p>
            ))}
        </div>
    )
}

export default History