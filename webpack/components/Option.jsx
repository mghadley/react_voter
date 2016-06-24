import React from 'react';

class Option extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let candidate = this.props.candidate
		return(<option ref={`optionField${candidate.id}`} value={candidate.id}>{candidate.name}</option>)
	}
}

export default Option;