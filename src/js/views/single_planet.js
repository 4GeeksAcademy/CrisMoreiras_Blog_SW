import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single_planet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [planet, setPlanet]=useState({})

	useEffect (()=>{

			fetch ("https://www.swapi.tech/api/planets/" + params.planet_id)
        	.then ((response)=>response.json())
        	.then ((data)=>setPlanet(data.result.properties))

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
	  					<h3 className="card-title">{planet.name}</h3>
						<br/>
						<h5 className="card-text">Climate: {planet.climate}</h5>
	  					<h5 className="card-text">Diameter: {planet.diameter}</h5>
                        <h5 className="card-text">Gravity: {planet.gravity}</h5>
                        <h5 className="card-text">Population: {planet.population}</h5>
					</div>
  				</div>
				<div>
					<p className="card-text text-start m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, nisi a molestie fringilla, lacus magna ullamcorper elit, ac sodales tortor lacus et lectus. Morbi at purus sed urna ultricies aliquam. Maecenas malesuada, dui vel scelerisque ultricies, justo ex tempor magna, vel fringilla nulla libero nec dolor. Donec nec mauris id ante accumsan suscipit. Nulla facilisi. Vivamus nec turpis vitae lacus bibendum iaculis ac ut mauris. Vestibulum non odio auctor, rhoncus ante vel, dignissim neque. Fusce rhoncus orci quis eros auctor volutpat. Aliquam erat volutpat. Integer placerat purus a mi efficitur, nec dapibus libero rhoncus. Cras id neque id ex fringilla venenatis. Aenean bibendum at tortor in tempus. Donec non justo tincidunt, lacinia leo id, eleifend mi. In sed erat magna. Sed vel tortor et orci consectetur euismod. Proin quis tincidunt elit.</p>
				</div>
			</div>
		</div>
		</div>
		<div className="container text-center">
			<Link to="/planets">
				<span className="btn btn-md mb-4 btn-SW" href="#" role="button">
					Back Planets
				</span>
			</Link>
		</div>
		
		</>
	);
};

Single_planet.propTypes = {
	match: PropTypes.object
};
