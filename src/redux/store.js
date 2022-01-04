import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

// middleware
import logger from "redux-logger";

// root reducer
import rootReducer from "./root-reducer";

const middleware = [logger];

// we create the store using root-reducer and middleware
export const store = createStore(rootReducer, applyMiddleware(...middleware));
// we give this store to the Provider which encompass the app

export const persistore = persistStore(store);
// we give the persistor to the persistGate , which wraps our app
