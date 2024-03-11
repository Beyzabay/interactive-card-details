import React from "react";
import Complete from "../images/icon-complete.svg";

function SuccesScreen() {
  return (
    <div id="result" className="divSuccesAct" style={{ display: "none" }}>
      <div className="completeDiv">
      <div style={{width:'10vh'}}>
      <img src={Complete} alt="complete-icon"/>
      </div>
      <div className="msgDiv">
      <p className="msgOne">THANK YOU !</p>
      <p className="msgTwo">We've added your card details</p>
      </div>
      </div>
      <button style={{width:'100%'}} className="button" onClick={()=> window.location.reload()}>
        <p className="buttonLetter">Continue</p>
      </button>
    </div>
  );
}

export default SuccesScreen;
