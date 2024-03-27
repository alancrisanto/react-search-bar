import SearchResult from "./SearchResult";
import "./SearchResultsList.css";

function SearchResultsList({ results }) {
	return (
		<div className="results-list">
			{results.map((el, i) => {
				return <SearchResult result={el} key={i} />;
			})}
		</div>
	);
}

export default SearchResultsList;
