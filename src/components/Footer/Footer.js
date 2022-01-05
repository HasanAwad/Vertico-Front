import React, { useContext } from "react";
import "./Footer.css";
import { MovieContext } from "../../contexts/MovieContext";
function Footer() {
	const { state: movies } = useContext(MovieContext);
	if (movies) {
		return (
			<div className="Footer-flex">
				<h1>VertiCode</h1>
				<p>
					VertiCode is one of the top free streaming website, where you can
					watch movies online free without registration required. With a big
					database and great features, we're confident VertiCode is the best
					free online movie website that you simply can't miss!
				</p>
				<span>
					This site does not store any files on our server, we only linked to
					the media which is hosted on 3rd party services.
				</span>
			</div>
		);
	} else {
		return <></>;
	}
}

export default Footer;
