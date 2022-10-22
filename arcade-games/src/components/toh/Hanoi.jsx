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
                width: 6
            },
            {
                id: "T3",
                column: 1,
                row: 3,
                width: 9
            },
            {
                id: "T4",
                column: 1,
                row: 4,
                width: 12
            },
            {
                id: "T5",
                column: 1,
                row: 5,
                width: 15
            },
            {
                id: "T6",
                column: 1,
                row: 6,
                width: 18
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
                if (tile.id===tile.id)
                {
                    tile.column = parseInt(towerColumn,10);
                    setMoves(moves+1)
                }
                return tile;
            });
        }
        setTiles(newTiles);
        };

        const col1T= tiles.filter((tile)=> tile.column === 1);
        const col2T=tiles.filter((tile)=> tile.column === 2);
        const col3T=tiles.filter((tile)=> tile.column === 3);

        const winner =tiles.every((tile)=> tile.column === 3);
    return (
            <div className="hanoi">
                <h1 className="hanoi-title">The Hanoi Towers</h1>
                <div className="directions">
                    <p>
                        <span className="text-title">Objective:</span> The goal is to move all the tiles from the left-most tower to the right-most tower.
                        See if you can do this by using less moves.
                    </p>
                    <p>
                        <span className="text-title">Directions:</span> Move a tile to a tower one at a time.
                    </p>
                    <p className="warning">
                        <span className="text-title-warning">WARNING:</span> Please keep in mind that bigger tiles CANNOT be stacked on smaller tiles.
                    </p>
                    <p>
                        When all the tiles have been moved to the right-most tower, you win.
                    </p>
                    <p>
                        Good luck and have fun!
                    </p>
                    <div className="tower"></div>
                </div>
                <div className="hanoi-content">
                    <div className="col-cont"
                    id={1}
                    onDragOver={(evaluate)=> evaluate.preventDefault()}
                    onDrop={dropManager}>
                        <div className="middle-tower"/>
                        {col1T.sort((i,j)=>i.width-j.width)
                            .map((tile, index)=>
                            {
                                const numOfTiles = col1T.length;
                                const tile_Width = {
                                    width : `${tile.width}em`
                                };
                                tile_Width.marginTop = index === 0 ?
                                    `calc(80vh - ${numOfTiles * 40 +20}px)` : "0";
                                return(
                                    <div {...tile} className="tower-tile"
                                    draggable
                                    key={`column-1-${tile.id}`}
                                    onDragOver={(evaluation) => evaluation.preventDefault()}
                                    onDragStart={drag}
                                    style={tile_Width}/>
                                );
                            })}
                        </div>
                    </div>
                </div>

            

    )

}



export default Hanoi;