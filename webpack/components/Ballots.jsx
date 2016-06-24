import React from 'react';
import Ballot from './Ballot';


class Ballots extends React.Component {
	constructor(props) {
		super(props);
		let fieldsNum = Math.ceil(this.props.candidates.length/2)
	}

	createBallots() {
		let ballots = []
		for(var i = 1; i <= this.props.voters; i++) {
			ballots.push(<Ballot voterId={i} candidates={this.props.candidates} updateVotes={this.props.updateVotes}/>)
		}
		return ballots;
	}

	render() {
		return(
			<div>
				{this.createBallots()}
			</div>
		)
	}
}

export default Ballots