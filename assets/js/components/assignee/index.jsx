import React, { Component, PropTypes } from 'react';

export default class Assignee extends Component {
	render() {
		const { assignee, issueCount } = this.props;

		const style = {
			backgroundColor: '#fafafa',
			flex: 1,
			margin: 2,
			padding: 5
		};

		return (
			<div className='assignee' style={ style }>
				{ assignee } <br/>( { issueCount } )
			</div>
		);
	}
}

Assignee.propTypes = {
	assignee: PropTypes.string.isRequired,
	issueCount: PropTypes.number.isRequired
}
