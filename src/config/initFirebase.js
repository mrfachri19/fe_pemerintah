import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

export default function FirebaseMessaging() {
  const firebaseConfig = {
    apiKey: "AIzaSyBpyAxl287uln_3qTjYwG01NDSx-ZredOg",
    authDomain: "fcm-test-85991.firebaseapp.com",
    projectId: "fcm-test-85991",
    storageBucket: "fcm-test-85991.appspot.com",
    messagingSenderId: "915246906633",
    appId: "1:915246906633:web:0cb5f355e6c539ab0a67d8",
    measurementId: "G-77BS8EW9W0"
  };

  // Initialize Firebase
  useEffect(() => {
    initializeApp(firebaseConfig);
    const messaging = getMessaging();

    // vapid key is get from firebase settings

    getToken(messaging, { vapidKey: 'BFSGZOBhEVvdtu2hsdaA3h1oGtc19cE_4wNEYVoc8f2sfsKofY03SGu-f1d_FrYkFtVez781gihUdiugRe4XQvc' }).then((currentToken) => {
      if (currentToken) {
        console.log("firebase token : ", currentToken)
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // ...
    });
  })
  return (
    <></>
  )
}

