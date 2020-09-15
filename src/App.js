import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Drinks from "./components/drinks";
import Update from "./components/update";
import New from "./components/new";
// import Icon from "icon.png";

// import { Button } from 'reactstrap';

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
            <Link to="/">
              <h1>Pick Your Poison....</h1>
              </Link>
    <p>Welcome to <strong>The Cocktail Database!</strong> Below is a list of drinks with instructions.<br /> <br />If you are feeling creative, add your own!</p>
            
          </nav>
        </header>
        <main>
          <Switch>
        <Route path="/drinks/new"  component={New} />
          <Route path="/" exact component={Drinks} />
          
          
          <Route
            path="/drinks/update/:name"
            render={(routerProps) => <Update {...routerProps}></Update>}
          />
          </Switch>
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
