import React from "react";
import "./puzzle.css"
import Board from "../Sliding-Puzzle/Board";
const SlidingPuzzle = () =>
{

    return (
        <div className="slidingPuzzle">
            <h1 className="sliding-puzzle-title">Sliding Puzzle</h1>
            <div className="sliding-directions">
                <p>
                    <span className="slide-text-title">Objective:</span> The goal is to move each cell until we
                    can restore the board to its original format.
                </p>

                <p>
                    <span className="slide-text-title">Directions:</span> Click on each tile to either move it up, down,
                    left, or right around the board.
                </p>

                <p>
                    When you restore the board to its original format, you win!
                </p>

                <p>
                    Good luck and have fun!
                </p>

                <Board/>

            </div>

        </div>
    )
}
export default SlidingPuzzle;