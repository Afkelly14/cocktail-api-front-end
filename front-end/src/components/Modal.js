import React, { Component } from "react";
import App from "../App";

import Button from "react-bootstrap/Button";
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
        instructions: ""
    }//state

}//constructor

    render() {
        return(
        <div className="pop-up">
           
        </div>
            
            )//return

    }//render</div>
}//component



export default Modal;