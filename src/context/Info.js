import React, { createContext, useState} from "react";

export const InfoContext = createContext();

export default function InfoProvider({children}){

    const [user, setUser] = useState({});
    const keeptToken = localStorage.getItem("token")
    const [token, setToken] = useState(keeptToken)
    const [idPlan, setIdPlan] = useState(null)
    const keeptMembership = JSON.parse(localStorage.getItem("userMembership") || null)
    const [userMembership, setUserMembership] = useState(keeptMembership)
    const [plan, setPlan] = useState({})
    // const keeptPlanPerks = JSON.parse(localStorage.getItem("planPerks") || null)
    // const [planPerks, setPlanPerks] = useState(keeptPlanPerks)

    console.log(plan)

    console.log(user)


    function setAndPersistToken(userToken) {
        setToken(userToken)
        localStorage.setItem("token", userToken)
    }

    function persistMembership(membership){
        setUserMembership(membership)
        localStorage.setItem("userMembership", JSON.stringify(membership))
        console.log(membership)
    }

    // function persistPerk(perks){
    //     setPlanPerks(perks)
    //     localStorage.setItem("planPerks", JSON.stringify(perks))
    //     console.log(perks)
    // }

    

    return(
        <InfoContext.Provider
            value={{
                setAndPersistToken,
                persistMembership,
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

            }}
        >
            {children}
        </InfoContext.Provider>
    )
}

