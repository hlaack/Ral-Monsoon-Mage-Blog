import { useEffect, useState } from "react";
import CardHoverImage from "../components/CardHover.jsx";
import CardClickImage from "../components/CardClick.jsx";
import thrasios from "../assets/thrasios.png";

function Decklist(){
	const [cards, setCards] = useState([]);

	const [clickedCard, setClickedCard] = useState(null);

	const [hoveredCard, setHoveredCard] = useState(null);
	const [pendingCard, setPendingCard] = useState(null);
	const [hoverTimer, setHoverTimer] = useState(null);

	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(()=> {
		fetch("/api/cards")
			.then(res => res.json())
			.then(data => setCards(data))
			.catch(err => console.error(err));
	}, []); //QUERY DB AND RETURN JSON TO REACT

	const types = ["Commander", "Creature", "Battle", "Instant", "Sorcery", "Enchantment", "Artifact", "Land"] //FILTERS FOR QUERY

	return (
		<div className="container" onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}>
			<h1 className="text-center fw-bolder display-3 border-bottom border-3 pb-2 border-info">Current Decklist</h1>

			<div className="row justify-content-center mb-4 gap-4">
				<div className="col-lg-auto">
					<div className="decklist-image-container">
						<p className="fst-italic text-center mb-2 mt-2">Click or hover card name to view.</p>
						<CardClickImage clickedCard={clickedCard} />
					</div>
				</div>
				<div className="col-lg-8">
					<div className="masonry">
						{types.map((t) => ( //MAP OUT CARD TYPES
							<div key={t} className="masonry-item">
								<h2 className="fw-bold fs-4 text-center text-lg-start mt-2">{t}</h2>

								{cards //ITERATE THROUGH CARDS IN DB, FIND MATCHING TYPE
									.filter((card) => card.card_type === t)
									.map((card) => (
										<div
											key={card.id}
											className="decklist-card mt-1 mx-auto text-start border-bottom border-secondary-subtle border-1"
											onMouseEnter={() => { //BEGIN TIMER ON CARD HOVER
												setPendingCard(card.card_name);

												const timer = setTimeout(() => {
													setHoveredCard(card.card_name);
												}, 400); //WAIT 400ms

												setHoverTimer(timer);
											}}

											onMouseLeave={() => { //RESET VARIABLES
												setPendingCard(null);
												setHoveredCard(null);
												clearTimeout(hoverTimer);
											}}

											onClick={() => {
												setClickedCard(card.card_name);
											}}
										>
											<span className="fw-lighter text-secondary">1&nbsp;&nbsp;</span>{card.card_name}
										</div>
									))
								}
							</div>
						))}
					</div>
				</div>
			</div>

			<CardHoverImage hoveredCard={hoveredCard} mousePosition={mousePosition} />

		</div>
	);
}

export default Decklist;
