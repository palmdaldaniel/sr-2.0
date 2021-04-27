import { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

const FavoriteProvider = (props) => {
  const [favoriteChannels, setfavoriteChannels] = useState(undefined);
  const [favoritePrograms, setFavoritePrograms] = useState(undefined)


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
    saveFavoriteChannel,
    getFavoriteChannels,
    saveFavoriteProgram,
    getFavoritePrograms,
    favoriteChannels,
    favoritePrograms
  };

  return (
    <FavoriteContext.Provider value={values}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
