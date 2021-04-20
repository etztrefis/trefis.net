import React from "react";
import Nav from "./Nav/Nav.js";
import Main from "./Main/Main.js";
import Links from "./Links/Links.js";
import Footer from "./Footer/Footer.js";

import "./App.css";

function HomePage() {
	return (
		<div className="home-wrapper">
			<Nav />
			<Main />
			<Links />
			<Footer />
		</div>
	);
}

export default HomePage;
