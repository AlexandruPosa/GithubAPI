import React from "react";
import {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import {Switch as Toggle} from '@material-ui/core/Switch';
import Repo from "./Repo";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}
export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

class App extends Component{

  state={
    CurrentTheme:'light'
  }


  themeToggler= () =>{
    this.state.CurrentTheme === 'light' ? this.setState({CurrentTheme:'dark'}) : this.setState({CurrentTheme:'light'})
    console.log(this.state.CurrentTheme);

  }

  render(){
      
  
  return (
    <React.Fragment>
    <ThemeProvider theme={this.state.CurrentTheme === 'light' ? lightTheme : darkTheme}>
      
      <GlobalStyles/>
     
     <label class="switch">
      <input type="checkbox" onClick={this.themeToggler} />
       <span class="slider round"></span>
        </label>
        

    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/repo" exact component={Repo} />
  
      </Switch>
    </Router>
  
    </ThemeProvider>
    </React.Fragment>
  );
  }
}

export default App;
