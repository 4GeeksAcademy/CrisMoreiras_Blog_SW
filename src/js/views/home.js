import React, {useEffect, useState, useContext} from "react";
import { Character } from "../component/character";
import "../../styles/home.css";
import { Context } from "../store/appContext";



export const Home = () => {

	const { store, actions } = useContext(Context);

    const [people, setPeople] = useState ([])

    useEffect ( () =>{
        console.log ("cargo home")
        fetch ("https://www.swapi.tech/api/people")
        .then ((response)=>response.json())
        .then ((data)=>setPeople(data.results))
    } ,[])

    return (

	<div className="text-center mt-5">

		<h1>Desde Componente</h1>
        {people.map((item) => < Character key={item.name} name= {item.name} /> )}

		<h1>Desde Flux</h1>
        {store.characters.map((item) => < Character key={item.name} name= {item.name} /> )}

	</div>
    
);
}