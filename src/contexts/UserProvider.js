import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(undefined);
  const [favoriteChannels, setfavoriteChannels] = useState(undefined);
  const [favoritePrograms, setFavoritePrograms] = useState(undefined);

  useEffect(() => {
    whoami();
  }, []);

  const whoami = async () => {
    let loggedInUser = await fetch("/api/v1/users/whoami");
    loggedInUser = await loggedInUser.json();
    // if user is logged in, update userState from who am i function
    if (loggedInUser) {
      setUser(loggedInUser);
    }
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
    console.log(userToLogin);

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

  //  functionality for users favorite pograms and channels

  const getFavoriteChannels = async (userid) => {
    let favoriteChannelsToGet = await fetch(
      `/api/v1/favorites/channels/${userid}`
    );
    favoriteChannelsToGet = await favoriteChannelsToGet.json();
    setfavoriteChannels(favoriteChannelsToGet);
  };

  const getFavoritePrograms = async (userid) => {
    console.log(userid);
    let favoriteProgramsToGet = await fetch(
      `/api/v1/favorites/programs/${userid}`
    );
    favoriteProgramsToGet = await favoriteProgramsToGet.json();
    setFavoritePrograms(favoriteProgramsToGet);
  };

  const saveFavoriteChannel = async (channel) => {
    console.log(channel);

    let channelToSave = await fetch("/api/v1/favorites/channels", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(channel),
    });
    channelToSave = await channelToSave.json();
  };

  const saveFavoriteProgram = async (program) => {
    let programToSave = await fetch("/api/v1/favorites/programs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(program),
    });
    programToSave = await programToSave.json();
  };

  const values = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    saveFavoriteChannel,
    getFavoriteChannels,
    saveFavoriteProgram,
    getFavoritePrograms,
    favoriteChannels,
    favoritePrograms,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
