import { createContext, useState } from "react";

const AuthContext=createContext();


const AuthProvider=({children})=>{
    const [authToken,setAuthToken]=useState(null)

    const login=async()=>{
        try {
            await Asy
        } catch (error) {
            console.error(error);
        }
    }

    return <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
}