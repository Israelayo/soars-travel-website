import React from "react";
import "./Packages.css"
import Fullpackages from "../../components/Full-Packages/Fullpackages";
import Packageflex from "../../components/Full-packages-flex/Packageflex";
import Offer from "../../components/Full-packages-offer/Offer";

function Packages(){
    return <div>
        <Fullpackages />
        <Packageflex />
        <Offer />
        <hr />
        <Offer />
        <hr />
        <Offer />
        <hr />
        <Offer />
        <hr />
        <Offer />
        <hr />
    </div>
}
export default Packages