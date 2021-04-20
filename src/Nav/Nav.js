import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Nav.css";

function SiteNav() {
	return (
		<div>
			<Navbar className="backgroungcolor-nav" variant="dark" expand="lg">
				<Navbar.Brand href="/">
					<img
						alt=""
						src="./img/pphop.gif"
						width="50px"
						height="50px"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<NavDropdown
							title="peepoChat"
							id="collasible-nav-dropdown"
							style={{ paddingRight: "10px" }} >
							<NavDropdown.Item
								href="https://chat.peepo.club/"
								target="_blank"
							>
								Project
							</NavDropdown.Item>
							<NavDropdown.Item
								href="https://github.com/peepoclub/peepoChat"
								target="_blank"
							>
								Source Code
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link
							href="https://eaterybot.trefis.net/"
							target="_blank"
							style={{ paddingRight: "20px" }}
							rel="noopener" >
							EateryBot
						</Nav.Link>
						<Nav.Link
							href="https://github.com/etztrefis/feelsokayegbot"
							target="_blank"
							style={{ paddingRight: "20px" }}
							rel="noopener" >
							FeelsOkayegBot
						</Nav.Link>
						<Nav.Link href="/about" className="nav-item">About</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className="tab-highlighter"></div>
		</div>
	);
}

export default SiteNav;
