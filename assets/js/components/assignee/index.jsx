import React, { Component, PropTypes } from 'react';
import IssueList from '../issue-list';

export default class Assignee extends Component {
	render() {
		const { assignee, issues } = this.props;

		const style = {
			backgroundColor: '#fafafa',
			flex: 1,
			margin: 2,
			padding: 5
		};

		return (
			<div style={ style }>
				<p>
					{ assignee } ( { issues.length } )
				</p>
				<IssueList issues={ issues } />
			</div>
		);
	}
}

Assignee.propTypes = {
	assignee: PropTypes.string.isRequired,
	issues: PropTypes.array.isRequired
}
