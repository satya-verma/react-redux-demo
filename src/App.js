import React from 'react';
// import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './stores/CakeStore';
import CakeContainer from './components/CakeContainer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      < div className="App" >
        <CakeContainer />
      </div >
    </Provider>
  );
}

export default App;
