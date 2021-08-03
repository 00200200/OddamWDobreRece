import React from 'react';
import HomeHeader from "./HomeHeader";
import {Link} from "react-router-dom";

const LogOut = () => {
    return (
        <>
            <HomeHeader></HomeHeader>
            <div className="logOutContainer">
                <h1>Wylogowanie nastąpiło<br/> pomyślnie</h1>
                <img src={require("../assets/Decoration.svg").default}/>
            </div>
            <div className="logOutBtnContainer">
                <Link className="logOutBtn" to="/"><a>Strona główna</a></Link>
            </div>

        </>
    );
};

export default LogOut;