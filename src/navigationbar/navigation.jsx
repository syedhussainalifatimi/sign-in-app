import React from "react";
import { Link } from "react-router-dom";
import Styles from './navigation.module.css';
import { auth, signInWithGoogle } from '../firebase/firebase';

const Navigation = ({ user }) => {
  return (

    <div className={Styles.navbar}>
      <Link to={'/'} className={Styles.logoHeading}>
        <h1>Company Name</h1>
      </Link>
      <div className={Styles.navitems}>
        {
          user ?
            <div onClick={() => auth.signOut()} className={Styles.signout}>
              SignOut
            </div>
            :
            <div className={Styles.navoptions}>

              <Link to={'/SignIn'} className={Styles.navoption}>
                SignIn
              </Link>

              <div onClick={signInWithGoogle} className={Styles.navoption}>
                SignIn with Google
              </div>

              <Link to={'/SignUp'} className={Styles.navoption}>
                Sign Up
              </Link>

            </div>
        }

      </div>
    </div>

  )
}
export default Navigation;