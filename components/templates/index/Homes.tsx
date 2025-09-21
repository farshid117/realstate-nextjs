import HomeCard from "@/components/modules/HomeCard";
import React from "react";
import db from "../../../data/db.json";

function Homes() {
	// console.log("db: ", db);
	const homeLists = db.homes;
  
	return (
		<div className='homes'>
			{db.homes.slice(0, 6).map((home) => (
				<HomeCard key={home.id} {...home} />
			))}
		</div>
	);
}

export default Homes;
