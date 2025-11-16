import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center">
			<div className="row display-2 text-center">
				<h1>The storm! It's too much for us to handle! ⚡</h1>
			</div>
			<div className="row display-2 text-center">
				<Link to="/" className="align-middle text-decoration-none">Go back home, spellslinger.</Link>
			</div>
		</div>
	);
}

export default NotFound;