import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container">
		<nav className="navbar navbar-light mb-3" style={{backgroundColor: "#607274", height: "100px"}}>
			<div className="container d-flex justify-content-center">
				<Link to="/">
					<button className="btn btn-primary">Back Home</button>
				</Link>
				<Link to="/characters">
					<button className="btn btn-primary">Characters</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-primary">Planets</button>
				</Link>
				<Link to="/vehicles">
					<button className="btn btn-primary">Vehicles</button>
				</Link>
			</div>
		</nav>
		</div>
	);
};
