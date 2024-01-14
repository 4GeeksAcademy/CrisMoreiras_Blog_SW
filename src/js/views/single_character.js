import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single_character = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [character, setCharacter]=useState({})

	useEffect (()=>{

		console.log("se carga personaje")
			fetch ("https://www.swapi.tech/api/people/" + params.character_id)
        	.then ((response)=>response.json())
        	.then ((data)=>setCharacter(data.result.properties))

	},[])

	return (
		<div className="jumbotron">
			<h1 className="display-4">CHARACTER This will show the demo element: {params.character_id}</h1>

			<hr className="my-4" />

			<p>Name: {character.name}</p>
			<p>Birth year: {character.birth_year}</p>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single_character.propTypes = {
	match: PropTypes.object
};
