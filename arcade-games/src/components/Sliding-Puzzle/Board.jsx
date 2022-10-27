import React, { useState } from "react";
import Tile from "./Cell";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constantNumbers"
import { canSwap, shuffle, swap, isSolved } from "./Helper"

function Board({ imgUrl }) {
    const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
    const [isStarted, setIsStarted] = useState(false);
    console.log('is started:', isStarted)

    const shuffleTiles = () => {
        const shuffledTiles = shuffle(tiles)
        setTiles(shuffledTiles);
    }

    const swapTiles = (tileIndex) => {
        if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
            const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
            setTiles(swappedTiles)
        }
    }

    const handleTileClick = (index) => {
        swapTiles(index)
    }

    const handleShuffleClick = () => {
        shuffleTiles()
    }

    const handleStartClick = () => {
        shuffleTiles()
        setIsStarted(true)
    }

    const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
    const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
    const style = {
        width: BOARD_SIZE,
        height: BOARD_SIZE,
    };
    const hasWon = isSolved(tiles)

    return (
        <>

            {!isStarted ?
                (
                    <div className="button">
                        <button type="button" className="btn btn-secondary btn-lg"  onClick={() => handleStartClick()}>Start game</button></div>) :
                (   <div className="button">
                    <button type="button" className="btn btn-secondary btn-lg" onClick={() => handleShuffleClick()}>Restart game</button></div>)}
            {hasWon && isStarted && <div className="winner-msg"> Congratulations! You have solved the puzzle!</div>}
            <ul style={style} className="board">
                {tiles.map((tile, index) => (
                    <Tile
                        key={tile}
                        index={index}
                        imgUrl={imgUrl}
                        tile={tile}
                        width={pieceWidth}
                        height={pieceHeight}
                        handleTileClick={handleTileClick}
                    />
                ))}
            </ul>


        </>
    );
}

export default Board;
