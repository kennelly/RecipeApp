import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component{
    render(){
        return(
            <header>
                <h2><a>recipe app</a></h2>
                <nav>
                    <li><a>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </nav>
            </header>
        );
    }
}

export default Nav;