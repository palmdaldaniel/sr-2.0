import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState(undefined)
    console.log(user);
    
    useEffect(() => {
      whoami()
  }, []);

  const whoami = async () => {
    let loggedInUser = await fetch('/api/v1/users/whoami');
    loggedInUser  = await loggedInUser.json()
    console.log(loggedInUser);
    setUser(loggedInUser.username)
  };

  const loginUser = async (user) => {
    let userToLogin =  await fetch("/api/v1/users/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      userToLogin = await userToLogin.json()
      console.log(userToLogin);
      setUser(userToLogin)
  };

  const values = {
    loginUser,
  };

  return (
    <UserContext.Provider value={values}>
        {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
