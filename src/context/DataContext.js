import { createContext, useState, useEffect } from 'react';
import useAxiosFetch from '../Hooks/useAxiosFetch';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [posts, setPosts] = useState([]);

	const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');
	useEffect(() => {
		const filteredResults = posts.filter(
			(post) =>
				post.body.toLowerCase().includes(search.toLowerCase()) ||
				post.title.toLowerCase().includes(search.toLowerCase())
		);

		setSearchResults(filteredResults.reverse());
	}, [posts, search]);

	useEffect(() => {
		setPosts(data);
	}, [data]);

	return (
		<DataContext.Provider
			value={{
				search,
				setSearch,
				searchResults,
				fetchError,
				isLoading,
				posts,
				setPosts,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;