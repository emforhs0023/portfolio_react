import React from "react";
import MainHeader from "./MainHeader"
import MainBody from "./MainBody"
import MainWorkList from "./MainWorkList"
import BackTop from './BackTop';
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
				<BackTop />
			</div>
		</>
	)
}

export default Home