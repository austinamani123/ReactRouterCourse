import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Missing = () => {
	return (
		<main className="Missing">
			<h2>Page Not Found</h2>
			<p>Well that's dissapointing</p>
			<p>
				<Link to="/">Visit our homepage</Link>
			</p>
		</main>
	);
};

export default Missing;
