
import { NativeBaseProvider } from "native-base";

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import authReducer from './store/reducers/auth.reducer'

import AppNavigator from './navigator/AppNavigator';

import {LinearGradient} from 'expo-linear-gradient'

const nativeBaseConfig = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};


const rootReducer = combineReducers({
  auth:authReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
);


export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider config={nativeBaseConfig}>
        <AppNavigator />
      </NativeBaseProvider>
    </Provider>
  );
}

