import React from "react";
import "./Post.scss";
import like from "../../images/heart-solid.svg";
import comment from "../../images/comment.svg";
import link from "../../images/link.svg";

const Post = (props) => {
	const owner = props.dato.owner.firstName;
	const petImage = props.dato.image;
	const hashtags = props.dato.tags;
	const description = props.dato.text;
	const publishDate = props.dato.publishDate;
	const links = props.dato.link;
	// const coments
	const likes = props.dato.likes;

	console.log("props=>", props.dato.owner.firstName);
	return (
		<div className="container">
			<div className="owner">owner:{owner}</div>
			<img className="image" src={petImage} alt="foto mascota" />
			<div className="main">
				<img clasName="main__like" src={like} alt="like" />
				<img clasName="main__comments" src={comment} alt="comments" />
				{links && <img clasName="main__link" src={link} />}
			</div>
			<div className="likes">{likes} Me gusta</div>
			<div className="description">
				<p>{description}</p>
			</div>
			<div className="hashtags">
				{hashtags.map((hashtag) => (
					<div>#{hashtag}</div>
				))}
			</div>
			<div className="date">{publishDate}</div>
		</div>
	);
};

export default Post;
