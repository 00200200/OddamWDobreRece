import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="FooterContainer">
            <div className="FooterWrapper">
                <p>Copyright by Coders Lab</p>
                <img src={require("../assets/Facebook.png").default}/>
                <img src={require("../assets/Instagram.png").default}/>

            </div>
        </div>
    );
};

export default Footer;