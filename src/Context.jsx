import { createContext,useContext,useState,useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AppContext = createContext();

const Appprovider =({children})=>{ 
    
return <AppContext.Provider value={{}}>
{children}
</AppContext.Provider>
}


export const useGlobalContext = () =>{
return useContext(AppContext)
}

export  { AppContext, Appprovider , }