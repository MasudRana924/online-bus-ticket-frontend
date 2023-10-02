import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { loginReducer } from "./user/Login";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import signupSlice from "./user/signupSlice";
import  filterBusesSlice  from "./buses/filterbusesSlice";
import busesSlice from "./buses/busesSlice";
import bookingssSlice from './order/orderSlice'
import  busSlice  from "./buses/busDetailsSlice";



const persistConfig = {
  key: "authentication",
  storage
};
const middlewares = [];
if (process.env.NODE_ENV !== "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
const persistedReducer = persistReducer(persistConfig, loginReducer);
const rootReducer = combineReducers({
  signup: signupSlice,
  userDetails: persistedReducer,
  buses:busesSlice,
  filterBuses:filterBusesSlice,
  bookings:bookingssSlice,
  bus:busSlice,


});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger),
});

export default store;

export const persistor = persistStore(store);