import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";
import { ImMenu } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Navbar() {
	const isSmall = useMediaQuery({ query: `(min-width: 1090px)` });
	const isMeduim = useMediaQuery({ query: `(min-width: 1360px)` });
	const isMobile = useMediaQuery({ query: `(max-width: 600px)` });
	const [search, setSearch] = useState("");
	// const navigate = useNavigate();
	const [click, setClick] = useState(false);
	const [portal, setPortal] = useState(false);
	const [clicksearch, setclicksearch] = useState(false);
	function nav() {
		window.location.pathname = `movies/${search}/1`;
	}
	return (
		<div className="Nav">
			{!isSmall &&
				(click ? (
					<AiOutlineClose
						className="Nav-ham"
						onClick={() => {
							setClick(false);
						}}
					></AiOutlineClose>
				) : (
					<ImMenu
						className="Nav-ham"
						onClick={() => {
							setClick(true);
						}}
					></ImMenu>
				))}
			<p className="Nav-title" onClick={() => {}}>
				VertiCode
			</p>
			{isSmall && (
				<div className="Nav-menu">
					<Link className="Nav-menu-child" to="movies/1">
						Home
					</Link>

					<Link className="Nav-menu-child" to="movies">
						Genre
					</Link>

					<Link className="Nav-menu-child" to="movies">
						Top Rated
					</Link>

					<Link className="Nav-menu-child" to="movies">
						Movies
					</Link>

					<Link className="Nav-menu-child" to="movies">
						Tv Series
					</Link>
				</div>
			)}
			{!isMobile && (
				<div className="Nav-search-bar">
					<FiSearch className="Nav-search-bar-icon" />
					<input
						onKeyPress={(e) => {
							if (e.key === "Enter" && search) {
								nav();
							}
						}}
						className="Nav-search-bar-input"
						type="text"
						placeholder="Enter your keywords..."
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					></input>
				</div>
			)}
			{isMobile && (
				<FiSearch
					className="Nav-search-bar-mobile"
					onClick={() => {
						setclicksearch((prev) => {
							return !prev;
						});
					}}
				/>
			)}
			<div
				className="Nav-user"
				onClick={() => {
					setPortal((prev) => {
						return !prev;
					});
				}}
			>
				<HiUserCircle className="Nav-user-icon" />
				{isMeduim && <p className="Nav-user-text">Login</p>}
			</div>
			{isMobile && clicksearch && !click && (
				<div className="Nav-search-input-mobile">
					<input
						onKeyPress={(e) => {
							if (e.key === "Enter" && search) {
								nav();
							}
						}}
						className="Nav-search-bar-input"
						type="text"
						placeholder="Enter your keywords..."
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					></input>
				</div>
			)}
			{!isSmall && click && (
				<div className="Nav-menu-mobile">
					<Link className="Nav-menu-mobile-child" to="movies/1">
						Home
					</Link>
					<Link className="Nav-menu-mobile-child" to="movies">
						Genre
					</Link>

					<Link className="Nav-menu-mobile-child" to="movies">
						Top Rated
					</Link>

					<Link className="Nav-menu-mobile-child" to="movies">
						Movies
					</Link>

					<Link className="Nav-menu-mobile-child" to="movies">
						Tv Series
					</Link>
				</div>
			)}
		</div>
	);
}

export default Navbar;
