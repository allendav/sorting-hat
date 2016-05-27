import React, { Component, PropTypes } from 'react';
import Issue from '../issue';

export default class IssueList extends Component {
	render() {
		const { issues } = this.props;

		return (
			<div>
				<ul>
					{
						issues.map( issue => (
							<Issue key={ issue.id } issue={ issue } />
						) )
					}
				</ul>

			</div>
		);
	}
}

IssueList.propTypes = {
	issues: PropTypes.array.isRequired
}
