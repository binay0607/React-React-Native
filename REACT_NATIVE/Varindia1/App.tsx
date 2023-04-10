/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './src/navigation';
import configureStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <Provider store={configureStore().store}>
      <PersistGate loading={null} persistor={configureStore().persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}
