import { useState } from "react";
import Thrasios from "../assets/Thrasios.png";
import Tymna from "../assets/Tymna.png";

export default function ImageSwapper() {
	const [front, setFront] = useState("A");

	const images = {
		A: Thrasios,
		B: Tymna,
	};

	function swap() {
		setFront(front === "A" ? "B" : "A");
	}

	return (
		<div
			style={{
				position:"relative",
				maxHeight: "350px",
			}}
		>
			<img
				className="d-block mx-auto shadow pt-2"
				src={images[front === "A" ?  "B" : "A"]}
				alt=""
				onClick={swap}
				style={{
					position:"absolute",
					maxHeight: "350px",
					cursor: "pointer",
					transform: "translate(-45px, -45px)",
					zIndex: 0,
					transition: "all 0.3s ease-in-out",
					opacity: front === "A" ? 1 : 0.6,
				}}
			/>

			<img
				className="d-block mx-auto shadow pt-2"
				src={images[front]}
				alt=""
				onClick={swap}
				style={{
					position:"relative",
					maxHeight: "350px",
					cursor: "pointer",
					zIndex: 1,
					transition: "all 0.3s ease-in-out",
					opacity: front === "A" ? 1 : 1,
					transform: front === "A"
						? "translate(0px, 0px)"
						: "translate(0px, 0px)"
				}}
			/>
		</div>
	);
}