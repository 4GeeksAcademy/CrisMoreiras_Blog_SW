import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/buttons.css"
import "../../styles/index.css"
import "../../styles/single-card.css"

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
		<>
		
		<div className="container d-flex justify-content-center">
		<div className="card my-4 single-card" style={{width: "800px"}}>
			<div className="row g-0">
  				<div className="col-md-6">
					<img src="https://picsum.photos/440/250" className="img-fluid rounded m-3 w-auto" alt="..."/>
  				</div>
  				<div className="col-md-6">
					<div className="card-body text-center">
	  					<h3 className="card-title">{character.name}</h3>
						<br/>
						<h5 className="card-text">Gender: {character.gender}</h5>
	  					<h5 className="card-text">Birth year: {character.birth_year}</h5>
						<h5 className="card-text">Height: {character.height}</h5>
						<h5 className="card-text">Eye color: {character.eye_color}</h5>
						<h5 className="card-text">Hair color: {character.hair_color}</h5>	
					</div>
  				</div>
				<div>
					<p className="card-text text-start m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, nisi a molestie fringilla, lacus magna ullamcorper elit, ac sodales tortor lacus et lectus. Morbi at purus sed urna ultricies aliquam. Maecenas malesuada, dui vel scelerisque ultricies, justo ex tempor magna, vel fringilla nulla libero nec dolor. Donec nec mauris id ante accumsan suscipit. Nulla facilisi. Vivamus nec turpis vitae lacus bibendum iaculis ac ut mauris. Vestibulum non odio auctor, rhoncus ante vel, dignissim neque. Fusce rhoncus orci quis eros auctor volutpat. Aliquam erat volutpat. Integer placerat purus a mi efficitur, nec dapibus libero rhoncus. Cras id neque id ex fringilla venenatis. Aenean bibendum at tortor in tempus. Donec non justo tincidunt, lacinia leo id, eleifend mi. In sed erat magna. Sed vel tortor et orci consectetur euismod. Proin quis tincidunt elit.</p>
				</div>
			</div>
		</div>
		</div>
		<div className="container text-center">
			<Link to="/characters">
				<span className="btn btn-md mb-4 btn-SW" href="#" role="button">
					Back Characters
				</span>
			</Link>
		</div>
		</>
	);
};

Single_character.propTypes = {
	match: PropTypes.object
};
