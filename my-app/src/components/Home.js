import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import React from 'react';
import HomeThreeColumns from "./HomeThreeColumns";
import FourSteps from "./FourSteps";
import {HashLink} from "react-router-hash-link";
import AboutUs from "./AboutUS";
import HomeHeader from "./HomeHeader";
import Contact from "./Contact";
import Footer from "./Footer";
import WhoWeHelp from "./WhoWeHelp";

const Home = () => {
    return (
        <>
        <div className="container">
         <HomeHeader></HomeHeader>
            <div className="HeaderContainer">
                <div className="HeaderLeftSideContainer">
                    <img  src={require("../assets/Hero Image.png").default} className="headerBackground"/></div>
                <div className="HeaderRightSideContainer">

                <div className="underNavContainer">
                    <h1>Zacznij pomagać<br></br>
                    Oddaj niechciane rzeczy w zaufane ręcę</h1>
                    <img src={require("../assets/Decoration.svg").default}/>
                    <div className="RightSideLinks">
                        <Link className="RightSideLink" to="/logowanie"><a>Oddaj<br></br> Rzeczy</a></Link>
                        <Link className="RightSideLink" to="/logowanie"> <a>Zorganizuj<br></br> Zbiórkę</a></Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    <HomeThreeColumns></HomeThreeColumns>
            <FourSteps></FourSteps>
            <AboutUs></AboutUs>
            <WhoWeHelp></WhoWeHelp>
            <Contact></Contact>
            <Footer></Footer>

</>
);
};

export default Home;