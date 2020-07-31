import React, { Component } from "react";
import "./App.css";

//link the API from heroku
let url = "https://find-a-cocktail.herokuapp.com/drinks";

// CRUD paths
const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const optionPOST = {
  method: "POST",
  headers: {
    Accept: "application/json",
  },
};

const optionPUT = {
  method: "PUT",
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      glass: "",
      name: "",
      ingredients: "",
    };
    // this.setPage = this.setPage.bind(this);
  }
  render() {
    return (
      <div>
        <header>
          <nav></nav>
        </header>
        <main>
        
        <p>{this.state.name}</p>
        <button onClick={this.newName}>show another drink</button>
       
        </main>
      </div>
    ); //return
  } //render

  // //componentDidMount runs every time the page is loaded
  componentDidMount() {
    //fetch request to the API
    fetch(url, optionGET)
      //converting the API to readable code. Naming it convertedResponse
      .then((res) => res.json())
      .then((convertedResponse) => {
        //console.log to see if it works
        console.log(convertedResponse);
        //setting State to fetch a new cocktail name each time the page is loaded. It was empty when defined earlier.
        // this.setState({
        //   name: convertedResponse.name,
        // });
      });
  }

  newName = () => {
    fetch(url, optionGET)
      //converting the API to readable code. Naming it convertedResponse
      .then((res) => res.json())
      .then((convertedResponse) => {
        //console.log to see if it works
        console.log(convertedResponse.name);
        //setting State to fetch a new joke each time the page is loaded. It was empty when defined earlier.
        this.setState({
          name: convertedResponse.name,
        });
      });
  };
} //component

export default App;
