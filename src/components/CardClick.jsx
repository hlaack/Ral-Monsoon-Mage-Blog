import { useState, useEffect } from 'react';
import thrasios from "../assets/thrasios.png";
import spin_indicator from "../assets/spin_indicator.svg";

function CardClickImage({ clickedCard }) {
	const [imageUrl, setImageUrl] = useState(thrasios);
	const [cardPage, setCardPage] = useState("https://scryfall.com/card/c16/46/thrasios-triton-hero");
	const [cardData, setCardData] = useState(null);
	const [faceIndex, setFaceIndex] = useState(0);
	const [cache, setCache] = useState({});

	useEffect(() => {
		if (!clickedCard) return;

		if (cache[clickedCard]) {
			setCardData(cache[clickedCard]);
			setFaceIndex(0);
			setImageUrl(cache[clickedCard].image_uris.normal || cache[clickedCard].card_faces[0].image_uris.normal);
			setCardPage(cache[clickedCard].scryfall_uri);
			return;
		}

		const fetchCard = async () => {
			const resp = await fetch(
			`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(clickedCard)}`
			);
			const data = await resp.json();

			if (!data) return;

			setCache((prev) => ({ ...prev, [clickedCard]: data }));
			setCardData(data);
			setFaceIndex(0);

			if (data.image_uris) setImageUrl(data.image_uris.normal);
			else if (data.card_faces?.length > 0) setImageUrl(data.card_faces[0].image_uris.normal);

			setCardPage(data.scryfall_uri)
		};

		fetchCard();
	}, [clickedCard]);

	useEffect(() => {
		if (!cardData) return;

		if (cardData.image_uris) setImageUrl(cardData.image_uris.normal);
		else if (cardData.card_faces?.length > 0) {
			setImageUrl(cardData.card_faces[faceIndex].image_uris.normal)
		}
	}, [faceIndex, cardData])

	if (!imageUrl) return null;

	const isDoubleFaced = cardData?.card_faces?.length > 1;

	return (
		<div className="decklist-image-container">
			<div style={{position: "relative", display: "inline-flex"}}>
				<img
					src={imageUrl}
					alt={clickedCard || "Default Card"}
					className="decklist-image"
					style={{cursor: cardData?.card_faces?.length > 1 ? "pointer" : "default"}}
					onClick={() => {
						if (isDoubleFaced) {
							setFaceIndex((prev) => (prev === 0 ? 1 : 0));
						}
					}}
				/>

				{isDoubleFaced && (
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							color: "white",
							fontWeight: "bold",
							fontSize: "1.2rem",
							textShadow: "1px 1px 3px black",
							pointerEvents: "none",
						}}
					>
						<img src={spin_indicator} style={{scale: "1.5", filter: "drop-shadow(3px 3px 2px black"}} alt="A circular arrow." />
						Click to Flip
					</div>
				)}
			</div>

			<p className="text-center pt-2 fs-5">
				{clickedCard || "Thrasios, Triton Hero"}
			</p>

			{cardPage && (
				<button
					type="button"
					className="btn btn-outline-info"
					onClick={() => window.open(cardPage, "_blank")}
				>
					Click to view on Scryfall!
				</button>
			)}

		</div>
	);
}

export default CardClickImage;