import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchIssues } from '../actions';
import uniq from 'lodash.uniq';
import Assignee from '../components/assignee';

class App extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch( fetchIssues() ); // we can do this thanks to middleware
	};

	extractAssignees( issues ) {
		const assignees = issues.map( issue => ( issue.assignee ? issue.assignee.login : 'unassigned' ) );
		return uniq( assignees ).sort();
	};

	render() {
		const { issues, isFetching } = this.props;
		const assignees = this.extractAssignees( issues );

		return (
			<div>
				{
					assignees.map( assignee => {
						const assigneeIssues = issues.filter( issue => {
							return issue.assignee ? ( issue.assignee.login === assignee ) : ( assignee === 'unassigned' );
						} );
						return (
							<Assignee
								key={ assignee }
								assignee={ assignee }
								issues={ assigneeIssues }
							/>
						);
					} )
				}
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
