import React, { Component, PropTypes } from 'react';
import Issue from '../issue';

export default class IssueList extends Component {
	constructor( props ) {
		super( props );
		this.issueHasLabel = this.issueHasLabel.bind( this );
		this.scoreIssue = this.scoreIssue.bind( this );
		this.sortByPriority = this.sortByPriority.bind( this );
	}

	issueHasLabel( issue, name ) {
		for ( let label of issue.labels ) {
			if ( name === label.name ) {
				return true;
			}
		}

		return false;
	}

	scoreIssue( issue ) {
		if ( this.issueHasLabel( issue, '[Pri] CRITICAL' ) ) {
			return 4;
		}

		if ( this.issueHasLabel( issue, '[Pri] High' ) ) {
			return 3;
		}

		if ( this.issueHasLabel( issue, '[Pri] Normal' ) ) {
			return 2;
		}

		if ( this.issueHasLabel( issue, '[Pri] Low' ) ) {
			return 1;
		}

		return 5;
	}

	sortByPriority( a, b ) {
		const aScore = this.scoreIssue( a );
		const bScore = this.scoreIssue( b );

		if ( aScore < bScore ) {
			return 1;
		}

		if ( aScore > bScore ) {
			return -1;
		}

		return 0;
	}

	render() {
		const issues = this.props.issues.sort( this.sortByPriority );

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
