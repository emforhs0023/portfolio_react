import React from "react";
import MainHeader from "./MainHeader"
import MainBody from "./MainBody"
import MainWorkList from "./MainWorkList"
import "./Home.css";

const Home = () => {
	return (
		<>
			<div>
				<MainHeader />
			</div>
			<div>
				<MainBody />
			</div>	
			<div>
				<MainWorkList/>
			</div>
		</>
	)
}

export default Home