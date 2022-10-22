import React from "react";
import "./home.css";
import aGif from "../../assets/Arcade.gif";

const Home = () => (
    <div className="home">
        <h1 className="title">Welcome to the React Arcade!</h1>
        <div className="home-text">
        <p>The arcade that's dedicated towards the iconic problems seen in Computer Science industry</p>
        <img
            src={aGif}
            alt="Arcade gif"
            title="A picture of a boy playing in an arcade"/>
            <div className="description">
                    <p> This website features interesting puzzles that you usually see in Computer Science industry</p>
                    <p> Check out the Navbar on top of the homepage to try and solve these puzzles on your own!</p>
                    <p> Good luck and have fun!</p>
            </div>
        </div>
    </div>
);

export default Home;
