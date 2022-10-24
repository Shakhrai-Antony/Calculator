import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import s from './settings.module.scss'
import {getHistoryStatus} from "../../store/selectors/Selectors";
import {actions} from "../../store/reducer/Calculator";

const ControlPanel = () => {

    const dispatch = useDispatch()
    const historyStatus = useSelector(getHistoryStatus)

    const handleClick = (status) => () => {
        dispatch(actions.setHistoryStatus(status))
    }

    const toggleTheme = (status) => () => {
        dispatch(actions.setThemeStatus(status))
    }

    return (
        <div className={s.settings_section}>
            <div className={s.settings_history_status}>
                <button id='history_on' className={historyStatus ? s.active_button : s.inactive_button}  onClick={handleClick(true)}>Enable History</button>
                <button id='history_off' className={!historyStatus ? s.active_button : s.inactive_button} onClick={handleClick(false)}>Disable History</button>
            </div>
            <div className={s.settings_theme_status}>
                <button id='light_theme' className={s.light_theme} onClick={toggleTheme('light')}>Light Theme</button>
                <button id='dark_theme' className={s.dark_theme} onClick={toggleTheme('dark')}>Dark Theme</button>
            </div>
        </div>
    )
}

export default ControlPanel