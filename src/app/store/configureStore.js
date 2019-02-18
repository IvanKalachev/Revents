import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';

export const configureStore = (preloadedState) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const middlewares = [];
    const middlewareEnhancer = composeEnhancers(applyMiddleware(...middlewares));

    const storeEnhancers = [middlewareEnhancer];

    const composedEnhancer = compose(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );

    return store;
}