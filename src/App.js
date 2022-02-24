import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Notfound from './components/Notfound';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </Provider>
  );
}
export default App;