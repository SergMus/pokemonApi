import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import listsReducer from "./lists/reducer";
import loaderReducer from "./loader/reducer";
import sizeReducer from "./size/reducer";
import sortsReducer from "./sorts/reducer";


export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const initialState = {};  

  const middleware = [thunk];

  const rootReducer = combineReducers({listsReducer, loaderReducer, sizeReducer, sortsReducer});

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}
