import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";

const middleware = [thunk];

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default store;