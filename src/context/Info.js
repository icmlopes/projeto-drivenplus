import React, { createContext, useState} from "react";

export const InfoContext = createContext();

export default function InfoProvider({children}){

    const [user, setUser] = useState(null);

    return(
        <InfoContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </InfoContext.Provider>
    )
}

