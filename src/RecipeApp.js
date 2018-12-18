import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';
import Nav from './Nav';
import RecipeList from './RecipeList';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
