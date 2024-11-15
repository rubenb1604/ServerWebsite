const Quest = () => {
	return (
		<div className="h-fit bg-neutral-700 m-16 p-8 rounded-xl border-yellow-500 border-4">
			<span className="text-white font-sans font-extrabold text-4xl">
				Quest of the Day:{" "}
			</span>
			<span className="text-yellow-500 font-sans font-extrabold text-4xl">
				#001
			</span>
			<p className="pt-12 text-neutral-200 text-xl font-bold">
				Laufe von
				<span className="text-blue-400"> Gambeling Island </span>
				ca.
				<span className="text-blue-400"> 600 Blöcke </span>
				in Richtung
				<span className="text-blue-400"> Osten</span>, bis du zu einem
				<span className="text-blue-400"> Akaziendorf </span>
				gelangst. Vom höchsten Punkt des Dorfs kannst du ca.
				<span className="text-blue-400"> 100 Blöcke </span>
				in Richtung
				<span className="text-blue-400"> Norden </span>
				eine Markierung sehen. In der Nähe befindet sich
				<span className="text-blue-400"> unter einem Baum </span>
				der Schatz. Für jeden Spieler ist
				<span className="text-blue-400"> genau ein Slot </span>
				des Fasses vorgesehen. Wer mehr nimmt,
				<span className="text-blue-400"> verstößt gegen die Regeln </span>
				und muss mit <span className="text-blue-400"> Konsequenzen </span>
				rechnen.
			</p>
		</div>
	);
};

export default Quest;
