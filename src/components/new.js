import React, { Component } from "react";
import App from "../App";
import Modal from "./Modal";

// import Button from "react-bootstrap/Button";

let url = "https://find-a-cocktail.herokuapp.com/drinks";

class New extends Component {
  constructor() {
    super();
    this.state = {
      strDrink: ""
    }; //state
  } //constructor
  render() {
    return (
      <div>
        <form onSubmit={this.create}>
          <input
            type="text"
            id="name"
            placeholder="Add Drink Name"
          ></input>

          <input
            type="submit"
            id="submit"
            placeholder="Submit Drink Here"
          ></input>
        </form>
      </div>
    ); //return
  } //render

  create = (e) => {
    e.preventDefault();
    const formData = {
      strDrink: document.querySelector("input").value,
    };
    const optionPOST = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    console.log(formData);

    fetch(url, optionPOST)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }; //update
} //component

export default New;