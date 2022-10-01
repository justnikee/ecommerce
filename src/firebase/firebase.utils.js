import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAHsMUk0j_zfRrPve9QkPfMukJId-V5Ulc",
    authDomain: "ecommerce-practice-project.firebaseapp.com",
    projectId: "ecommerce-practice-project",
    storageBucket: "ecommerce-practice-project.appspot.com",
    messagingSenderId: "738089030542",
    appId: "1:738089030542:web:7bdcd86ba2f2b8419b4adf",
    measurementId: "G-DVTVX5L83M"
};



export const createUserProfileDocument = async (userAuth, additionalData) => {
if(!userAuth) return;
const userRef = firestore.doc(`users/${userAuth.uid}`)
const snapShot = await userRef.get();

if(!snapShot.exists){

    const{ displayName, email } = userAuth;
    const createdAt = new Date();

    try {
       await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
       }
       )
    }catch(error){
         console.log('error creating user', error.message);
    }
}

return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;