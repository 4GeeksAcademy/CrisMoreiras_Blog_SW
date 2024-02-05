import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = () => {

    const { store, actions } = useContext(Context);

	return (
        <>
        <div className="container my-4">
            <div className="row row-cols-1 row-cols-md-4 g-4">

                {store.characters.map((item, index) => (
            
                <div className="col" key={item.uid}>
		            <div className="card" style={{width: "18rem", background: "#C7C8CC"}}>
                        <img src={`https://picsum.photos/100?random=${item.uid}`} className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                        <h5 className="card-title">{item.name}</h5>
                        <Link className="btn btn-sm mx-1" style={{background: "#FFD369"}} to={"/single_character/" + item.uid}>
					        <span>More</span>
				        </Link>
                        <button
                            className="btn btn-sm mx-1" style={{background: "#FFD369"}}>
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
