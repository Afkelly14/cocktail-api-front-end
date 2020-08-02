import React, { Component } from "react";
import App from "../App";
import Modal from "./Modal";

import Button from "react-bootstrap/Button";

let url = "https://find-a-cocktail.herokuapp.com/drinks";

class Update extends Component {
  constructor() {
    super();
    this.state = {
      strInstructions: "",
      strDrinkThumb: "",
    }; //state
  } //constructor
  render() {
    return (
      <div>
        <form onSubmit={this.update}>
          <input
            type="text"
            id="instructions"
            placeholder="update instructions"
          ></input>
          
          <input
            type="submit"
            id="submit"
            placeholder="submit changes here"
          ></input>
          <br />
          <input
            type="text"
            id="image"
            placeholder="update drink image"
          ></input>
          <input
            type="submit"
            id="submit"
            placeholder="submit changes here"
          ></input>
        </form>
      </div>
    ); //return
  } //render

  update = (e) => {
      e.preventDefault();
      console.dir(e.target[0].value);
      console.dir(e.target[2].value);
      console.log(this.props.match.params.name);
      const body = {
        strInstructions: e.target[0].value,
        strDrinkThumb: e.target[2].value,
      }; 
    // const optionPUT = {
    //   method: "PUT",
    //   headers: {
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(this.state),
    // };
    // fetch(url + "/name/" + strDrink, optionPUT)
    //   .then(() => {
    //     console.log("updated");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  } //update
} //component

export default Update;
