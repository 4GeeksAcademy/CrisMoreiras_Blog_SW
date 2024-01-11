import React, {useEffect, useState} from "react";
import "../../styles/home.css";

import { Character } from "../component/character";

export const Swhome = () => {

    const [people, setPeople] = useState ([])

    useEffect ( () =>{
        console.log ("cargo home")
        fetch ("https://www.swapi.tech/api/people")
        .then ((response)=>response.json())
        .then ((data)=>setPeople(data.results))
    } ,[])

    return (

	<div className="text-center mt-5">

        {people.map((item) => < Character key={item.name} name= {item.name} /> )}

	</div>
    
);
}