import { createStore, applyMiddleware } from "redux";

// middleware
import logger from "redux-logger";

// root reducer
import rootReducer from "./root-reducer";

const middleware = [logger];

// we create the store using root-reducer and middleware
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
// we give this store to the Provider which encompass the app
