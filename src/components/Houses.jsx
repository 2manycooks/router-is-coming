import { Link } from "react-router-dom";
import gameOfThrones from "../gameOfThrones";

function Houses(props) {
    // in Houses.js
    return (
        <div>
            {console.log(gameOfThrones)}
            <div className="header">
                <h2>Game of Thrones Houses</h2>
            </div>
            <ul className="list">
                List of Houses
                {props.gameOfThrones.map((house) => {
                    return(
                        <div key={house.name}>
                        <Link to={`/houses/${house.id}`} > {house.name} </Link>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Houses;