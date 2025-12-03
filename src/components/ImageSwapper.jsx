import { useState } from "react";
import Thrasios from "../assets/Thrasios.png";
import Roger from "../assets/roger.png";

export default function ImageSwapper() {
	const [front, setFront] = useState("A"); //SET INITIAL STATE OF CARD ORDER

	const images = { //DENOTE IMAGES
		A: Thrasios,
		B: Roger,
	};

	function swap() {
		setFront(front === "A" ? "B" : "A"); //IF FRONT IS A, SET TO B, vice versa
	}

	return (
		<div
			style={{
				position:"relative",
				maxHeight: "350px",
			}}
		>
			<img //BACK IMAGE
				className="d-block mx-auto shadow pt-2"
				src={images[front === "A" ?  "B" : "A"]}
				alt=""
				onClick={swap} //CALL SWAP FUNC ON CLICK
				style={{
					position:"absolute",
					maxHeight: "350px",
					cursor: "pointer",
					transform: "translate(-45px, -45px)",
					zIndex: 0,
					transition: "all 0.3s ease-in-out",
					opacity: 0.6, //KEEP BACK IMAGE FADED
				}}
			/>

			<img //FRONT IMAGE
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