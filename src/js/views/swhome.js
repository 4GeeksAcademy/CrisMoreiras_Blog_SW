import React, {useEffect} from "react";
import "../../styles/home.css";

import { Character } from "../component/character";

export const Swhome = () => {

    useEffect ( () =>{
        console.log ("cargo home")
        fetch ("https://www.swapi.tech/api/planets")
        .then ((response)=>response.json())
        .then ((data)=>console.log(data.results))
    } ,[])

    return (

	<div className="text-center mt-5">
		< Character name= "props 1" />
        < Character name= "props 2" />
	</div>
    
);
}