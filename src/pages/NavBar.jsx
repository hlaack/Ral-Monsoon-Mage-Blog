import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark border-bottom border-info border-2">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">⚡ Ral cEDH</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="decklist">Decklist</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">Primer</Link>
						</li>
					</ul>
					<span className="navbar-text fst-italic">
						"Taming a storm is like taming a wild beast; once you understand its wants and needs, you can direct it any way you like."
					</span>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;