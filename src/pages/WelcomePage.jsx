import { useState } from "react";
import { Navigate } from "react-router-dom";


function WelcomePage({userName}) {
    const [isLoggedIn, setIsLoggedin] = useState(true);

    if (!isLoggedIn) {
        return <Navigate to="/error" />;
    } else {
        return (
            <h1>Hello {userName}! This is the students APP</h1>
        )
    }
}

export default WelcomePage;