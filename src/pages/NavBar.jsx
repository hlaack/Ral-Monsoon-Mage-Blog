import { Link, NavLink} from 'react-router-dom';

function NavBar() {
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark border-bottom border-info border-2">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">🧙 Harry's T&T cEDH Tracker</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
					</ul>
					<span className="navbar-text fst-italic">
						"When you go where the current takes you, you'll never run short of things to discover." -Thrasios, Triton Hero
					</span>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;