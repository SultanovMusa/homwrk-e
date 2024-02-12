import { Link } from "react-router-dom";
import scss from "./Header.module.scss";

const Header = () => {
	return (
		<header className={scss.header}>
			<div className="container">
				<div className={scss.content}>
					<nav className={scss.nav}>
						<ul>
							<Link className={scss.link} to={"/login"}>Log</Link>
							<Link className={scss.link} to={"/registration"}>Registration</Link>
							<Link className={scss.link} to={"/home"}>Home</Link>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
