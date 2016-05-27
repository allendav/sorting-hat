import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/root-reducer';

const configureStore = ( initialState ) => {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(
			thunkMiddleware // allows us to do async dispatch
		)
	);

	return store;
};

export default configureStore;
