import { useState, useEffect } from "react";

function CardHoverImage({ hoveredCard, mousePosition }) {
	const [imageUrl, setImageUrl] = useState(null);
	const [cache, setCache] = useState({});

	useEffect(() => {
		if (!hoveredCard) {
			setImageUrl(null);
			return;
		}

		if (cache[hoveredCard]) {
			setImageUrl(cache[hoveredCard]);
			return;
		}

		const fetchCard = async () => {
			const resp = await fetch(
				`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(hoveredCard)}`
			);
			const data = await resp.json();

			let url = null;

			if (data.image_uris) {
				url = data.image_uris.normal;
			} else if (data.card_faces && data.card_faces[0].image_uris) {
				url = data.card_faces[0].image_uris.normal;
			}

			setImageUrl(url);
			setCache((prev) => ({ ...prev, [hoveredCard]: url }));
		};

		fetchCard();
	}, [hoveredCard, cache]);

	if (!imageUrl) return null;

	return (
		<img
			src={imageUrl}
			alt={hoveredCard}
			className="shadow border-3"
			style={{
				position: 'fixed',
				top: mousePosition.y + 15,
				left: mousePosition.x + 15,
				width: '250px',
				zIndex: 9999,
				borderRadius: "12px",
				pointerEvents: 'none',
			}}
		/>
	);
}

export default CardHoverImage;