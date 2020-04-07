import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/index'
import './App.css';

import Container from './components/Container';

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
    
  );
}

export default App;
