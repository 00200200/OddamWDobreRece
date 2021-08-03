import React from 'react';

const Contact = () => {
    return (
        <div className="contactContainer" id="contact">

            <div className="contactLeftSide">
                <img className="contactLeftSideBackground" src={require("../assets/Background Image.png").default}/>
            </div>
            <div className="contactRightSide">
                <h1>Skontaktuj się z nami</h1>
                <img src={require("../assets//Decoration.svg").default}/>
                   <form>
                    <div className="contactForm">
                        <div className="contactFormLeftSide">
                            <p>Wpisz swoje imię</p>
                            <input type="text"/>
                        </div>
                        <div className="contactFormRightSide">
                            <p>Wpisz swój email</p>
                            <input type="email"></input>
                        </div>
                    </div>
                <div className="contactTextForm">
                    <p>Wpisz swoją wiadomość</p>
                    <input type="textarea"/>
                </div>
<div className="SubmitButtonContact">
                       <input type="submit"></input>
</div>
                   </form>
            </div>
        </div>
    );
}

export default Contact;