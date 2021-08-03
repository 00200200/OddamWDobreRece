import React, {useState} from 'react';

const Organistations = () => {
    const [fundationHidden,setFundationHidden] = useState(false)
    const [organisationHidden,setOrganisationHidden] = useState(true)
    const [charityCollection,setCharityCollection] = useState(true)
    const [fundationFirstPage,setFundationFirstPage] = useState(false)
    const [fundationSecondPage,setFundationSecondPage] = useState(true)
    const [fundationThirdPage,setFundationThirdPage] = useState(true)
    const notHiddenFund = () =>{
      setFundationHidden(false)
        setOrganisationHidden(true)
        setCharityCollection(true)
    }
    const notHiddenOrganisation = () =>{
        setOrganisationHidden(false)
        setFundationHidden(true)
        setCharityCollection(true)
    }
    const notHiddenCharityCollection = () => {
        setCharityCollection(false)
        setOrganisationHidden(true)
        setFundationHidden(true)
    }
    const fundationFirstPageNotHidden = () => {
        setFundationFirstPage(false)
        setFundationSecondPage(true)
        setFundationThirdPage(true)
    }
    const fundationSecondPageNotHidden = () => {
        setFundationFirstPage(true)
        setFundationSecondPage(false)
        setFundationThirdPage(true)
    }
    const fundationThirdPageNotHidden = () => {
        setFundationFirstPage(true )
        setFundationSecondPage(true)
        setFundationThirdPage(false)
    }
    return (
        <div className="OrgansationsContainer" id="Organistations">
            <div className="OrganisationsHeaderWrapper">
                <h1>Komu pomagamy?</h1>
                <img src={require("../assets/Decoration.svg").default}/>
            </div>
            <div className="OrganisationsButtons">
                <a onClick={notHiddenFund} className="OrganisationBtn">Fundacjom</a>
                <a onClick={notHiddenOrganisation} className="OrganisationBtn">Organizacjom <br></br>pozarządowym</a>
                <a onClick={notHiddenCharityCollection} className="OrganisationBtn">Lokalnym <br></br>zbiórkom</a>
            </div>
            <div>
                <div  style={fundationHidden?{display:"none"}:{display:"block"}} className="OrgansationsWrapper">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                        sprawdzić
                        czym się zajmują, komu pomagają i czego potrzebują.</p>
                    <div style={fundationFirstPage?{display:"none"}:{display:"block"}} className="OrganisationsWrapper">
                    <div className="OrganisationsWrap">
                        <div className="OrganisationsWrapLeftSide">
                            <h3>Fundacja "Dbam o zdrowie"</h3>
                            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <div className="OrganisationsWrapRightSide">
                            <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        </div>
                    </div>
                    <div className="OrganisationsWrap">
                        <div className="OrganisationsWrapLeftSide">
                            <h3>Fundacja "Dla dzieci"</h3>
                            <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                        </div>
                        <div className="OrganisationsWrapRightSide">
                            <p>ubrania, meble, zabawki</p>
                        </div>
                    </div>
                    <div className="OrganisationsWrap">
                        <div className="OrganisationsWrapLeftSide">
                            <h3>Fundacja "Bez domu"</h3>
                            <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                        </div>
                        <div className="OrganisationsWrapRightSide">
                            <p>ubrania, jedzenie, ciepłe koce</p>
                        </div>
                    </div>
                    </div>  <div style={fundationSecondPage?{display:"none"}:{display:"block"}}className="OrganisationsWrapper">
                    <div className="OrganisationsWrap">
                        <div className="OrganisationsWrapLeftSide">
                            <h3>Fundacja "Dbam o zdrowie2"</h3>
                            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <div className="OrganisationsWrapRightSide">
                            <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        </div>
                    </div>
                    <div className="OrganisationsWrap">
                        <div className="OrganisationsWrapLeftSide">
                            <h3>Fundacja "Dla dzieci2"</h3>
                            <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                        </div>
                        <div className="OrganisationsWrapRightSide">
                            <p>ubrania, meble, zabawki</p>
                        </div>
                    </div>
                    <div className="OrganisationsWrap">
                        <div className="OrganisationsWrapLeftSide">
                            <h3>Fundacja "Bez domu2"</h3>
                            <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                        </div>
                        <div className="OrganisationsWrapRightSide">
                            <p>ubrania, jedzenie, ciepłe koce</p>
                        </div>
                    </div>
                    </div>
                    <div style={fundationThirdPage?{display:"none"}:{display:"block"}} className="OrganisationsWrapper">
                        <div className="OrganisationsWrap">
                            <div className="OrganisationsWrapLeftSide">
                                <h3>Fundacja "Dbam o zdrowi3"</h3>
                                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            </div>
                            <div className="OrganisationsWrapRightSide">
                                <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            </div>
                        </div>
                        <div className="OrganisationsWrap">
                            <div className="OrganisationsWrapLeftSide">
                                <h3>Fundacja "Dla dzieci3"</h3>
                                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                            </div>
                            <div className="OrganisationsWrapRightSide">
                                <p>ubrania, meble, zabawki</p>
                            </div>
                        </div>
                        <div className="OrganisationsWrap">
                            <div className="OrganisationsWrapLeftSide">
                                <h3>Fundacja "Bez domu3"</h3>
                                <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                            </div>
                            <div className="OrganisationsWrapRightSide">
                                <p>ubrania, jedzenie, ciepłe koce</p>
                            </div>
                        </div>
                    </div>
                    <div className="FundationPageBtn">
                        <a onClick={fundationFirstPageNotHidden}>1</a>
                        <a onClick={fundationSecondPageNotHidden}>2</a>
                        <a onClick={fundationThirdPageNotHidden}>3</a>
                    </div>
                </div>
            </div>
            <div>
                <div style={organisationHidden?{display:"none"}:{display:"block"}} className="OrgansationsWrapper">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <div className="OrganisationsWrap">
                        <div className="OrganisationsWrapLeftSide">
                            <h3>Organizacja "Lorem Ipsum 1"</h3>
                            <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                        </div>
                        <div className="OrganisationsWrapRightSide">
                            <p>Egestas, sed, tempus</p>
                        </div>
                    </div>
                    <div className="OrganisationsWrap">
                        <div className="OrganisationsWrapLeftSide">
                            <h3>Organizacja "Lorem Ipsum 2"</h3>
                            <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                        </div>
                        <div className="OrganisationsWrapRightSide">
                            <p>Ut, aliquam, purus, sit, amet</p>
                        </div>
                    </div>
                    <div className="OrganisationsWrap">
                        <div className="OrganisationsWrapLeftSide">
                            <h3>Organizacja "Lorem Ipsum 3"</h3>
                            <p>Scelerisque in dictum non consectetur a erat nam.</p>
                        </div>
                        <div className="OrganisationsWrapRightSide">
                            <p>Mi, quis, hendrerit, dolor</p>
                        </div>
                    </div>
                    <div className="FundationPageBtn">
                        <a>1</a>
                        <a>2</a>
                    </div>
                </div>
            </div>
            <div>
                <div style={charityCollection?{display:"none"}:{display:"block"}} className="OrgansationsWrapper">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <div className="OrganisationsWrap">
                        <div className="OrganisationsWrapLeftSide">
                            <h3>Organizacja "Lorem Ipsum 1"</h3>
                            <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                        </div>
                        <div className="OrganisationsWrapRightSide">
                            <p>Egestas, sed, tempus</p>
                        </div>
                    </div>
                    <div className="OrganisationsWrap">
                        <div className="OrganisationsWrapLeftSide">
                            <h3>Organizacja "Lorem Ipsum 2"</h3>
                            <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                        </div>
                        <div className="OrganisationsWrapRightSide">
                            <p>Ut, aliquam, purus, sit, amet</p>
                        </div>
                    </div>
                    <div className="OrganisationsWrap">
                        <div className="OrganisationsWrapLeftSide">
                            <h3>Organizacja "Lorem Ipsum 3"</h3>
                            <p>Scelerisque in dictum non consectetur a erat nam.</p>
                        </div>
                        <div className="OrganisationsWrapRightSide">
                            <p>Mi, quis, hendrerit, dolor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Organistations;