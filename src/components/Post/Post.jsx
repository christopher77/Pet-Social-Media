import React from "react";

const Post = (props) => {
	const author = props.dato.owner.firstName;
	const petImage = props.dato.image;
	const hashtags = props.dato.tags;
	const description = props.dato.text;
	const publishDate = props.dato.publishDate;
	const links = props.dato.link; // could be null
	// const coments
	const likes = props.dato.likes;

	console.log("props=>", props.dato.owner.firstName);
	return (
		<div className="container">
			<div>author:{author}</div>;
			<img src={petImage} alt="foto mascota" />
			<div className="hashtags">
				{hashtags.map((hashtag) => (
					<div>#{hashtag}</div>
				))}
			</div>
			<div className="description">
				<p>{description}</p>
			</div>
			<div className="date">{publishDate}</div>
			{links && <div className="links">{links}</div>}
			<div className="likes">{likes}</div>
		</div>
	);
};

export default Post;
