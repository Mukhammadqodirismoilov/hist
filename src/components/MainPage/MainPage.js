import React from 'react';
import s from './MainPage.module.css';
import {NavLink} from "react-router-dom";
import car from './../../images/1.png'

const MainPage = () => {
        return (
            <div className="Home">
            <div className={s.main + ` positon-relative`} style={{backgroundImage: `url(${car})`}}>
                <NavLink to="/SecondPage" className={`position-absolute ` + s.hiddenButton}>  </NavLink>
            </div>
                </div>
        )
    };

export default MainPage;


