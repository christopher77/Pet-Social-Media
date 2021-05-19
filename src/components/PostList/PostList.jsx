import React from "react";
import Post from "../Post/Post";

const PostList = ({ data }) => {
	const datos = data.map((dato) => console.log(dato));
	return (
		<div>
			Posts de Nuestras Mascotas
			{data && data.map((dato, index) => <Post key={index} dato={dato} />)}
		</div>
	);
};

export default PostList;
