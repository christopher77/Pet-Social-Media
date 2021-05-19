import React from "react";
import Post from "../Post/Post";
import "./PostList.scss";

const PostList = ({ data }) => {
	const datos = data.map((dato) => console.log(dato));
	return (
		<div className="lista">
			<div className="lista__title">Nuestras Mascotas</div>
			{data && data.map((dato, index) => <Post key={index} dato={dato} />)}
		</div>
	);
};

export default PostList;
