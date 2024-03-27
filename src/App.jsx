import { useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";

function App() {
	const [results, setResults] = useState([]);

	return (
		<div className="app">
			<div className="glitch-wrapper">
				<div className="glitch" data-glitch="React Search Bar">
					React Search Bar
				</div>
			</div>
			<div className="search-bar-container">
				<SearchBar ShowResults={setResults} />
				<SearchResultsList results={results} />
			</div>
		</div>
	);
}

export default App;
