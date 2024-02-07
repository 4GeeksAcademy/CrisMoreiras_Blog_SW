import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/buttons.css"
import "../../styles/index.css"
import "../../styles/single-card.css"

export const Planets = () => {

    const { store, actions } = useContext(Context);

	return (
        <>
        <div className="container my-4">
            <div className="row row-cols-1 row-cols-md-4 g-4">

                {store.planets.map((item, index) => (
            
                <div className="col" key={item.uid}>
		            <div className="card single-card" style={{width: "18rem"}}>
                        <img src={`https://picsum.photos/100?random=${item.uid}`} className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                        <h5 className="card-title">{item.name}</h5>
                        <Link className="btn btn-sm btn-SW-S" to={"/single_planet/" + item.uid}>
					        <span>More</span>
				        </Link>
                        <button
                            onClick={() => actions.favPlanets(item.name)}
                            className="btn btn-sm btn-SW-S">
				            Like!
                        </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </>
	);
};
