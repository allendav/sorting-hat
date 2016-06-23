import React, { Component, PropTypes } from 'react';

export default class Issue extends Component {

	issueHasLabel( issue, name ) {
		for ( let label of issue.labels ) {
			if ( name === label.name ) {
				return true;
			}
		}

		return false;
	}

	getPriorityColor( issue ) {
		if ( this.issueHasLabel( issue, '[Pri] CRITICAL' ) ) {
			return "#ff0000";
		}

		if ( this.issueHasLabel( issue, '[Pri] High' ) ) {
			return "#ff6600";
		}

		if ( this.issueHasLabel( issue, '[Pri] Normal' ) ) {
			return "#00ff00";
		}

		if ( this.issueHasLabel( issue, '[Pri] Low' ) ) {
			return "#ffff00";
		}

		return "#000";
	}

	render() {
		const { issue } = this.props;

		const style = {
			backgroundColor: '#fff',
			borderColor: this.getPriorityColor( issue ),
			borderSize: 1,
			borderStyle: 'solid',
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
