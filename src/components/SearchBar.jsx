import { useState } from "react";

import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ ShowResults }) {
	const [input, setInput] = useState("");
	const fetchData = (value) => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => {
				const results = data.filter((user) => {
					return value && user && user.name && user.name.toLowerCase().includes(value);
				});
				// Set the result into de prop showResults
				ShowResults(results);
			});
	};

	const handleChange = (value) => {
		setInput(value);
		fetchData(value);
	};

	return (
		<div className="input-wrapper">
			<FaSearch id="search-icon" />
			<input type="text" placeholder="Type to search" value={input} onChange={(e) => handleChange(e.target.value)} />
		</div>
	);
}

export default SearchBar;
