import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import config from '../config';
import { actions } from '../redux/ducks';

function Container() {
  const isSignedIn = useSelector(state => state.isSignedIn);
  const dispatch = useDispatch();

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
          theme: 'dark',
          onsuccess: () => dispatch(actions.changeStatus(true))
        });
      });
    })
  }, [dispatch]);

  const renderPage = () => {
    console.log(isSignedIn);
    if (isSignedIn) {
      return (<div>You are signed in! (:</div>);
    } else {
      return <div id="my-signIn" />;
    }
  }

  return (
    <div id="container">
      {renderPage()}
    </div>
  );
}

export default Container;
