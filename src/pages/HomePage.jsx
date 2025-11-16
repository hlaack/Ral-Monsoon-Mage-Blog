import ralImage from "../assets/mh3-247-ral-monsoon-mage.png";

function HomePage() {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h1 className="text-center fw-bolder display-3">Harry's Ral cEDH Tracker</h1>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<figure className="text-center">
						<blockquote className="blockquote">
							<p className="fw-lighter">A deck that knows not the bindings of "interaction".</p>
						</blockquote>
						<figcaption className="blockquote-footer">
							Someone who's yet to be Silenced on their upkeep.
						</figcaption>
					</figure>
				</div>
			</div>
			<div className="row align-items-center justify-content-center">
				<div className="col-sm-auto">
					<img src={ralImage} className="ral_card_home d-block mx-auto shadow" alt="An image of Ral, Monsoon Mage, the Magic: the Gathering card."/>
				</div>
				<div className="col-sm-3">
					<p className="fs-6">An <strong>Izzet spellslinger</strong> deck designed to strategically jam
						cards in order to <strong>win fast and early</strong>, all while building resilience to
						interaction pieces.</p>
					<p className="fs-6">Go wild every possible turn with a <strong>barrage of instants and
						sorceries</strong>, cost reduced by Mr. Ral, wheeling, looting, and drawing until you're ready
						to flip over for some <strong>Leyline Prodigy action!</strong></p>
					<p className="fs-6">Give your opponents a <strong>finale of cantrips</strong> and serious
						storm-power, with finishers like Radstorm and Grapeshot, made unending with Reiterate, or a
						classic Brain Freeze - Underworld Breach loop </p>
				</div>
			</div>
		</div>
	);
}

export default HomePage;