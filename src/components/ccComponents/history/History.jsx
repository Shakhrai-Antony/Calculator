import React from 'react'
import {connect} from "react-redux";
import {getHistory} from "@store/selectors/Selectors";
import {Wrapper, Button, HistorySection} from "@componentsStyles/history/styles.history";
import PropTypes from 'prop-types'

class History extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            historyStatus: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState({
            historyStatus: !this.state.historyStatus
        })
    }

    render () {
        return (
            <Wrapper>
                <Button theme={this.props.theme} onClick={this.handleClick}>➛</Button>
                {this.state.historyStatus
                    ?
                    <HistorySection theme={this.props.theme}>
                        <h3>History</h3>
                        {this.props.history.map((value, index) => (
                            <p key={index}>{value}</p>))}
                    </HistorySection>
                    :
                    null
                }
            </Wrapper>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        history: getHistory(state)
    }
}

History.propTypes = {
    theme: PropTypes.string,
    history: PropTypes.array
}

export default connect(mapStateToProps)(History)