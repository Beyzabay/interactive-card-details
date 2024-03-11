import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { formSchema } from "./Schemas";
import "bulma/css/bulma.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function CardForm(props) {
  const { updateInputText } = props;
  const [text, setText] = useState("");
  const {
    values,
    errors,
    isSubmiting,
    handleSubmit,
    handleChange: formikHandleChange,
  } = useFormik({
    initialValues: {
      text: "",
      number: "",
      month:"",
      year:"",
      cvc:"",
    },
    validationSchema: formSchema,
    onSubmit: (values, e) => {
      navigate("/SuccesScreen");
      if (onSubmit === false) {
        document.getElementById("result").style.display = "none";
        document.getElementById("hiddenAct").style.display = "none";
      } else {
        document.getElementById("result").style.display = "block";
        document.getElementById("hiddenAct").style.display = "none";
      }
    },
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
  
    if (id === "number") {
      const formattedValue = value.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");
      setText(formattedValue);
      formikHandleChange(event);
      updateInputText({ ...values, [id]: formattedValue });
    } else {
      formikHandleChange(event);
      updateInputText({ ...values, [id]: value, number: text });
    }
  };
  

  return (
    <div className="formClassDiv">
      <Container>
        <div className="containerDiv">
          <form className="formDiv" onSubmit={handleSubmit}>
            <div id="hiddenAct">
              <div className="div-label">
                <label className="margin-setting labelClass">
                  CARDHOLDER NAME
                </label>
                <input
                  value={values.text}
                  type="text"
                  id="text"
                  onChange={handleChange}
                  className={`input ${errors.text ? "input-error" : ""}`}
                  placeholder="e.g. Jane Appleseed"
                />
                {errors.text && <p className="error">{errors.text}</p>}
              </div>
              <div className="div-label">
                <label className="margin-setting labelClass">CARD NUMBER</label>
                <input
                  maxlength="16"
                  value={values.number}
                  type="text"
                  id="number"
                  onChange={handleChange}
                  className={`input ${errors.number ? "input-error" : ""}`}
                  placeholder="e.g. 1234 5678 9123 000"
                />
                {errors.number && <p className="error">{errors.number}</p>}
              </div>
              <Box>
                <Grid className="grid-layout">
                  <Grid sm={7} md={7} lg={7}>
                    <div>
                      <label className="labelClass">EXP.DATE (MM/YY)</label>
                      <div className="input-position">
                        <div>
                          <input
                            maxlength="2"
                            value={values.month}
                            id="month"
                            onChange={handleChange}
                            className={`input ${
                              errors.month || errors.year ? "input-error" : ""
                            }`}
                            type="text"
                            style={{ width: "70%" }}
                            placeholder="MM"
                          />
                          {errors.month && (
                            <p className="error">{errors.month}</p>
                          )}
                        </div>
                        <div>
                          <input
                            maxlength="2"
                            value={values.year}
                            id="year"
                            onChange={handleChange}
                            className={`input ${
                              errors.year || errors.month ? "input-error" : ""
                            }`}
                            type="text"
                            style={{ width: "70%" }}
                            placeholder="YY"
                          />
                          {errors.year && (
                            <p className="error">{errors.year}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid sm={5} md={5} lg={5}>
                    <div>
                      <label className="labelClass">CVC</label>
                      <div className="input-position-cvc">
                        <input
                          maxlength="3"
                          value={values.cvc}
                          id="cvc"
                          onChange={handleChange}
                          className={`input ${errors.cvc ? "input-error" : ""}`}
                          style={{ width: "100%" }}
                          type="text"
                          placeholder="e.g. 123"
                        />
                        {errors.cvc && <p className="error">{errors.cvc}</p>}
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Box>
              <Button type="submit" disabled={isSubmiting} className="button" style={{width:"100%"}}>
              <p className="buttonLetter">Confirm</p>
            </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default CardForm;
