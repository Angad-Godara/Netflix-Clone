import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDyxjV1_MeGjdLGVDnLg33Xb5sReIPynTM",
    authDomain: "netflix-clone-15644.firebaseapp.com",
    projectId: "netflix-clone-15644",
    storageBucket: "netflix-clone-15644.appspot.com",
    messagingSenderId: "136895104885",
    appId: "1:136895104885:web:aa161074a7fafe1551f53c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();

export { auth, provider }
export default db;