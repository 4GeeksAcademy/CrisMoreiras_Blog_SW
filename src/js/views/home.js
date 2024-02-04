import React, {useEffect, useState, useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

import { Characters } from "../component/characters";


export const Home = () => {

	const { store, actions } = useContext(Context);

    return (
		<>
		
				<div className="container">
					
				</div>
		
		</>
	);
}