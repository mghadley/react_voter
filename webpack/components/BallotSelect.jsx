import React from 'react';
import Option from './Option';

class BallotSelect extends React.Component {
	constructor(props) {
		super(props);
	}

	createOptions() {
		let candidates = this.props.candidates
		let optionsArr = []
		for(var i = 0; i < candidates.length; i++) {
			optionsArr.push(<Option ref={`option${i}`} candidate={candidates[i]} />)
		}
		return optionsArr;
	}

	render() {
		return(
			<div ref="selects" key={this.props.selectId} className="input-field col s12">
		    <select ref={`selectField`} className="browser-default">
		      <option defaultValue="" disabled selected>Choose Preference #{this.props.selectId + 1}</option>
		      {this.createOptions()}
		    </select>
		  </div>
		)
	}
}

export default BallotSelect