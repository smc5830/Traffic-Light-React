import React, { useState } from "react";

const Semaforo = () => {
	const [color, setColor] = useState("");

	return (
		<div className="contenedor">
			<div className="semaforo">
				<div
					onClick={() => setColor("rojo")}
					className={
						"rojo brillo" + (color === "rojo" ? " activar" : "")
					}></div>

				<div
					onClick={() => setColor("naranja")}
					className={
						"naranja brillo" +
						(color === "naranja" ? " activar" : "")
					}></div>

				<div
					onClick={() => setColor("verde")}
					className={
						"verde brillo" + (color === "verde" ? " activar" : "")
					}></div>
			</div>
			<div className="palito"></div>
		</div>
	);
};
export default Semaforo;
