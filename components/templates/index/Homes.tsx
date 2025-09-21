import Home from "@/components/modules/Home";
import React from "react";
import db from "../../../data/db.json";

function Homes() {
	console.log("db: ", db);
	const homeLists = db.homes;
	return <div className='homes'>
    {
      db.homes.map(home => <Home key={home.id} {...home} /> )
    }
    </div>;
}

export default Homes;
