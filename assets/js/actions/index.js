export const REQUEST_ISSUES = 'REQUEST_ISSUES';
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES';

export const requestIssues = () => {
	return {
		type: REQUEST_ISSUES
	};
};

export const receiveIssues = ( json ) => {
	return {
		type: RECEIVE_ISSUES,
		issues: json
	};
};

export function fetchIssues() {
	return dispatch => {
		dispatch( requestIssues() );
		return fetch( '/api/issues' )
			.then( response => response.json() )
			.then( json => dispatch( receiveIssues( json ) ) );
		};
}
