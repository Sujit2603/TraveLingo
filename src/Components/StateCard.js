import React from "react";
import "./StateCard.css";
import { Link } from "react-router-dom";

function StateCard(props) {
    return (
        <>
            <div className="card-container2">
                <div className="image-container2">
                    <img src={props.imageurl} alt="image not loaded" ></img>
                </div>
                <div className="Card-content">
                    <div className="state-title"><h3>{props.titles}</h3></div>
                    <div className="state-data"><p>{props.datas}</p></div>
                </div>
                <div className="btn2">
                    <button><Link to={props.urls} className="btncol">{props.btntext}</Link></button>
                </div>
            </div>
        </>
    )
}

export default StateCard;