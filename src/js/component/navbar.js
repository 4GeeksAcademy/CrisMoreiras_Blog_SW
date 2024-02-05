import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container-fluid">
		<nav className="navbar" style={{backgroundColor: "#222831", height: "100px"}}>
			<div className="container d-flex justify-content-center">
				<Link to="/">
					<button className="btn btn-md mx-3" style={{background: "#FFD369"}}>Home</button>
				</Link>
				<Link to="/characters">
					<button className="btn btn-md mx-3" style={{background: "#FFD369"}}>Characters</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-md mx-3" style={{background: "#FFD369"}}>Planets</button>
				</Link>
				<Link to="/vehicles">
					<button className="btn btn-md mx-3" style={{background: "#FFD369"}}>Vehicles</button>
				</Link>
				<Link to="/">
					<button className="btn btn-md mx-3" style={{background: "#FFD369"}}>My Favorites</button>
				</Link>
			</div>
		</nav>
		</div>
	);
};
