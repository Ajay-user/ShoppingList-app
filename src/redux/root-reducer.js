// root reducer combines all reducers
import { combineReducers } from "redux";

// redux - persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

// config for redux-persist
const persistConfig = { key: "root", storage, whitelist: ["cart"] };

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
// we export the root reducer to the store and initialize the store

// persisted version of rootReducer
export default persistReducer(persistConfig, rootReducer);
