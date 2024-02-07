import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDYekIPK5Gvq88He6frupPa7M9fpLGoH14",
  authDomain: "ecommerce-792cd.firebaseapp.com",
  projectId: "ecommerce-792cd",
  storageBucket: "ecommerce-792cd.appspot.com",
  messagingSenderId: "673896990510",
  appId: "1:673896990510:web:07d3408beec00843671cbf",
  measurementId: "G-C08K8KN7L3"
};



export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
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
        console.log('error creating user', error.message);
      } 
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


