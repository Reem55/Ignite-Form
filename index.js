import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import{ createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App/Containers/App'

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () = (
  <Provider store={store}>
  </Provider>
);

AppRegistry.registerComponent('CornerApp', () => App)
