import { dom } from '@fortawesome/fontawesome-svg-core';
import "./Links.css";

function Links() {
	dom.watch();
	return (
		<div className="links-wrapper">
			<a
				href="https://github.com/etztrefis"
				target="_blank"
				rel="noreferrer"
				className="btn"
			>
				<i className="fab fa-github"></i>
			</a>
			<a href="https://t.me/trefis" target="_blank" rel="noreferrer" className="btn">
				<i className="fab fa-telegram"></i>
			</a>
			<a href="mailto:trefis@pm.me" rel="noreferrer" className="btn">
				<i className="fa fa-envelope"></i>
			</a>
			<a
				href="https://open.spotify.com/user/zvzyps3iv90o8t95i4b6d647i?si=4d18QvmKTnWrsy0UY3TtSQ"
				target="_blank"
				rel="noreferrer"
				className="btn"
			>
				<i className="fab fa-spotify"></i>
			</a>
			<a
				href="https://www.youtube.com/channel/UCIUot9hixio0F6NbyPMImLA"
				target="_blank"
				rel="noreferrer"
				className="btn"
			>
				<i className="fab fa-youtube"></i>
			</a>
		</div>
	);
}

export default Links;
