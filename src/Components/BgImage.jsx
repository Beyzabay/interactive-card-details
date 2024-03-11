import { Box, Grid, Hidden } from "@mui/material";
import React from "react";
import BgImg from "../images/bg-main-desktop.png";
import CardForm from "./CardForm";
import { useState } from "react";
import cardLogo from "../images/card-logo.svg";
import SuccesScreen from "./SuccesScreen";

export default function BgImage(props) {
  const [updateText, setUpdateText] = useState("");

  const InputText = (newState) => {
    setUpdateText(newState);
  };
  const { imageOne, imageTwo } = props;
  return (
    <div className="centeredDiv">
      <Box sx={{ flexGrow: 1 }}>
        <div>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} md={6} lg={6}>
              <img src={BgImg} alt="" className="img-class" />
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={6} className="grid-two">
              <CardForm updateInputText={InputText} />
              <SuccesScreen />
            </Grid>
          </Grid>
          <div className="card-layout">
            <img src={imageOne} className="cardDivBack" alt="cardBack" />
            <img src={imageTwo} className="cardDivFront" alt="cardFront" />
            <img src={cardLogo} alt="card-logo" className="card-logo" />
            <p
              className="divText"
              style={{ visibility: updateText.text ? "visible" : "hidden" }}
            >
              {updateText.text}
            </p>
            <p
              className="divText"
              style={{ visibility: updateText.text  ? "hidden" : "visible" }}
            >
              JANE APPLESEED
            </p>
            <p
              className="divNumber"
              style={{ visibility: updateText.number ? "visible" : "hidden" }}
            >
              {updateText.number}
            </p>
            <p
              className="divNumber"
              style={{ visibility: updateText.number ? "hidden" : "visible" }}
            >
              0000 0000 0000 0000
            </p>
            <p
              className="divCvc"
              style={{ visibility: updateText.cvc ? "visible" : "hidden" }}
            >
              {updateText.cvc}
            </p>
            <p
              className="divCvc"
              style={{ visibility: updateText.cvc ? "hidden" : "visible" }}
            >
              000
            </p>
            <p
              className="divMonth"
              style={{ visibility: updateText.month ? "visible" : "hidden" }}
            >
              {updateText.month} / {updateText.year}
            </p>
            <p
              className="divMonth"
              style={{ visibility: updateText.month ? "hidden" : "visible" }}
            >
              00 / 00
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
}
