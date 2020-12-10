import Nav from "./Nav/Nav.js";
import Footer from "./Footer/Footer.js";
import NotFoundMain from "./NotFoundMain/NotFoundMain.js";
import { Helmet } from "react-helmet";

import "./App.css";

function HomePage() {
	return (
		<div className="home-wrapper">
			<Helmet>
				<title>trefis | 404 Error</title>
			</Helmet>
			<Nav />
			<NotFoundMain />
			<Footer />
		</div>
	);
}

export default HomePage;
