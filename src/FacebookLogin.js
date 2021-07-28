import React, { useState } from 'react';
import firebase from "firebase/app";

import "firebase/auth";
import firebaseConfig from './firebase.config';
// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }else {
    firebase.app();
  }
  

const FacebookLogin = () => {
    const [newUser, setNewUser] = useState({})


    var provider = new firebase.auth.FacebookAuthProvider();
    const handleFacebook = () =>{
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var user = result.user;
    setNewUser(user)
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorMessage, email, credential);
  });
    }
    return (
        <div>
            <button onClick={handleFacebook}>Facebook Sign In</button>
            <p>{newUser.displayName}</p>
            <img src={newUser.photoURL} alt="" />

        </div>
    );
};

export default FacebookLogin;