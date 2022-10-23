import React from "react";
import
{
    Routes,
    Route
} from "react-router-dom";
import Home from "../Homepage/Home";
import Hanoi from "../toh/Hanoi";
import DragPuzzle from "../Drag_Drop_Puzzle/DragPuzzle";
import "./nav.css";

function NavBar()
{
    return(
        <div className="home">
            <nav className="navbar fixed-top navbar-dark bg-dark bg-gradient">
                <div className="container-fluid">
                    <a href="/"  className="navbar-brand text-white">
                        <i className="fa-brands fa-react"/>
                        React Arcade Games
                    </a>
                    <button className="navbar-toggler" type="button"  data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="/hanoi"  className="nav-link" >Towers of Hanoi</a>
                            </li>
                            <li className="nav-item">
                                <a href="/drag-and-dropPuzzle" className="nav-link">Drag And Drop Puzzle</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/hanoi" element={<Hanoi/>}/>
                <Route path="/drag-and-dropPuzzle" element={<DragPuzzle/>}/>
            </Routes>


        </div>

    )

}
export default NavBar;