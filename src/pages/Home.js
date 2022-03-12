import React from "react"; 
import Nav from "../components/Nav";

function Home() {

    const authToken = false;

    function handleClick() {
        console.log("Clicked");
    }

    return (
        <div className="overlay"> 
            <Nav minimal={false} authToken={authToken}/>
            <div className="home">
                <h1>Swipe right</h1>
                <button className="primary-button" onClick={handleClick}>{authToken ? "Signout" : "Create Account"}</button> 
            </div>
        </div>
    )
}






export default Home;