import React from 'react';
import CandidateForm from '../components/CandidateForm'
import CandidateList from '../components/CandidateList'
import Ballots from '../components/Ballots'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { candidates: [], nextID: 1, voting: false, voters: 0, finalVotes: [] }
	}

	componentDidMount() {
    $('select').material_select();
	}

	addCandidate(name) {
		let candidate = { name, id: this.state.nextID }
		this.setState({
			candidates: [
				...this.state.candidates,
				{...candidate}
			],
			nextID: ++this.state.nextID 
		})
	}

	toggleVoting() {
		this.setState({ voting: !this.state.voting })
	}

	createVoters(e) {
		e.preventDefault();
		this.setState({ voters: this.refs.voterCount.value});
	}

	updateVotes(votes) {
		this.setState({
			finalVotes: [
				votes,
				...this.state.finalVotes
			]
		})
	}

	countVotes() {
		$.ajax({
			url: '/api/irv',
			type: 'POST',
			dataType: 'JSON',
			data: {votes: this.state.finalVotes}
		}).done( data => {
			debugger
		}).fail( data => {
			alert("This part doesn't quite work yet :/")
		})
	}


	render() {
		if(parseInt(this.state.voters) !== 0 && this.state.finalVotes.length === parseInt(this.state.voters)){
			this.countVotes()
		}
		if(this.state.voting){
			if(this.state.voters < 1) {
				return(
					<div className="container row center">
						<form ref='voterCountForm' onSubmit={this.createVoters.bind(this)}>
							<input ref="voterCount" type="number" placeholder="How many people will be voting?" />
						</form>
					</div>
				)
			} else {
				return(
					<div className="center container row">
						<CandidateList candidates={this.state.candidates} />
						<hr />
						<Ballots candidates={this.state.candidates} voters={this.state.voters} updateVotes={this.updateVotes.bind(this)}/>
					</div>
				)
			}
		} else {
			return(
				<div>
					<div className="row container">
						<CandidateForm addCandidate={this.addCandidate.bind(this)} />
						<CandidateList candidates={this.state.candidates} />
					</div>
					<div className="row center">
						<button className="btn" onClick={this.toggleVoting.bind(this)}>Done Adding Candidates</button>
					</div>
				</div>
			)
		}
	}
}

export default App;

