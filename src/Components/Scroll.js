import React from 'react';

const Scroll = (props) => {

	return (
		<div style={{overflow:'scroll', border:'5px solid yellow', height:'400px'}}>
		{props.children}
		</div>
		)
}

export default Scroll;