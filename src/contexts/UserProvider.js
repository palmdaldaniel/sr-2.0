import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(undefined);
 
  const [isAuth, setIsAuth] = useState(false);

  const [errorMessage, setErrorMessage] = useState(undefined);
  const [status, setStatus] = useState(404);

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
      setIsAuth(true);
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

    // responds is sent from backend depending if the log in was successfull or not

    if (userToLogin.status === 404) {
      userToLogin = await userToLogin.json();

      setErrorMessage(userToLogin.message);
    } else if (userToLogin.status === 200) {
      userToLogin = await userToLogin.json();
      setStatus(200);
      setUser(userToLogin);

      setIsAuth(true);
    }
  };

  const logoutUser = async () => {
    // kanske display ett meddelande att du har loggat in.
    await fetch("/api/v1/users/logout");

    // set user back to undefiend after user is logged out
    setUser(undefined);
    setIsAuth(false);
  };

  const registerUser = async (user) => {
    let userToRegister = await fetch("/api/v1/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (userToRegister.status === 404) {
      userToRegister = await userToRegister.json();
      // set this message to a useState
      setErrorMessage(userToRegister.failed);
    } else if (userToRegister.status === 200) {
      userToRegister = await userToRegister.json();
      // if registration i complete, the user will be redirected to the login page
      setStatus(200);
    }
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
    let favoriteProgramsToGet = await fetch(
      `/api/v1/favorites/programs/${userid}`
    );
    favoriteProgramsToGet = await favoriteProgramsToGet.json();
    setFavoritePrograms(favoriteProgramsToGet);
  };

  const saveFavoriteChannel = async (channel) => {
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

  const deleteFavoriteChannel = async (channelid, userid) => {
    let channelToDelete = await fetch(`/api/v1/favorites/channels/${channelid}/${userid}`, {
      method: 'DELETE',
      headers: {
        "content-type": "application/json",
      },
    });

    channelToDelete = await channelToDelete.json()
    getFavoriteChannels(userid)
    
  
  }
  const updateUsername = async (updatedUser) => {
    let userToUpdate = await fetch('/api/v1/users/update', {
      method: 'PUT',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedUser)
    })
    userToUpdate = await userToUpdate.json()
    
    
   
  }

  const values = {
    user,
    errorMessage,
    status,
    isAuth,
    setStatus,
    setErrorMessage,
    loginUser,
    logoutUser,
    registerUser,
    saveFavoriteChannel,
    getFavoriteChannels,
    saveFavoriteProgram,
    getFavoritePrograms,
    favoriteChannels,
    favoritePrograms,
    deleteFavoriteChannel,
    updateUsername,
    whoami
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
