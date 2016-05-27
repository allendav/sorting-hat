import React, { Component, PropTypes } from 'react';
import Issue from '../issue';

export default class IssueList extends Component {
	render() {
		const { issues } = this.props;

		return (
			<div>
				{
					issues.map( issue => (
						<Issue key={ issue.id } issue={ issue } />
					) )
				}
			</div>
		);
	}
}

IssueList.propTypes = {
	issues: PropTypes.array.isRequired
}
