import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage.js";
import AboutPage from "./AboutPage.js";
import NotFound from "./NotFound.js";

import "./App.css";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/about" component={AboutPage} />
					<Route path="*" component={NotFound} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
