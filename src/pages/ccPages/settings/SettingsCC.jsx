import React from 'react'
import {connect} from "react-redux";
import {ClearHistory, Select, SettingsSection, Text, Title} from "@pagesStyles/settings/styles.settings";
import {actions} from "@store/reducer/CalculatorReducer";
import PropTypes from "prop-types";
import {getCurrentTheme} from "../../../store/selectors/Selectors";

class ControlPanelCC extends React.Component {

    handleClick = () => {
        this.props.resetHistory()
    }

    handleChange = (e) => {
        this.props.changeTheme(e.currentTarget.value)
    }

    render() {
        return (
            <SettingsSection>
                <Title theme={this.props.theme}>Settings</Title>
                <Text theme={this.props.theme}>Choose Theme</Text>
                <form>
                    <label>
                        <Select defaultValue={''} onChange={this.handleChange} id='theme' name='theme'>
                            <option disabled hidden value=''>Choose Theme</option>
                            <option id='light_theme' value="light">Light theme</option>
                            <option id='dark_theme' value="dark">Dark theme</option>
                        </Select>
                    </label>
                </form>
                <ClearHistory onClick={this.handleClick}>Clear History</ClearHistory>
            </SettingsSection>
        )
    }
}

ControlPanelCC.propTypes = {
    resetHistory: PropTypes.func,
    changeTheme: PropTypes.func,
    theme: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        theme: getCurrentTheme(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetHistory: () => {
            dispatch(actions.clearHistory())
        },
        changeTheme: (theme) => {
            dispatch(actions.setThemeStatus(theme))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanelCC)