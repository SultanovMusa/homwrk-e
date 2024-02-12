import scss from "./Login.module.scss";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaUser, FaLock } from "react-icons/fa";

const urls =
	"https://api.elchocrud.pro/api/v1/1598258cc677485b3e553959cec88dfa/TODOS";

const LoginPages = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handles = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.get(urls);

			const matchUser = res.data.find(
				(item) => item.name === email && item.pas === password
			);

			if (matchUser) {
				localStorage.setItem("isAuth", matchUser._id);
				navigate("/home");
				console.log(matchUser);
			} else {
				alert("Туура Жазыныз.❓");
			}

			if (email === "" && password === "") {
				navigate("/registr");
				return;
			}

			if (!email.includes("@")) {
				alert("Сураныч Email да @ койгонду унтбаныз✅ .");
				return;
			}

			if (password.length <= 4) {
				alert("Password то 4 цифрадан коп болсун сураныч ✅.");
				return;
			}
		} catch (error) {
			console.error("Error during login:", error);
		}
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div className={scss.cards}>
			<div className="container">
				<div className={scss.wrapper}>
					<form>
						<h1>Login</h1>
						<div className={scss.input_box}>
							<input
								className={scss.input}
								type="email"
								value={email}
								onChange={handleEmailChange}
								placeholder="UserName🥷"
								required
							/>
							<FaUser className={scss.icon} />
						</div>
						<div className={scss.input_box}>
							<input
								className={scss.input}
								type="password"
								value={password}
								onChange={handlePasswordChange}
								placeholder="Password🔐"
								required
							/>
							<FaLock className={scss.icon} />
						</div>

						<button className={scss.button} type="submit" onClick={handles}>
							<a>Go home🔜</a>
						</button>

						<div className={scss.register_link}>
							<p>
								Don,t have an account? <Link to="/registration">Register📝</Link>
							</p>
						</div>
						<div className={scss.card}>
							<a href="https://github.com/SultanovMusa">
								<FaGithubSquare />
							</a>
							<a href="https://www.instagram.com/sultanov_11_/">
								<FaInstagram />
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPages;
