import Image from "react-bootstrap/Image";
import "./Links.css";

function Links() {
	return (
		<div className="links-wrapper">
			<a
				href="https://github.com/etztrefis"
				target="_blank"
				rel="noreferrer"
			>
				<Image
					src="./img/github_w.png"
					rounded
					width="50"
					height="50"
					style={{ marginRight: "15px", marginLeft: "15px" }}
					id="zoomIn"
					alt="github"
				></Image>
			</a>
			<a href="https://t.me/trefis" target="_blank" rel="noreferrer">
				<Image
					src="./img/telegram_w.png"
					rounded
					width="50"
					height="50"
					style={{ marginRight: "15px", marginLeft: "15px" }}
					id="zoomIn"
					alt="telegram"
				></Image>
			</a>
			<a href="mailto:trefis@pm.me" rel="noreferrer">
				<Image
					src="./img/email_w.png"
					rounded
					width="50"
					height="50"
					style={{ marginRight: "15px", marginLeft: "15px" }}
					id="zoomIn"
					alt="e-mail"
				></Image>
			</a>
			<a
				href="https://open.spotify.com/user/zvzyps3iv90o8t95i4b6d647i?si=4d18QvmKTnWrsy0UY3TtSQ"
				target="_blank"
				rel="noreferrer"
			>
				<Image
					src="./img/spotify_w.png"
					rounded
					width="50"
					height="50"
					style={{ marginRight: "15px", marginLeft: "15px" }}
					id="zoomIn"
					alt="spotify"
				></Image>
			</a>
			<a
				href="https://www.youtube.com/channel/UCIUot9hixio0F6NbyPMImLA"
				target="_blank"
				rel="noreferrer"
			>
				<Image
					src="./img/youtube_w.png"
					rounded
					width="50"
					height="50"
					style={{ marginRight: "15px", marginLeft: "15px", marginTop:"5px" }}
					id="zoomIn"
					alt="youtube"
				></Image>
			</a>
		</div>
	);
}

export default Links;
