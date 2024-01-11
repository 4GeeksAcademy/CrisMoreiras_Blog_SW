import React, {useEffect, useState, useContext} from "react";
import { Character } from "../component/character";
import "../../styles/home.css";
import { Context } from "../store/appContext";



export const Home = () => {

	const { store, actions } = useContext(Context);

    return (

	<div className="text-center mt-5">

		<h1>Desde Flux</h1>
        {store.characters.map((item) => < Character key={item.name} name= {item.name} /> )}

	</div>
    
);
}