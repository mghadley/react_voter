import React from 'react';

const CandidateList = ({ candidates }) => {
	let items = candidates.map( candidate => {
		return(<li key={candidate.id}>#{candidate.id}: {candidate.name}</li>)
	})  
	return (
		<ul>
			{items}
		</ul>
	)
}

export default CandidateList