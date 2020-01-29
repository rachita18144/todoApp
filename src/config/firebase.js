import * as firebase from 'firebase'

var FirebaseConfig = {
    apiKey: "AIzaSyAdLPC085WyzrO0-faF6DnzPqYtwmQpfVk",
    authDomain: "new-project-3fa5c.firebaseapp.com",
    databaseURL: "https://new-project-3fa5c.firebaseio.com",
    projectId: "new-project-3fa5c",
    storageBucket: "new-project-3fa5c.appspot.com",
    messagingSenderId: "672928636092",
    appId: "1:672928636092:web:673b3d0e03fbb3cc9904b9"
  };

firebase.initializeApp(FirebaseConfig)

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef