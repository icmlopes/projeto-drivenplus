import React, { createContext, useState} from "react";

export const InfoContext = createContext();

export default function InfoProvider({children}){

    const [user, setUser] = useState({});
    const keeptToken = localStorage.getItem("token")
    const [token, setToken] = useState(keeptToken)
    const [idPlan, setIdPlan] = useState(null)
    const keeptMembership = localStorage.getItem("userMembership")
    const [userMembership, setUserMembership] = useState(null)
    const [plan, setPlan] = useState({})
    const [planPerks, setPlanPerks] = useState({})

    console.log(plan)

    console.log(user)

    console.log(planPerks)

    function setAndPersistToken(userToken) {
        setToken(userToken)
        localStorage.setItem("token", userToken)
    }

    function persistMembership(membership){
        setUserMembership(membership)
        localStorage.setItem("userMembership", membership)
        console.log(membership)
    }

    function persistPerk(perks){
        setPlanPerks(perks)
        localStorage.setItem("planPerks", perks)
        console.log(perks)
    }

    

    return(
        <InfoContext.Provider
            value={{
                setAndPersistToken,
                persistMembership,
                persistPerk,
                user,
                setUser,
                token,
                setToken,
                setIdPlan,
                idPlan,
                userMembership,
                setUserMembership,
                plan, 
                setPlan,
                planPerks,
                setPlanPerks
            }}
        >
            {children}
        </InfoContext.Provider>
    )
}

