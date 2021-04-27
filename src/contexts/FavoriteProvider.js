import { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

const FavoriteProvider = (props) => {
  const [favorites, setFavorites] = useState(undefined)

    const getFavoriteChannels = async (userid) => {
      let favoriteChannelsToGet = await fetch(`/api/v1/favorites/${userid}`)
      favoriteChannelsToGet = await favoriteChannelsToGet.json()
     setFavorites(favoriteChannelsToGet);
    
    }
 
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

  const saveFavoriteProgam = async (program) => {

    console.log(program);



  }

  const values = {
    saveFavoriteChannel,
    getFavoriteChannels,
    saveFavoriteProgam,
    favorites
  };

  return (
    <FavoriteContext.Provider value={values}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
