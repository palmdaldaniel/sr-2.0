import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    whoami();
  }, []);

  const whoami = async () => {
    let loggedInUser = await fetch("/api/v1/users/whoami");
    loggedInUser = await loggedInUser.json();
    // if no user is logged in - don't update userstate
    if (!loggedInUser) return;
    setUser(loggedInUser.username);
  };

  const loginUser = async (user) => {
    let userToLogin = await fetch("/api/v1/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    userToLogin = await userToLogin.json();
    setUser(userToLogin);
  };

  const logoutUser = async () => {
    await fetch("/api/v1/users/logout");

    // set user back to undefiend after user is logged out
    setUser(undefined);
  };

  const registerUser = async (user) => {
    let userToRegister = await fetch("/api/v1/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    userToRegister = await userToRegister.json();
  };

  const values = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
