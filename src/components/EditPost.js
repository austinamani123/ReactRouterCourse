import React from 'react';
import { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import format from 'date-fns/format';
import { useStoreActions, useStoreState } from 'easy-peasy';

const EditPost = () => {
	const editPost = useStoreActions((actions) => actions.editPost);
	const editTitle = useStoreState((state) => state.editTitle);
	const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
	const editBody = useStoreState((state) => state.editBody);
	const setEditBody = useStoreActions((actions) => actions.setEditBody);

	const { id } = useParams();
	const getPostById = useStoreState((state) => state.getPostById);
	const post = getPostById(id);
	const history = useHistory();

	useEffect(() => {
		if (post) {
			setEditTitle(post.title);
			setEditBody(post.body);
		}
	}, [post, setEditTitle, setEditBody]);

	const handleEdit = async (id) => {
		const datetime = format(new Date(), 'MMMM dd, yyyy pp');
		const updatedPost = { id, title: editTitle, datetime, body: editBody };
		editPost(updatedPost);
		history.push(`/post/${id}`);
	};

	return (
		<main className="NewPost">
			{editTitle && (
				<>
					<h2>Edit Post</h2>
					<form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
						<label htmlFor="postTitle">Title:</label>
						<input
							id="postTitle"
							type="text"
							required
							value={editTitle}
							onChange={(e) => setEditTitle(e.target.value)}
						/>
						<label htmlFor="postBody">Post:</label>
						<textarea
							id="postBody"
							required
							value={editBody}
							onChange={(e) => setEditBody(e.target.value)}
						/>
						<button type="button" onClick={() => handleEdit(post.id)}>
							Submit
						</button>
					</form>
				</>
			)}
			{!editTitle && (
				<>
					<h2>Page Not Found</h2>
					<p>Well that's dissapointing</p>
					<p>
						<Link to="/">Visit our homepage</Link>
					</p>
				</>
			)}
		</main>
	);
};

export default EditPost;
