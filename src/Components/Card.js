import React from 'react';


const Card = ({name,diameter,climate,gravity,population,terrain}) => {
	return (
		<div className="bg-light-yellow dib tc br3 pa2 ma2 grow bw2 shadow-5">
		<img alt="planet" src={`https://www.robohash.org/${name}`}  height={150} width={250}/>
			<div>
			<h1>{name}</h1>
			<p>diameter: {diameter}</p>
			<p>climate: {climate}</p>
			<p>gravity: {gravity}</p>
			<p>population: {population}</p>
			<p>terrain: {terrain}</p>
			</div>

		</div>
		)
}

export default Card;