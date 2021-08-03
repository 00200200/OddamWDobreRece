import React from 'react';
import {Link} from "react-router-dom";

const FourSteps = () => {
    return (
        <div id="FourSteps" className="FourStepsContainer">
            <div className="ImgContainer">
            <h1>Wystarczą 4 proste kroki</h1>
            <img src={require("../assets/Decoration.svg").default}/>
            </div>
            <div className="FourStepsBackground">
                <div className="FourStepsWrapper">
                <div className="OneStepContainer">
                    <img src={require("../assets/Icon-1.png").default}/>
                    <p>Wybierz rzeczy</p>
                    <div className="StepLine"></div>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>  <div className="OneStepContainer">
                    <img src={require("../assets/Icon-2.png").default}/>
                    <p>Spakuj je</p>
                    <div className="StepLine"></div>
                    <p>Skorzystaj z worków na śmieci</p>
                </div><div className="OneStepContainer">
                    <img src={require("../assets/Icon-3.png").default}/>
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <div className="StepLine"></div>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="OneStepContainer">
                    <img src={require("../assets/Icon-4.png").default}/>
                    <p>Zamów kuriera</p>
                    <div className="StepLine"></div>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            </div>
            <div className="UnderFourStepsButton">
            <Link className="RightSideLink" to="/logowanie"><a>Oddaj<br></br> Rzeczy</a></Link>
            </div>
        </div>
    );
};

export default FourSteps;