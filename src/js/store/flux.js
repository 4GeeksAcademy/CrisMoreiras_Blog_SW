const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			characters: [],

			planets: [],

			vehicles: [],

			favCharacters: [],

			favPlanets: [],

			favVehicles: [],

		},
		actions: {

			favCharacters: (nameFav) => {

				const store = getStore();

				if (store.favCharacters.includes(nameFav)) {
					setStore({ favCharacters: store.favCharacters.filter((repetido) => repetido != nameFav) });
				}
				else {
					setStore({ favCharacters: [...store.favCharacters, nameFav] });
				}
			},

			favPlanets: (nameFav) => {

				const store = getStore();

				if (store.favPlanets.includes(nameFav)) {
					setStore({ favPlanets: store.favPlanets.filter((repetido) => repetido != nameFav) });
				}
				else {
					setStore({ favPlanets: [...store.favPlanets, nameFav] });
				}
			},

			favVehicles: (nameFav) => {

				const store = getStore();

				if (store.favVehicles.includes(nameFav)) {
					setStore({ favVehicles: store.favVehicles.filter((repetido) => repetido != nameFav) });
				}
				else {
					setStore({ favVehicles: [...store.favVehicles, nameFav] });
				}
			},

			loadSomeData: () => {
			
				//Characters//
				fetch ("https://www.swapi.tech/api/people")
        		.then ((response)=>response.json())
        		.then ((data)=>setStore({characters:data.results}))

				//Planets//
				fetch ("https://www.swapi.tech/api/planets")
        		.then ((response)=>response.json())
        		.then ((data)=>setStore({planets:data.results}))

				//Vehicles//
				fetch ("https://www.swapi.tech/api/vehicles")
        		.then ((response)=>response.json())
        		.then ((data)=>setStore({vehicles:data.results}))

			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
