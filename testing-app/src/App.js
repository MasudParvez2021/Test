//import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"
import MyComponent from "./components/Greet"
import Welcome from "./components/Welcome"
import Greet from "./components/Greet"

class App extends Component{
render() {
  return (
        <div className="App">
          {/* <MyComponent />*/}
         <Welcome name="Dominic" surname="Driver"/>
         <Welcome name="Bottas" surname="Driver"/>
           <Greet name="Brian" surname="Driver"><p>This is children props</p> </Greet>
           <Greet name="Brandon" surname="Cricketer" ></Greet>
           <button>Action</button>
        </div>
        );
  }
}

export default App;
