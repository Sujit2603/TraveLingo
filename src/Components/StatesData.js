import React from "react";
import "./StatesData.css"

function StatesData(props) {
    return (
        <>
            <h1 className="cls">ABOUT</h1>
            <p className="det">{props.deta}</p>
            <ul className="impplc">
                <li className="impplc1">{props.capital}</li>
                <li>{props.largest}</li>
            </ul>
        </>
    )
}

export default StatesData;