import React, { Component, PropTypes } from 'react';

export default class Issue extends Component {
	render() {
		const { issue } = this.props;

		console.log( issue );

		return (
			<li>
				{ issue.number } - { issue.title }
			</li>
		);
	}
}

Issue.propTypes = {
	issue: PropTypes.object.isRequired
}
