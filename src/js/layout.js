import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";

import { Characters } from "./views/characters";
import { Single_character } from "./views/single_character";
import { Planets } from "./views/planets";
import { Single_planet } from "./views/single_planet";
import { Vehicles } from "./views/vehicles";
import { Single_vehicle } from "./views/single_vehicle";
import { Favorites } from "./views/favorites";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />					
						<Route path="/characters" element={<Characters />} />
						<Route path="/single_character/:character_id" element={<Single_character />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/single_planet/:planet_id" element={<Single_planet />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/single_vehicle/:vehicle_id" element={<Single_vehicle />} />
						<Route path="/favorites" element={<Favorites />} />

						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
