import React, { Component } from "react";
import App from "../App";
import PopUp from "reactjs-popup"

// import Button from "react-bootstrap/Button";
import { render } from "react-dom";

let url = "https://find-a-cocktail.herokuapp.com/drinks";

const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      instructions: "",
    }; //state
  } //constructor

  render() {
    return (
    
     <div></div>
    ); //return
  } //render
} //component

export default Modal;