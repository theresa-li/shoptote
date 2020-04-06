/* global gapi */

import React, { useState, useEffect } from 'react';
import config from './config';
import './App.css';


function App() {
  // const [isSignedIn, setStatus] = useState(false);

  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: config.GOOGLE_CLIENT_ID,
      }).then(() => {
        window.gapi.signin2.render('my-signIn', {
          scope: 'profile email',
          width: 250,
          height: 50,
          longtitle: false,
          theme: 'dark'
        });
      });
    })
  }, []);

  return (
    <div className="App">
      <div id="my-signIn" />
    </div>
  );
}

export default App;
