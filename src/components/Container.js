import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import config from '../config';
import { actions } from '../redux/ducks';

function Container() {
  const isSignedIn = useSelector(state => state.authInstance.isSignedIn);
  const content = useSelector(state => state.content);
  const dispatch = useDispatch();

  const processToken = () => {
    const authInstance = window.gapi.auth2.getAuthInstance();
    dispatch(actions.authInstance.changeStatus(authInstance.isSignedIn.je));
    dispatch(actions.authInstance.changeUserID(authInstance.currentUser.je.Ca));
    dispatch(actions.authInstance.changeAccessToken(authInstance.currentUser.je.tc));
  }

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id: config.GOOGLE_CLIENT_ID,
        scope: 'profile'
      }).then(() => {
        window.gapi.signin2.render('my-signIn', {
          scope: 'profile',
          width: 250,
          height: 50,
          longtitle: false,
          theme: 'dark',
          onsuccess: () => {
            processToken();
            const fetchContent = async() => {
              fetch('http://localhost:3001/api/getContent')
                .then(res => res.json())
                .then(body => dispatch(actions.api.changeContent(body.content)));     
            }
            fetchContent();
          }
        });
      });
    });

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderPage = () => {
    if (isSignedIn) {      
      return (<div>You are signed in! (: { content }</div>);
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
