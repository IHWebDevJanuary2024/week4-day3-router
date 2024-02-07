import { useState } from "react";
import { Link } from "react-router-dom";

/* function StudentCard({student}) {  */ // Destructuring the props before using them
function StudentCard(props) { 
    const { name, age, city, bootcamp, haspaid, id } = props.student; // destructuring
    /* const { name, age, city, bootcamp, haspaid } = student; */ // destructuring if we also destructure the props
   
    const [hasPaidState, setHasPaidState] = useState(haspaid)

    const changeHasPaid = () => {
        setHasPaidState(!hasPaidState);
    }

    return (
        <li>
            <h4><Link to={`/students/${id}`}>{name}</Link></h4>
            <p>{age}</p>
            <p>{city}</p>
            <p>{bootcamp}</p>
            <p>{hasPaidState ? "💵" : "💩"}</p> {/* conditional rendering */}
            {!hasPaidState && <button onClick={changeHasPaid}>Has paid</button>} {/* and operator makes the button disappear when the condition is false */}
        </li>
    )
}

export default StudentCard;