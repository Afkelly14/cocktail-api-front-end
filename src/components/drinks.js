import React, { Component } from "react";
import App from "../App";

import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

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
      console.log(item);
      return (
        <div className="drinklayout">
          <>
            <div className="name" key={item}>
              {item.strDrink}
            </div>
            <img src={item.strDrinkThumb} />
            <div className="button-class">
              <button
                className="btn-delete"
                onClick={(e) => {
                  this.remove(item._id);
                }}
              >
                DELETE
              </button>{" "}
              <Popup
                trigger={
                  <button className="btn-instructions"> INSTRUCTIONS </button>
                }
                modal
                nested
              >
                {(close) => (
                  <React.Fragment>
                    <div className="modal">
                      
                    </div>
                  </React.Fragment>
                )}
                <div className="popup-content">
                  <h1 className="drink-name">{item.strDrink}</h1>
                  <p><strong>Glass:  </strong> {item.strGlass}</p>
                  <p className="ingredients"><strong>Ingredients:</strong>
                    <ul>
                      <li>{item.strIngredient1}</li>
                      <li>{item.strIngredient2}</li>
                      <li>{item.strIngredient3}</li>
                      <li>{item.strIngredient4}</li>
                      <li>{item.strIngredient5}</li>
                    </ul>
                  </p>
                  <p className="popup-content"><strong>Instructions: </strong></p>
                  <div className="instructions">{item.strInstructions}</div>
                  
                </div>
              </Popup>
              <Link to={"/drinks/update/" + item.strDrink}>
                <button
                  className="btn-update"
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
        <Link to="/drinks/new">
          <div className="create-div">
            <button className="create">
              Click here to create a new drink!
            </button>
          </div>
        </Link>

        <div className="list">{list}</div>
      </React.Fragment>
    );
  } //render

  showModal = (e) => {
    console.dir(e);
    let info = this.state.data.strInstructions;
    document.querySelector(".instructions").innerHTML = e;
    document.querySelector(".box").style.opacity = 1;
    document.querySelector(".close").style.opacity = 1;
    this.setState({ clicked: !this.state.clicked });
  }; //showModal

  remove(_id) {
    console.log(_id)
    fetch(url + "/" + _id, optionDELETE)
      .then(() => {
        console.log("removed");
        this.setState({
          data: this.state.data.filter((item) => {
            return item._id !== _id;
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
