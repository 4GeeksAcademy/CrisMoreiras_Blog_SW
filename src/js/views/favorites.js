import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/buttons.css"
import "../../styles/index.css"
import "../../styles/list-fav.css"

export const Favorites = () => {

    const { store, actions } = useContext(Context);

	return (
        <>
        <div className="container text-center py-4">
            <div className="row">
                <div className="col">
                    <h4>Favorites Characters</h4>
                    <ul className="list-group">
                    {store.favCharacters.map((item, index) => (
                        <li key={index} className="list-group-item list-fav m-1">
                            <h5>{item}</h5>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="col">
                    <h4>Favorites Planets</h4>
                    <ul className="list-group">
                    {store.favPlanets.map((item, index) => (
                        <li key={index} className="list-group-item list-fav m-1">
                            <h5>{item}</h5>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="col">
                    <h4>Favorites Vehicles</h4>
                    <ul className="list-group">
                    {store.favVehicles.map((item, index) => (
                        <li key={index} className="list-group-item list-fav m-1">
                            <h5>{item}</h5>
                        </li>
                    ))}
                    </ul>
                </div>
                
           </div>
        </div>
        </>
	);
};
