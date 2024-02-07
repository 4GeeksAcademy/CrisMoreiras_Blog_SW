import React, {useEffect, useState, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/buttons.css";
import { Context } from "../store/appContext";
import personajesSw from "/workspaces/CrisMoreiras_Blog_SW/src/img/personajesSw.jpg"
import navesSw from "/workspaces/CrisMoreiras_Blog_SW/src/img/navesSw.jpg"
import planetasSw from "/workspaces/CrisMoreiras_Blog_SW/src/img/planetasSw.jpg"

export const Home = () => {

	const { store, actions } = useContext(Context);

    return (
		<>
		<div className="container text-center position-relative">

		<div id="carouselExample" className="carousel slide">
  			<div className="carousel-inner">
    			<div className="carousel-item active position-relative">
      				<img src={personajesSw} className="img-home" alt="..."/>
					  <Link to="/characters" className="text-link">All Characters</Link>
    			</div>
    			<div className="carousel-item position-relative">
      				<img src={planetasSw} className="img-home" alt="..."/>
					  <Link to="/planets" className="text-link">All Planets</Link>
    			</div>
    			<div className="carousel-item position-relative">
      				<img src={navesSw} className="img-home" alt="..."/>
					  <Link to="/vehicles" className="text-link">All Vehicles</Link>
    			</div>
  			</div>
  			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
    			<span className="visually-hidden">Previous</span>
  			</button>
  			<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    			<span className="carousel-control-next-icon" aria-hidden="true"></span>
    			<span className="visually-hidden">Next</span>
  			</button>
		</div>
					
		</div>
		</>
	);
}