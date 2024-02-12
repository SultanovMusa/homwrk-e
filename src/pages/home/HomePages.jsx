import scss from "./Home.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const urls =
	"https://api.elchocrud.pro/api/v1/1598258cc677485b3e553959cec88dfa/TODOS";

const HomePages = () => {
	const [data, setData] = useState({});

	const getUserId = localStorage.getItem("isAuth");

	const getRequest = async () => {
		try {
			const res = await axios.get(urls);
			const responseData = await res.data;

			if (getUserId) {
				const findUser = responseData.find((item) => item._id === +getUserId);
				setData(findUser);
			} else {
				console.log("User is not authenticated");
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getRequest();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const deleteHandle = async (id) => {
		const res = await axios.delete(`${urls}/${id}`);
		setData(res.data);
	};

	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("isAuth");
		setData({});
		navigate("/login");
	};
	return (
		<div className={scss.cards}>
			<div className="container">
				<div>
					<span>Кош келиниз🫱🗽🫲 </span>

					<button onClick={handleLogout}>Выйти🔙</button>

					<div className={scss.content}>
						<h3 className={scss.h3}>Email: {data.name}</h3>
						<p>Password: {data.pas}</p>
						<img className={scss.image} src={data.img} alt="ale" />
						<button
							onClick={() => {
								deleteHandle(data._id);
							}}>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePages;
