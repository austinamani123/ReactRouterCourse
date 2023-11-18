import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Nav = ({ search, setSearch }) => {
	return (
		<nav className="Nav">
			<form className="searchForm" onSubmit={(e) => e.preventDefault()}>
				<label htmlFor="search">Search Posts</label>
				<input
					id="search"
					type="text"
					required
					placeholder="Search Posts"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/post">Post</Link>
					</li>
					<li>
						<Link to="about">About</Link>
					</li>
				</ul>
			</form>
		</nav>
	);
};

export default Nav;
