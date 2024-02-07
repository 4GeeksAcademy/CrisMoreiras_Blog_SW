import React from "react";
import { Link } from "react-router-dom";
import "../../styles/buttons.css";
import "../../styles/logo-sw.css";
import LogoSw from "/workspaces/CrisMoreiras_Blog_SW/src/img/LogoSw.jpg"


export const Navbar = () => {
	return (
		<div className="container">
		
		<nav className="navbar" style={{backgroundColor: "#000000", height: "100px"}}>
			
				<div className="logo-sw">
					<img src={LogoSw} className="logo-image"/>
				</div>
				<div className="container d-flex justify-content-center" style={{ width: 'auto' }}>
				<Link to="/">
					<button className="btn btn-md btn-SW">Home</button>
				</Link>
				<Link to="/characters">
					<button className="btn btn-md btn-SW">Characters</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-md btn-SW">Planets</button>
				</Link>
				<Link to="/vehicles">
					<button className="btn btn-md btn-SW">Vehicles</button>
				</Link>
				<Link to="/">
					<button className="btn btn-md btn-SW">My Favorites</button>
				</Link>
				</div>
				<div>
				<Link to="/">
					<button className="btn btn-md btn-SW">Sign Up</button>
				</Link>
				<Link to="/">
					<button className="btn btn-md btn-SW mx-4">Login</button>
				</Link>
				</div>
			
		</nav>
		
		</div>
	);
};
