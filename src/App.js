import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Drinks from "./components/drinks";
import Update from "./components/update";
import New from "./components/new";

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
      id: String,
      glass: String,
      name: String,
      ingredient: String,
      search: "words",
    };
    
  }
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to='/drinks'>
            <h1>Life's A Sport - Drink It Up!</h1></Link>
          </nav>
        </header>
        <main>
          <Route path="/drinks/" exact component={Drinks} />
          <Route path="/drinks/new" exact component={New} />
          <Route path="/drinks/update/:name" render={(routerProps) => (
            <Update {...routerProps}></Update>
          )} />
        </main>
      </div>
    ); //return
  } //render

  // //componentDidMount runs every time the page is loaded
  componentDidMount() {
    //fetch request to the API
    fetch(url, optionGET, optionDELETE)
      //converting the API to readable code. Naming it convertedResponse
      .then((res) => res.json())
      .then((convertedResponse) => {
        //console.log to see if it works
        console.log(convertedResponse);
        console.log(convertedResponse[0].strDrink);
        // setting State to fetch a new cocktail name each time the page is loaded. It was empty when defined earlier.
        this.setState({
          name: convertedResponse[0].strDrink,
        });
      });
  }
} //component

export default App;
