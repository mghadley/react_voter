import React from 'react';

class CandidateForm extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		this.props.addCandidate(this.refs.candidate.value)
		this.refs.addForm.reset();
	}

	render() {
		return(
			<div>
				<form ref='addForm' onSubmit={ (e) => this.handleSubmit(e)}>
					<input ref='candidate' type='text' placeholder='Add candidate for the vote' />
				</form>
			</div>
		)
	}
}

export default CandidateForm