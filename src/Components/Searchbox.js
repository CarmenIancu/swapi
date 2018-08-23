import React from 'react';

const Searchbox =({searchfield, searchChange}) => {
	return (
		<div className='tc '>
		<input className='bg-light-yellow' type='search' placeholder='search planets' onChange={searchChange}/>
		</div>
	)
}

export default Searchbox;