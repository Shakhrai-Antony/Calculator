import React from 'react'
import s from './home.module.scss'
import Display from "../../components/display/Display";
import KeyPad from "../../components/keypad/Keypad";
import History from "../../components/history/History";

const Home = () => {
    return (
        <div className={s.home_section}>
            <div className={s.history_section}>
                <History/>
            </div>
            <div className={s.calculator_section}>
                <div className={s.display_section}>
                    <Display/>
                </div>
                <KeyPad/>
            </div>
        </div>
    )
}

export default Home