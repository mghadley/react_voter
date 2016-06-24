import React from 'react';
import BallotSelect from './BallotSelect'

class Ballot extends React.Component {
	constructor(props) {
		super(props);
		this.state = { submitted: false, candidates: this.props.candidates, selectsNum: this.props.candidates.length > 2 ? Math.ceil(this.props.candidates.length/2) + 1 : this.props.candidates.length }
	}

	createSelects() {
		let selects = []
		for(var i = 0; i < this.state.selectsNum; ++i) {
			selects.push(<BallotSelect ref={`ballotSelect${i}`} key={`${this.props.voterId}${i}`} selectId={i} candidates={this.state.candidates}/>)
		}
		return selects;
	}

	handleSubmit(e) {
		e.preventDefault();
		let votes = []
		for(var i = 0; i < this.state.selectsNum; i++) {
			let ref = this.refs[`ballotSelect${i}`]
			votes.push(ref.refs.selectField.value)
		}
		this.setState({ submitted: true })
		this.props.updateVotes(votes);
	}

	render() {
		let id = this.props.voterId
		if(this.state.submitted) {
			return (
				<div key={id} className="col s6 m3">
				  <div className="card blue-grey darken-1">
						<div className="card-content">
		          <span className="card-title">Submitted</span>
		        </div>
	        </div>
				</div>
			)
		} else {
			return (
				<div key={id} className="col s6 m3">
				  <div className="card blue-grey darken-1">
						<div className="card-content">
		          <span className="card-title">Voter #{id}</span>
		          <hr />
		          <form onSubmit={this.handleSubmit.bind(this)}>
	          		{this.createSelects()}
		          	<button type="submit" className="btn">Submit</button>
		          </form>
		        </div>
	        </div>
				</div>
			)
		}
	}
}

export default Ballot;