import React, { Component } from "react";
import App from '../App';

let url = "https://find-a-cocktail.herokuapp.com/drinks";

// CRUD paths
const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

class Drinks extends Component {
    constructor(){
      super()
      this.state = {
        data: []
      }//state
    }//constructor

    componentWillMount() {
    fetch(url, optionGET)
    //converting the API to readable code. Naming it convertedResponse
    .then((res) => res.json())
    .then((data => this.setState({data})))
    .catch((err) => {
      console.log(err);
    });
   }//component
   render() {
  return(
    <div>
      <ul>
    {this.state.data.map(item => 
    <><li key={item}>{item.strDrink}</li>
    <img src={item.strDrinkThumb}/></>
    )}
    </ul>
    </div>
  )//return
  }//render

}//component

export default Drinks;