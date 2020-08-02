import React, { Component } from "react";
import App from "../App";
import Modal from "./Modal";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

let url = "https://find-a-cocktail.herokuapp.com/drinks";

// CRUD paths
const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const optionDELETE = {
  method: "DELETE",
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
      clicked: true,
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
        <Modal />
        {this.state.data.map((item) => (
          <>
            <div key={item}>{item.strDrink}</div>
            <img src={item.strDrinkThumb} />
            <Button
              variant="danger"
              onClick={(e) => {
                this.remove(item.strDrink);
              }}
            >
              DELETE
            </Button>{" "}
            <Button
              variant="info"
              onClick={(e) => {
                this.showModal(item.strInstructions);
              }}
            >
              INSTRUCTIONS
            </Button>{" "}
            <Link to={"/drinks/update/" + item.strDrink}>
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.update(item);
              }}
            >
              UPDATE
            </Button>{" "}
            </Link>
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
    console.dir(e);
    let info = this.state.data.strInstructions;
    document.querySelector(".instructions").innerHTML = e;
    document.querySelector(".box").style.opacity = 0.75;
    this.setState({ clicked: !this.state.clicked });
  };//showModal

  remove(strDrink) {
    fetch(url + "/" + strDrink, optionDELETE)
      .then(() => {
        console.log("removed");
        this.setState({ data: this.state.data.filter(item => {
        return item.strDrink !== strDrink
      })})
      })
      .catch((err) => {
        console.log(err);
      });
      
  }//remove

  update(item) {
    console.log("update works");
  }
 } //component

export default Drinks;
