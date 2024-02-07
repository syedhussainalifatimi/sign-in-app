import React, { useState, useEffect, useRef } from "react";
import Navigation from "./navigationbar/navigation";
import SignUp from "./signup/signup";
import SignIn from "./signin/signin";
import Homepage from "./homepage/homepage"
import { Routes, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase';

const App = () => {
  const [user, setUser] = useState({ currentUser: null });
  const unsubscribeFromAuth = useRef(null); // Define useRef here

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        setUser({ currentUser: null });
      }
    });

    return () => {
      unsubscribeFromAuth.current(); // Call the current function of the ref
    };
  }, []);

  return (
    <>
      <Navigation user={user.currentUser} />
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />
        </Routes>
      </div>
    </>
  )
}
export default App;
