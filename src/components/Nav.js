import React from "react"; 
import colourLogo from "../images/colour-tinder-logo.png";
import whiteLogo from "../images/white-tinder-logo.png";


function Nav(props) {

    // accesses the props object and changes the nav logo depending on the bool value of props.minimal
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={props.minimal ? colourLogo : whiteLogo}/> 
            </div>
            
            {!props.authToken && !props.minimal && 
            <button className="nav-button">Log in</button>}
        </nav>
        
    )
}


export default Nav;