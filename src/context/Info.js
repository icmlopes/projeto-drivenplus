import React, { createContext, useState} from "react";

export const InfoContext = createContext();

export default function InfoProvider({children}){

    const [user, setUser] = useState({});
    const keeptToken = localStorage.getItem("token")
    const [token, setToken] = useState(keeptToken)
    const [idPlan, setIdPlan] = useState(null)

    function setAndPersistToken(userToken) {
        setToken(userToken)
        localStorage.setItem("token", userToken)
    }

    return(
        <InfoContext.Provider
            value={{
                setAndPersistToken,
                user,
                setUser,
                token,
                setToken,
                setIdPlan,
                idPlan
            }}
        >
            {children}
        </InfoContext.Provider>
    )
}

