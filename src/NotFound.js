import Nav from "./Nav/Nav.js";
import Footer from "./Footer/Footer.js";
import NotFoundMain from "./NotFoundMain/NotFoundMain.js";

import "./App.css";

function HomePage() {
	return (
		<div>
			<Nav />
			<NotFoundMain />
			<Footer />
		</div>
	);
}

export default HomePage;
