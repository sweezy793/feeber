import React, {Component} from 'react';
import '../styles/header.css';

class Header extends Component{
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center">Feeber</a>
                    <ul id="nav-mobile" className="right">
                        <li><a href="#">Sign in With Google</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
} 

export default Header;
