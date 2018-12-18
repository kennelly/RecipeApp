import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
    static defaultProps = {
        recipes: [{
            title: "Spaghetti",
            ingredients: ['flour', 'water'],
            img: "https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            instructions: "Mix Ingredients"
        }]
    }
    render(){
        const {title, img, instructions} = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
        ));
        return(
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title}/>
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">{title}</h3>
                    <h4>Ingredients: </h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>Instructions: </h4>
                    <p>
                        {instructions}
                    </p>
                </div>
            </div>

        )
    };
}

export default Recipe;