import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyCNugBigqWHqogNzu7wT0QWczzRF42DEj8",
    authDomain: "crwn-db-5523c.firebaseapp.com",
    projectId: "crwn-db-5523c",
    storageBucket: "crwn-db-5523c.appspot.com",
    messagingSenderId: "282070720728",
    appId: "1:282070720728:web:9786fd9a7c7c77e44437ad",
    measurementId: "G-37CBGZWP27"
  }
export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch(error){
            console.log("error message here" , error.message);

        }    
    }
    return userRef;
}

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;