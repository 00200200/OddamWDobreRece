import React, {useEffect, useState} from 'react';
import firebase from "../services/firebase";
import Foundation from "./Foundation";
import Organisations from "./Organisations";

const WhoWeHelp = () => {
    const [Hidden,setHidden] = useState(false)
    const [organisationHidden,setOrganisationHidden] = useState(true)
    const [charityCollection,setCharityCollection] = useState(true)

   // const foundationData  = []
   //  useEffect(()=> {
   //      firebase.collection('foundations').get().then(docs => {
   //          docs.forEach(doc => {
   //              foundationData.push(doc.data())
   //          })
   //      })
   //
   //  },[])


    const notHiddenFund = () =>{
      setHidden(false)
        setOrganisationHidden(true)
        setCharityCollection(true)
    }
    const notHiddenOrganisation = () =>{
        setOrganisationHidden(false)
        setHidden(true)
        setCharityCollection(true)
    }
    const notHiddenCharityCollection = () => {
        setCharityCollection(false)
        setOrganisationHidden(true)
        setHidden(true)
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
            <div style={Hidden?{display:"none"}:{display:"block"}} ><Foundation  ></Foundation></div>
            <div style={organisationHidden?{display:"none"}:{display:"block"}}> <Organisations ></Organisations></div>
        </div>
    );
};
export default WhoWeHelp;


// <div>
//     <div  style={fundationHidden?{display:"none"}:{display:"block"}} className="OrgansationsWrapper">
//         <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
//             sprawdzić
//             czym się zajmują, komu pomagają i czego potrzebują.</p>
//         <div style={fundationFirstPage?{display:"none"}:{display:"block"}} className="OrganisationsWrapper">
//             <div className="OrganisationsWrap">
//                 <div className="OrganisationsWrapLeftSide">
//                     <h3>Fundacja "Dbam o zdrowie"</h3>
//                     <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
//                 </div>
//                 <div className="OrganisationsWrapRightSide">
//                     <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
//                 </div>
//             </div>
//             <div className="OrganisationsWrap">
//                 <div className="OrganisationsWrapLeftSide">
//                     <h3>Fundacja "Dla dzieci"</h3>
//                     <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
//                 </div>
//                 <div className="OrganisationsWrapRightSide">
//                     <p>ubrania, meble, zabawki</p>
//                 </div>
//             </div>
//             <div className="OrganisationsWrap">
//                 <div className="OrganisationsWrapLeftSide">
//                     <h3>Fundacja "Bez domu"</h3>
//                     <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
//                 </div>
//                 <div className="OrganisationsWrapRightSide">
//                     <p>ubrania, jedzenie, ciepłe koce</p>
//                 </div>
//             </div>
//         </div>

// <div className="FundationPageBtn">
//     <a >1</a>
//     <a >2</a>
//     <a >3</a>
// </div>