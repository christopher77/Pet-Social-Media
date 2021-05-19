import React, { useEffect, useState } from "react";
import axios from "axios";
import PostList from "../../components/PostList/PostList";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "60a555eb48e7e45fc7562a40";

const Home = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		setLoading(true);
		getData();
	}, []);

	const getData = async () => {
		try {
			const data = await axios.get(`${BASE_URL}/post`, {
				headers: { "app-id": APP_ID },
			});
			setData(data.data.data);
			// console.log("dataGet=>", data.data.data[0]);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	return <div>{data && <PostList data={data} />}</div>;
};

export default Home;
