import React from "react";
import "./home.css";
import aGif from "../../assets/Arcade.gif";

const Home = () => (
    <div className="home">
        <h1 className="title">Welcome to the React Arcade!</h1>
        <div className="home-text">
        <img
            src={aGif}
            alt="Arcade gif"
            title="A picture of a boy playing in an arcade.
           Gif by SleepySeaSlug at Deviant Art"/>
            <div className="description">
                    <p> This website features cool games that you usually see in the Computer Science industry</p>
                    <p> Check out the Navbar on top of the page and play these games on your own!</p>
                    <p> Have fun!</p>
            </div>
        </div>
    </div>
);

export default Home;
