import ImageSwapper from "../components/ImageSwapper.jsx";

import arrowDown from "../assets/arrow_downward.svg";

function HomePage() {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h1 className="text-center fw-bolder display-3">Harry's T&T cEDH Tracker</h1>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<figure className="text-center">
						<blockquote className="blockquote">
							<p className="fw-lighter">A creature value pile with a splash of stax.</p>
						</blockquote>
						<figcaption className="blockquote-footer">
							Playing good cards, making big mana.
						</figcaption>
					</figure>
				</div>
			</div>
			<div className="row align-items-center justify-content-center">
				<div className="col-sm-auto pt-2 pt-sm-0">
					<div className="home_image_container">
						<ImageSwapper />
					</div>
				</div>
				<div className="col-sm-3 pt-3 pt-sm-0">
					<p className="fs-6">A midrange pile of <strong>pure value</strong>, meant to orchestrate consistent
						and predictable gameplay patterns through draw engines, mana advantage, and stax pieces.</p>
					<p className="fs-6">Leverage the <strong>sanctity</strong> of a creature-based board state to build up mountains of mana to
						fuel your creature and spell tutors, driving you towards <strong>infinite mana win conditions</strong> such as Devoted Druid or
						Chain Stasis!</p>
					<p className="fs-6">Filter through your <strong>entire</strong> deck with a two-mana commander, or consistently draw each turn with Tymna! This deck,
						while not easy, generates <strong>massive value</strong> and takes advantage of Thrasios' instant speed ability to play <strong>reactive</strong> to your opponents,
						allowing you to stay vigilant.</p>
				</div>
			</div>
			{/*Q+A ONE*/}
			<div className="row align-items-center justify-content-center">
				<div className="col-sm-auto">
					<button className="btn btn-dark border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQA1" aria-expanded="false" aria-controls="collapseQA1">
						<p className="display-5">Why play Tymna & Thrasios? <img src={arrowDown} alt="A down arrow." /></p>
					</button>
				</div>
			</div>
			<div className="row align-items-center justify-content-center">
				<div className="col-sm-auto">
					<div className="collapse" id="collapseQA1">
						<div className="card bg-dark mt-2 border-info border-2 rounded">
							<div className="card-body bg-dark text-bg-dark">
								<p className="card-text qa_text_limit">Despite all shifts in the metagame, a consistent and thorough 4-color value pile will sustain you through thick and thin.</p>
								<p className="card-text qa_text_limit">While the deck is slower, it still thrives in the early game by allowing you access to excess mana via mana-dorks or Thrasios activations.</p>
								<p className="card-text qa_text_limit">If you enjoy accumulating massive piles of cards and mana, then comboing off under the safety of stax or Silence effects, this is the deck for you.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*Q+A TWO*/}
			<div className="row align-items-center justify-content-center">
				<div className="col-sm-auto">
					<button className="btn btn-dark border-0 pt-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQA2" aria-expanded="false" aria-controls="collapseQA2">
						<p className="display-5">You should steer clear if you... <img src={arrowDown} alt="A down arrow." /></p>
					</button>
				</div>
			</div>
			<div className="row align-items-center justify-content-center">
				<div className="col-sm-auto">
					<div className="collapse" id="collapseQA2">
						<div className="card bg-dark mt-2 border-info border-2 rounded">
							<div className="card-body bg-dark text-bg-dark">
								<p className="card-text qa_text_limit">Prefer to win in the first three turns of the game.</p>
								<p className="card-text qa_text_limit">Do not enjoy a creature-based board state.</p>
								<p className="card-text qa_text_limit">Prefer a commander-centric deck.</p>
								<p className="card-text qa_text_limit">Do not enjoy Gaea's Cradle decks.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*Q+A THREE*/}
			<div className="row align-items-center justify-content-center">
				<div className="col-sm-auto">
					<button className="btn btn-dark border-0 pt-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQA3" aria-expanded="false" aria-controls="collapseQA3">
						<p className="display-5">What purpose does this website serve? <img src={arrowDown} alt="A down arrow." /></p>
					</button>
				</div>
			</div>
			<div className="row align-items-center justify-content-center">
				<div className="col-sm-auto">
					<div className="collapse" id="collapseQA3">
						<div className="card bg-dark mt-2 border-info border-2 rounded mb-4">
							<div className="card-body bg-dark text-bg-dark">
								<p className="card-text qa_text_limit">This website is the home grounds for my decklist, theorycrafting, and ideologies behind and for
									my personalized Tymna & Thrasios list.</p>
								<p className="card-text qa_text_limit">It does not intend to be the authority on which list is the best or most converting, but rather is just
									a place for me to share my philosophies and opinions while tailoring my list to what I enjoy most about a game of cEDH.</p>
								<p className="card-text qa_text_limit">I encourage you to hang out and share your thoughts. After all, it is a competitive format.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;