import React, { Component, PropTypes } from 'react';

export default class Issue extends Component {
	render() {
		const { issue } = this.props;

		console.log( issue );

		const style = {
			backgroundColor: '#fff',
			boxShadow: '2px 2px 2px #ddd',
			fontSize: 11,
			marginBottom: 5,
			padding: 5
		};

		return (
			<div style={ style }>
				<a href={ issue.html_url } target='_blank'>
					{ issue.number } - { issue.title }
				</a>
			</div>
		);
	}
}

Issue.propTypes = {
	issue: PropTypes.object.isRequired
}
