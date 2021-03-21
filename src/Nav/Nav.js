import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./Nav.css";

function SiteNav() {
	return (
		<Navbar className="backgroungcolor-nav" variant="dark" expand="lg">
			<Navbar.Brand href="/" style={{ paddingRight: "10px" }}>
				<img
					alt=""
					src="./img/pphop.gif"
					width="50px"
					height="50px"
					className="d-inline-block align-top"
				/>{" "}
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto" style={{ fontSize: "16px" }}>
					<NavDropdown
						title="peepoChat"
						id="collasible-nav-dropdown"
						style={{ paddingRight: "10px" }}
					>
						<NavDropdown.Item
							href="https://peepochat.github.io/"
							target="_blank"
						>
							Project
					</NavDropdown.Item>
						<NavDropdown.Item
							href="https://github.com/peepoChat/peepochat.github.io"
							target="_blank"
						>
							Source Code
					</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link
						href="https://eaterybot.trefis.net/"
						target="_blank"
						style={{ paddingRight: "20px" }}
					>
						EateryBot
				</Nav.Link>
					<NavDropdown
						title="FeelsOkayegBot"
						id="collasible-nav-dropdown"
						style={{ paddingRight: "10px" }}
					>
						<NavDropdown.Item
							href="https://github.com/etztrefis/feelsokayegbot"
							target="_blank"
						>
							Source Code
					</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="/about">About</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default SiteNav;
