import {Link} from "react-router-dom";

function Footer () {
	return (
		<nav className="navbar navbar-dark bg-dark border-top border-info ">
			<div className="container-fluid">
				<ul className="navbar-nav mx-auto text-center mb-2 mb-lg-0">
					<li className="nav-item">
						<Link className="nav-link active" to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="decklist">Current List</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/">Primer</Link>
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