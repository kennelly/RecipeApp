import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component{
    render(){
        return(
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        );
    }
}

export default Nav;