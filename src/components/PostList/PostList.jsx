import React from "react";
import Post from "../Post/Post";
import "./PostList.scss";

const PostList = ({ data }) => {
	return (
		<div className="lista">
			<div className="lista__title">Nuestras Mascotas</div>
			{data && data.map((dato, index) => <Post key={index} dato={dato} />)}
		</div>
	);
};

export default PostList;
