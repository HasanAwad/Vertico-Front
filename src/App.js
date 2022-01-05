import {
	BrowserRouter as Router,
	Routes,
	Route,
	Redirect,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import MovieContextProvider from "./contexts/MovieContext";
import Error from "./pages/Error/Error";
import Movies from "./pages/Movie/Movies";
import Search from "./pages/Search/Search";
import Genre from "./components/Genre/Genre";
import Actor from "./components/Actor/Actor";

const App = () => {
	return (
		<MovieContextProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/movies/:page" element={<Home />} />
					<Route path="/movies/watch/:movie" element={<Movies />} />
					<Route path="/movies/genre/:genretext/:page" element={<Genre />} />
					<Route path="/movies/actor/:actortext/:page" element={<Actor />} />
					<Route path="/movies/:searchtext/:page" element={<Search />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</Router>
		</MovieContextProvider>
	);
};

export default App;
