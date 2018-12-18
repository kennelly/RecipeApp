import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './Recipe';
import PropTypes from 'prop-types';

class RecipeList extends Component{
    static defaultProps = {
        recipes: [
            {
            title: "Spaghetti",
            ingredients: ['flour', 'water'],
            img: "https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            instructions: "Mix Ingredients"
            },
            {
            title:"Smoothie",
            ingredients:['banana', 'milk', 'spinach', 'ice'],
            img:"https://images.unsplash.com/photo-1521146490572-acf652a27fb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            instructions:"Stick the ingredients in a blender.  Transfer from blender to cup.  Drink" 
            },
            {
            title:"Sandwich",
            ingredients:['peanut butter', 'banana', 'honey', 'bread'],
            img:"https://images.unsplash.com/photo-1521986329282-0436c1f1e212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            instructions:"Pull out two pieces of bread.  On one piece, spread peanut butter.  Then cut banana into slices and place on top of peanut butter.  Then drizzle honey on top.  Place second piece of bread on top and eat"      
            }
        ]
    }
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.objects).isRequired
    }
    render(){
        const recipes = this.props.recipes.map((rec, index) => (
            <Recipe key={index} {...rec}/>
        ));
        return(
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;