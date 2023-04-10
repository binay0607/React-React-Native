/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 0,
  whitelist: [],
};

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const {logger} = require('redux-logger');

  middlewares.push(logger);
 }

export default function configureStore() {
  const enhancer = compose(applyMiddleware(...middlewares));
  const persistedReducer = persistReducer(persistConfig, reducer);
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  return {store, persistor};
}
//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;
