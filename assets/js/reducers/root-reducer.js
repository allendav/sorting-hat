import { createStore, combineReducers } from 'redux';
import { REQUEST_ISSUES, RECEIVE_ISSUES } from '../actions';

// Issues reducer
// jshint -W138
function issues( state = { isFetching: false, issues: [] }, action ) {
	switch ( action.type ) {
		case REQUEST_ISSUES:
			return Object.assign( {}, state, {
				isFetching: true
			} );
		case RECEIVE_ISSUES:
			return Object.assign( {}, state, {
				isFetching: false,
				issues: action.issues
			} );
		default:
			return state;
	}
}

const rootReducer = combineReducers( {
	issues
} );

export default rootReducer;
