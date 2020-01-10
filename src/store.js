import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';
// Custom reducers
// @todo

const fbConfig = {
    apiKey: "AIzaSyAeO_yJXhbm2rYy_AVOTjbGfflMrqmCqqY",
    authDomain: "reactclientpanel-f3b24.firebaseapp.com",
    databaseURL: "https://reactclientpanel-f3b24.firebaseio.com",
    projectId: "reactclientpanel-f3b24",
    storageBucket: "reactclientpanel-f3b24.appspot.com",
    messagingSenderId: "384460802624",
    appId: "1:384460802624:web:b12cda4d8a16e3b21ceda5",
    measurementId: "G-6016BJR3PS"
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore();

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

// Create initial state
const initialState = {};

// Create store
const store = createStore(
    rootReducer,
    initialState,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

// React-Reduxt-Firebase Props
export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

export default store;