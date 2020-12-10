import Nav from "./Nav/Nav.js";
import Footer from "./Footer/Footer.js";
import AboutMain from "./AboutMain/AboutMain.js";
import { Helmet } from "react-helmet";

import "./App.css";

function AboutPage() {
	return (
		<div className="home-wrapper">
			<Helmet>
				<title>trefis | About</title>
			</Helmet>
			<Nav />
			<AboutMain />
			<Footer />
		</div>
	);
}

export default AboutPage;
