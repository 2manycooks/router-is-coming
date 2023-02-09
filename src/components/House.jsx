import { Link, useParams } from "react-router-dom";

function House(props) {
   // in House.js
    const { id } = useParams()
    const foundHouse = props.gameOfThrones.find(house => house.id.toString() === id)

    return (
        <div className="page">
            <div className="header">
                <h2>Members of a GoT House</h2>
            </div>
            <ul className="list">
                {foundHouse.people.map((member, idx) => {
                    return(
                        <div key={idx}>
                            <Link to={`/houses/${foundHouse.id}/member/${member.id}`}>{member.name}</Link>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default House;