import React from "react";
import "../../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import ProTypes from "prop-type";

const Contact =(props) => {

    const Contact =(props) => {

        const styleObeject = {
            olor: "#e67aa8",
    textAlign: "center",
    paddingBottom: "10px",
    fontSize: ".9rem",
    lineHeight: "1.5",
  };
  return (
    <div style={styleObject} className="Contact">
      <h2>Contact</h2>
      <p>
        {" "}
        Telephone <br />
        {props.Telephone}{" "}
      </p>
      <p>
        {" "}
        Email
        <br />
        {props.Email}
      </p>
      <p>
        {" "}
        Adresse
        <br />
        {props.Adresse}
      </p>
      <button
        style={{ color: "White" }}
        type="button"
        className="btn btn-lg "
        id="btn-fb"
        onClick={(e) => {
            e.preventDefault();
            window.location.href ="https://www.facebook.com/"
        }},
        <i className="fab facebook"></i>
        </button>
  

        };
    };
    Contact.defaultProps ={
        Telephone : +21622977424 ,
        Adresse:"l'aouina",
        Email:"omarbelhassen16@gmail.com",
    };
Contact.proptype= {
   Telephone : Proptypes.string,
   Email:ProTypes.string,
   Adresse: ProTypes.string,



};


export default Contact ;