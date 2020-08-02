import React, { Component } from "react";
import App from "../App";
import Modal from "./Modal";

import Button from "react-bootstrap/Button";

let url = "https://find-a-cocktail.herokuapp.com/drinks";

// CRUD paths
const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

class Drinks extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: "",
      clicked: true
    }; //state
  } //constructor

  componentWillMount() {
    fetch(url, optionGET)
      //converting the API to readable code. Naming it convertedResponse
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .catch((err) => {
        console.log(err);
      });
  } //componentWillMount
  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.searchName}></input>
         
        </form>
        <Modal/>
        {this.state.data.map((item) => (
          <>
            <div key={item} >{item.strDrink}</div>
            <img src={item.strDrinkThumb} />
            <Button variant="primary">INFO</Button>{" "}
            <Button variant="danger" onClick= {e => {this.showModal(item.strInstructions)}}>INSTRUCTIONS</Button>{" "}
          </>
        ))}
      </div>
    ); //return
  } //render

  searchName = (e) => {
    e.preventDefault();
    console.log(this.state.search);
    console.log(this.state.data);
    let filteredDrinks = this.state.data.filter((name) =>
      name.strDrink.toLowerCase().includes(e.target.value.toLowerCase())
    );
  }; //searchName

showModal = (e) => {
console.dir(e)
let info = this.state.data.strInstructions
document.querySelector('.pop-up').innerHTML = e;
this.setState({clicked: !this.state.clicked})
}
} //component

export default Drinks;
