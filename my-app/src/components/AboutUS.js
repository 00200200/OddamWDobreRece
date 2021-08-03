import React from 'react';

const AboutUs = () => {
    return (
        <div className="AboutUsContainer" id="AboutUs">
            <div className="AboutUsLeftSide">
                <h1>O nas</h1>
                <img className="AboutUsLeftSideDecoration" src={require("../assets/Decoration.svg").default}/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className="AboutUsLeftSideSignature">
                <img src={require("../assets/Signature.svg").default}/>
                </div>
            </div>
            <div className="AboutUsRightSide">
                <img src={require("../assets/People.png").default}/>
            </div>
        </div>
    );
};

export default AboutUs;