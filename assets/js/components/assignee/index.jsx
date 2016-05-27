import React, { Component, PropTypes } from 'react';
import IssueList from '../issue-list';

export default class Assignee extends Component {
	render() {
		const { assignee, issues } = this.props;

		return (
			<div>
				<p>
					{ assignee }
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
