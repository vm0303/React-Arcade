import React, {useState} from "react";
import "./hanoi.css";

const Hanoi =() =>
{
    const [moves, setMoves]= useState(0);
    const [dragTileID, setDragTileID] = useState();
    const [tiles, setTiles]= useState(
        [
            {
                id: "T1",
                column: 1,
                row: 1,
                width: 3
            },
            {
                id: "T2",
                column: 1,
                row: 2,
                width: 5
            },
            {
                id: "T3",
                column: 1,
                row: 3,
                width: 7
            },
            {
                id: "T4",
                column: 1,
                row: 4,
                width: 9
            }

        ]);
    const drag = (evaluate) =>
    {
        const draggingTiles=tiles.find((tile) => tile.id===evaluate.currentTarget.id);
        const first_Tile= tiles.filter((tile)=>tile.column===draggingTiles.column)
            .sort((x, y)=> x.width - y.width)[0];

        if(first_Tile && evaluate.currentTarget.id===first_Tile.id)
        {
            setDragTileID(evaluate.currentTarget.id);
        }

        else
        {
            evaluate.preventDefault();
        }
    };


    const dropManager = (dropEvaluate) =>
    {
        const tileD = tiles.find((tile) => tile.id === dragTileID);
        const towerColumn = dropEvaluate.currentTarget.id;

        const dropTheTile = tiles.filter((tile) => tile.column.toString() === towerColumn.toString())
            .sort((i,j)=> i.width - j.width)[0];


        let newTiles = tiles;

        if (!dropTheTile || tileD.width < dropTheTile.width)
        {
            newTiles=tiles.map((tile)=>
            {
                if (tile.id===tileD.id)
                {
                    tile.column = parseInt(towerColumn,10);
                    setMoves(moves+1)
                }
                return tile;
            });
        }

      else
        {
            window.alert("Don't forget! Bigger tiles cannot be stacked on smaller tiles. ")
        }
        setTiles(newTiles);
    };

    const col1T= tiles.filter((tile)=> tile.column === 1);
    const col2T=tiles.filter((tile)=> tile.column === 2);
    const col3T=tiles.filter((tile)=> tile.column === 3);

    const winner =tiles.every((tile)=> tile.column === 3);

    return (
        <div className="hanoi">
            <h1 className="hanoi-title">Towers of Hanoi</h1>
            <div className="directions">
                <p>
                    <span className="text-title">Objective:</span> The goal is to move all the tiles from the left-most tower to the right-most tower.
                    See if you can do this by using less moves.
                </p>

                <p>
                    <span className="text-title">Directions:</span> Move a tile to a tower one at a time.
                </p>
                <p>
                    When all the tiles have been moved to the right-most tower, you win!
                </p>



                <p className="side-note">Note: The Towers of Hanoi doesn't work on mobile devices yet,
                    but I will update this in the next few months
                </p>
                <p className="warning">
                    <span className="text-title-warning">WARNING:</span> Please keep in mind that bigger tiles CANNOT be stacked on smaller tiles.
                </p>
                <p>
                    Good luck and have fun!
                </p>

                <p className="numberOfMoves">
                    Number of moves used: {moves}
                </p>
            </div>
            <div className="hanoi-content">

                <div className="col-cont"

                     id={1}
                     onDragOver={(evaluate)=> evaluate.preventDefault()}
                     onDrop={dropManager}>


                    <div className="tower-rod"/>

                    {col1T.sort((i,j)=>i.width-j.width)
                        .map((tile, index)=>
                        {
                            const numOfTiles = col1T.length;
                            const tileArrange = {
                                width : `${tile.width}em`
                            };
                            tileArrange.marginTop = index === 0 ?
                                `calc(80vh - ${numOfTiles * 40 +20}px)` : "0";
                            return(
                                <div {...tile} className="tower-tile"
                                     title="Drag these tiles to the the right-most Hanoi tower in order to win the game!"
                                     draggable
                                     key={`column-1-${tile.id}`}
                                     onDragOver={(evaluation) => evaluation.preventDefault()}
                                     onDragStart={drag}


                                     style={tileArrange}
                                />
                            );
                        })}
                </div>
                <div
                    className="col-cont"
                    id={2}
                    onDragOver={(evaluate) => evaluate.preventDefault()}
                    onDrop={dropManager}
                >
                    <div className="tower-rod"/>
                    {col2T
                        .sort((i, j) => i.width - j.width)
                        .map((tile, index) => {
                            const numOfTiles = col2T.length;
                            const tileArrange= {
                                width: `${tile.width}em`
                            };
                            tileArrange.marginTop =
                                index === 0 ? `calc(80vh - ${numOfTiles * 40 + 20}px)` : "0";
                            return (
                                <div
                                    {...tile}
                                    className="tower-tile"
                                    title="Drag these tiles to the the right-most Hanoi tower in order to win the game!"
                                    draggable
                                    key={`column-2-${tile.id}`}
                                    onDragOver={(evaluate) => evaluate.preventDefault()}
                                    onDragStart={drag}
                                    style={tileArrange}
                                />
                            );
                        })}
                </div>
                <div
                    className="col-cont"
                    title="When all the tiles are placed on this rod, you win the game!"
                    id={3}
                    onDragOver={(evaluate) => evaluate.preventDefault()}
                    onDrop={dropManager}
                >
                    <div className="tower-rod"/>
                    {col3T
                        .sort((i, j) => i.width - j.width)
                        .map((tile, index) => {
                            const numOfTiles = col3T.length;
                            const tileArrange= {
                                width: `${tile.width}em`
                            };
                            tileArrange.marginTop =
                                index === 0 ? `calc(80vh - ${numOfTiles * 40 + 20}px)` : "0";
                            return (
                                <div
                                    {...tile}
                                    className="tower-tile"
                                    title="Drag these tiles to the the right-most Hanoi tower in order to win the game!"
                                    draggable
                                    key={`column-3-${tile.id}`}
                                    onDragOver={(evaluate) => evaluate.preventDefault()}
                                    onDragStart={drag}
                                    style={tileArrange}
                                />
                            );
                        })}
                </div>
            </div>
            {winner && (
                <div className="winnerMessage">
                    Congratulations! You Win!
                    <div className="winnerSubtitle">
                        You solved the puzzle with just <span className="winnerNumber">{moves}</span>{" "}
                        moves!
                    </div>
                </div>
            )}

        </div>

    )

}



export default Hanoi;