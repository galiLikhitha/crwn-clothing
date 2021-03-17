// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// const config = {
//     apiKey: "AIzaSyCNugBigqWHqogNzu7wT0QWczzRF42DEj8",
//     authDomain: "crwn-db-5523c.firebaseapp.com",
//     projectId: "crwn-db-5523c",
//     storageBucket: "crwn-db-5523c.appspot.com",
//     messagingSenderId: "282070720728",
//     appId: "1:282070720728:web:9786fd9a7c7c77e44437ad",
//     measurementId: "G-37CBGZWP27"
//   }
// export const createUserProfileDocument = async (userAuth, additionalData) =>{
//     if (!userAuth) return;
//     const userRef=firestore.doc(`users/${userAuth.id}`);
//     // const collectionRef = firestore.collection('user');
   
//     const snapShot = await userRef.get();
//     // const collectionSnapshot = await collectionRef.get();
//     // console.log({ collectionSnapshot});
//     if(!snapShot.exists){
//         const {displayName, email} = userAuth;
//         const createdAt = new Date();
//         try{
//             await userRef.set({
//                 displayName:'Test User',
//                 email:'random@gmail.com',
//                 createdAt,
//                 ...additionalData
//             })

//         } catch(error){
//             console.log("error message here" , error.message);

//         }    
//     }
//     return userRef;
// }
// export const addCollectionAndDocuments = (collectionKey, objectToadd) =>{
//     const collectionsRef =firebase.collection(collectionKey);
//     console.lod(collectionKey);
// }

//   firebase.initializeApp(config);
//   export const auth = firebase.auth();
//   export const firestore = firebase.firestore();

//   const provider = new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameters({prompt : 'select_account'});
//   export const signInWithGoogle = () => auth.signInWithPopup(provider);
//   export default firebase;


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
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;