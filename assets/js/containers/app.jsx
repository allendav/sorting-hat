import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchIssues } from '../actions';
import filter from 'lodash.filter';
import sortBy from 'lodash.sortby';
import uniq from 'lodash.uniq';
import Assignee from '../components/assignee';
import Milestone from '../components/milestone';

class App extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch( fetchIssues() ); // we can do this thanks to middleware
	};

	extractAssignees( issues ) {
		const assignees = issues.map( issue => ( issue.assignee ? issue.assignee.login : 'unassigned' ) );
		return uniq( assignees ).sort();
	};

	extractMilestoneDates( issues ) {
		const issuesWithMilestones = issues.filter( issue => ( null !== issue.milestone ) );
		const allMilestoneDates = issuesWithMilestones.map( issue => issue.milestone.due_on );

		return uniq( allMilestoneDates ).sort();
	}

	renderHeader( assignees, issues ) {
		const headerStyle = {
			backgroundColor: '#fff',
			display: 'flex',
			justifyContent: 'space-around',
			padding: 2,
			width: '100%',
		};

		const rowStyle = {
			borderColor: '#ff0000',
			borderSize: 1,
			borderStyle: 'solid',
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

		return (
			<div style={ headerStyle }>
				<div style={ cellStyle }> Sorting Hat </div>
				{
					assignees.map( assignee => {
						const assigneeIssues = issues.filter( issue => {
							return issue.assignee ? ( issue.assignee.login === assignee ) : ( assignee === 'unassigned' );
						} );
						return (
							<div key={ assignee } style={ cellStyle } >
								<Assignee
									assignee={ assignee }
									issueCount={ assigneeIssues.length }
								/>
							</div>
						);
					} )
				}
			</div>
		);
	}

	renderMilestoneRows( assignees, issues ) {
		const milestoneDates = this.extractMilestoneDates( issues );

		const contentStyle = {
			flex: 1,
			height: 600, // this isn't right - TODO fix correctly
			overflowY: 'auto',
			width: '100%',
		};

		const issuesWithNoMilestone = issues.filter( issue => {
			return issue.milestone ? false : true;
		} );

		return (
			<div style={ contentStyle } >
				{
					milestoneDates.map( milestoneDate => {
						const issuesForMilestone = issues.filter( issue => {
							return issue.milestone ? ( issue.milestone.due_on === milestoneDate ) : false;
						} );

						return (
							<Milestone
								assignees={ assignees }
								issues={ issuesForMilestone }
								key={ milestoneDate }
								milestoneDate={ milestoneDate }
							/>
						);
					} )
				}

				<Milestone
					assignees={ assignees }
					issues={ issuesWithNoMilestone }
					milestoneDate={ 'Unassigned' }
				/>
			</div>
		);
	}

	render() {
		const { issues, isFetching } = this.props;
		const assignees = this.extractAssignees( issues );

		const appStyle = {
			display: 'flex',
			flexDirection: 'column',
		};

		return (
			<div style={ appStyle }>
				{ this.renderHeader( assignees, issues ) }
				{ this.renderMilestoneRows( assignees, issues ) }
			</div>
		);
	};
};

App.propTypes = {
	issues: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps( state ) {
	const { isFetching, issues } = state.issues || { isFetching: true, issues: [] };

	return {
		isFetching: isFetching,
		issues: issues
	};
};

export default connect( mapStateToProps )( App );
