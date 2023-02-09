import { useParams } from "react-router-dom";

function Member(props) {
    // in Member.js

    const { houseid, memberid } = useParams()
    const foundHouse = props.gameOfThrones.find(house => house.id.toString() === houseid)
    const foundMember = foundHouse.people.find(member => member.id.toString() === memberid)
    console.log(foundMember)
    return (
        <div className="page">
            {console.log(memberid)}
            <div className="header">
                <h1>{foundMember.name}</h1>
            </div>
            <div className="desc">
               <h2>{foundMember.description}</h2> 
            </div>
        </div>
    )
}

export default Member;