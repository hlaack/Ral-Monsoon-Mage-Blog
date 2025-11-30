
function Decklist(){
	return (
		<div className="container">
			<h1 className="text-center fw-bolder display-3">Current Decklist</h1>
			<div className="d-flex flex-wrap justify-content-around">
				<h2 className="fw-light display-6 text-decoration-underline">Creature</h2>
				<h2 className="fw-light display-6 text-decoration-underline">Instant</h2>
				<h2 className="fw-light display-6 text-decoration-underline">Sorcery</h2>
				<h2 className="fw-light display-6 text-decoration-underline">Enchantment</h2>
				<h2 className="fw-light display-6 text-decoration-underline">Artifact</h2>
			</div>
		</div>
	);
}

export default Decklist;
