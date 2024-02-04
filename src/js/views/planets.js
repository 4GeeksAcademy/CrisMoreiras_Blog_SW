import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = () => {

    const { store, actions } = useContext(Context);

	return (
        <>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">

                {store.planets.map((item, index) => (
            
                <div className="col">
		            <div className="card" style={{width: "18rem"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link className="btn btn-primary" to={"/single_planet/" + item.uid}>
					        <span>More</span>
				        </Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </>
	);
};
