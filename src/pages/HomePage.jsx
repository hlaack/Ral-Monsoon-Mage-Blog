import ImageSwapper from "../components/ImageSwapper.jsx"; //HANDLES STACKED IMAGE

import arrowDown from "../assets/arrow_downward.svg";

function HomePage() {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h1 className="text-center fw-bolder display-3">Harry's Rog-Thras cEDH Tracker</h1>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<figure className="text-center">
						<blockquote className="blockquote">
							<p className="fw-lighter">A Cradle-centric mana-building pile.</p>
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
					<p className="fs-6">A vessel to consistently build up <strong>big mana bases</strong>, make <strong>infinite mana</strong>, and <strong>destroy your opponents</strong>!</p>
					<p className="fs-6">Leverage the <strong>sanctity</strong> of a creature-based board state to build up mountains of mana to
						fuel your creature and spell tutors, driving you towards <strong>infinite mana win conditions</strong> or just a
						stack full of Thrasios activations!</p>
					<p className="fs-6">Filter through your <strong>entire</strong> deck with a two-mana commander and build up creature count with a free Rograkh! This deck,
						while not easy, generates <strong>massive value</strong> and takes advantage of Thrasios' instant speed ability to play <strong>reactive</strong> to your opponents,
						allowing you to stay vigilant.</p>
				</div>
			</div>
			{/*Q+A ONE*/}
			<div className="row align-items-center justify-content-center">
				<div className="col-sm-auto">
					<button className="btn btn-dark border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQA1" aria-expanded="false" aria-controls="collapseQA1">
						<p className="display-5">Why play Rograkh & Thrasios? <img src={arrowDown} alt="A down arrow." /></p>
					</button>
				</div>
			</div>
			<div className="row align-items-center justify-content-center">
				<div className="col-sm-auto">
					<div className="collapse" id="collapseQA1">
						<div className="card bg-dark mt-2 border-info border-2 rounded">
							<div className="card-body bg-dark text-bg-dark">
								<p className="card-text qa_text_limit">Despite all shifts in the metagame, a consistent and thorough Cradle-centric value pile will sustain you through thick and thin.</p>
								<p className="card-text qa_text_limit">While the deck is slower, it still thrives in the early game by allowing you access to excess mana via mana-dorks, Thrasios activations, and our free commander.</p>
								<p className="card-text qa_text_limit">If you enjoy accumulating massive piles of cards and mana, then comboing off under the safety of an exiled or phased out board, the Rog-Thras is for you.</p>
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
								<p className="card-text qa_text_limit">Prefer a heavily commander-centric deck.</p>
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
								<p className="card-text qa_text_limit">This website is the home grounds for thoughts, theorycrafting, and ideologies behind and for
									the current meta situation of Rog-Thras.</p>
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