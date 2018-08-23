import React from 'react';
import Card from './Card';

const CardList = ({planets}) => {
	return (

		<div>
		{
		planets.map((user,i) => {
		return (<Card key={i} name={planets[i].name} diameter={planets[i].diameter} climate={planets[i].climate} gravity={planets[i].gravity} population={planets[i].population} terrain={planets[i].terrain}/>)
	})
	}
	
		</div>
		);
}

export default CardList;