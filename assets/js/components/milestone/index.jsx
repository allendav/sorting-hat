import React, { Component, PropTypes } from 'react';
import IssueList from '../issue-list';

export default class Milestone extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const { assignees, issues, milestoneDate } = this.props;

		const rowStyle = {
			display: 'flex',
			justifyContent: 'space-around',
			padding: 2,
		};

		const cellStyle = {
			backgroundColor: '#fafafa',
			flex: 1,
			margin: 2,
			padding: 5,
		};

		const milestoneDay = milestoneDate ? milestoneDate.substring( 0, 10 ) : "No Date";
		const issueCount = issues.length;

		return (
			<div key={ milestoneDay } style={ rowStyle }>
				<div style={ cellStyle }>
					{ milestoneDay } <br/> ( { issueCount } )
				</div>
				{
					assignees.map( assignee => {
						const assigneeIssues = issues.filter( issue => {
							return issue.assignee ? ( issue.assignee.login === assignee ) : ( assignee === 'unassigned' );
						} );
						return (
							<div key={ assignee } style={ cellStyle }>
								<IssueList
									key={ assignee }
									issues={ assigneeIssues }
								/>
							</div>
						);
					} )
				}
			</div>
		);
	}
}

Milestone.propTypes = {
	assignees: PropTypes.array.isRequired,
	issues: PropTypes.array.isRequired,
	milestoneDate: PropTypes.string,
}
