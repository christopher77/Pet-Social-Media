import React from "react";
import "./Post.scss";
import likeCheck from "../../images/heart-solid.svg";
import like from "../../images/heart-regular.svg";
import comment from "../../images/comment.svg";
import link from "../../images/link.svg";
import Modal from "../Modal/Modal";

const Post = (props) => {
	const owner = props.dato.owner.firstName;
	const lastName = props.dato.owner.lastName;
	const persontitle = props.dato.owner.title;
	const personPicture = props.dato.owner.picture;
	const email = props.dato.owner.email;

	const petImage = props.dato.image;
	const hashtags = props.dato.tags;
	const description = props.dato.text;
	const publishDate = props.dato.publishDate;
	const links = props.dato.link;
	// const coments
	const likes = props.dato.likes;

	const [showModal, setShowModal] = React.useState(false);
	const [postLiked, setPostLiked] = React.useState(false);

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const changeLike = () => {
		setPostLiked(!postLiked);
	};

	return (
		<div className="container">
			<div className="owner" onClick={() => openModal()}>
				owner:{owner}
			</div>
			<img className="image" src={petImage} alt="foto mascota" />
			<div className="main">
				<img
					clasName="main__like"
					src={postLiked ? likeCheck : like}
					alt="like"
					onClick={() => changeLike()}
				/>
				<img clasName="main__comments" src={comment} alt="comments" />
				{links && <img clasName="main__link" src={link} />}
			</div>
			<div className="likes">{likes} Likes</div>
			<div className="description">
				<p>{description}</p>
			</div>
			<div className="hashtags">
				{hashtags.map((hashtag) => (
					<div>#{hashtag}</div>
				))}
			</div>
			<div className="date">{publishDate}</div>
			{showModal && (
				<Modal>
					<h2 className="modal__title">
						{persontitle} {owner} {lastName}
					</h2>

					<h3 className="modal__email">{email}</h3>
					<img className="modal__picture" src={personPicture} alt="photo" />
					<button className="modal__button" onClick={() => closeModal()}>
						OK
					</button>
				</Modal>
			)}
		</div>
	);
};

export default Post;
