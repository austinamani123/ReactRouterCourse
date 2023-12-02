import React from 'react';
import { useStoreState } from 'easy-peasy';

const Footer = () => {
	const postCount = useStoreState((state) => state.postCount);
	return <footer className="Footer">{postCount} Post Blogs</footer>;
};

export default Footer;
