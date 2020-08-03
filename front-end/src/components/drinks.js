import React, { Component } from "react";
import App from "../App";
import Modal from "./Modal";
import { Link } from "react-router-dom";

// import Button from "react-bootstrap/Button";

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
    let list = this.state.data.map((item) => {
      return (
        <div className="container">
          <>
            <div className="name" key={item}>{item.strDrink}</div>
            <img src={item.strDrinkThumb} />
            <div className="button-class">
              <button
                className='delete'
                onClick={(e) => {
                  this.remove(item.strDrink);
                }}
              >
                DELETE
              </button>{" "}
              <button
                className='binstructions'
                onClick={(e) => {
                  this.showModal(item.strInstructions);
                }}
              >
                INSTRUCTIONS
              </button>{" "}
              <Link to={"/drinks/update/" + item.strDrink}>
                <button
                  className='update'
                  onClick={(e) => {
                    this.update(item);
                  }}
                >
                  UPDATE
                </button>{" "}
              </Link>
            </div>
          </>
        </div>
      ); //return
    }); //map
    return (
      <React.Fragment>
        <Modal />
        <div className="list">{list}</div>
      </React.Fragment>
    );
  } //render


  showModal = (e) => {
    console.dir(e);
    let info = this.state.data.strInstructions;
    document.querySelector(".instructions").innerHTML = e;
    document.querySelector(".box").style.opacity = 1;
    document.querySelector('.close').style.opacity = 1;
    this.setState({ clicked: !this.state.clicked });
  }; //showModal

  remove(strDrink) {
    fetch(url + "/" + strDrink, optionDELETE)
      .then(() => {
        console.log("removed");
        this.setState({
          data: this.state.data.filter((item) => {
            return item.strDrink !== strDrink;
          }),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } //remove

  update(item) {
    console.log("update works");
  }
} //component

export default Drinks;
