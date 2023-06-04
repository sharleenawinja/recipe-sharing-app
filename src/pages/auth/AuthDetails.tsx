import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase.config";

const AuthDetails = () => {
  const [authenticatedUser, setAuthentucatedUser] = useState({});

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("successfully signed out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthentucatedUser(user);
      } else {
        setAuthentucatedUser({});
      }
    });

    listen();
  }, []);
  return (
    <div>
      {authenticatedUser ? (
        // make this authenticateduser.email or authenticateduser.username
        <>
          {" "}
          <p>{`Signed in as ${authenticatedUser}`}</p>
          <button onClick={handleLogout}>Sign out</button>
        </>
      ) : (
        <p>signed out</p>
      )}
    </div>
  );
};

export default AuthDetails;
