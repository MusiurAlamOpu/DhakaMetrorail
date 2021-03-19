import React from 'react';
import Tickets from './Tickets/Tickets.js';

import firebaseConfig from "../../firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
firebase.initializeApp(firebaseConfig);

const Home = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider);
    return (
        <div>
            <Tickets/>
        </div>
    );
};

export default Home;