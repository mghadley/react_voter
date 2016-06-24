import React from 'react';

class SelectOption extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(<option>{this.props.candidate.name}</option>)
	}
}

export default SelectOption;