import {NavLink} from "react-router-dom";

function Footer () {
	return (
		<nav className="navbar navbar-dark bg-dark border-top border-info ">
			<div className="container-fluid">
				<ul className="navbar-nav mx-auto text-center mb-2 mb-lg-0">
					<li className="nav-item">
						<NavLink
							className={({isActive}) => {
								return isActive ? "nav-link active" : "nav-link";
							}}
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							className={({isActive}) => {
								return isActive ? "nav-link active" : "nav-link";
							}}
							to="decklist"
						>
							Decklist
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							className={({isActive}) => {
								return isActive ? "nav-link active" : "nav-link";
							}}
							to="primer"
						>
							Primer
						</NavLink>
					</li>
					<li className="nav-item">
						&copy; Harry L. {new Date().getFullYear()}
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Footer;