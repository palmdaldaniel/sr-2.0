import { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

const FavoriteProvider = (props) => {
 
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

  const values = {
    saveFavoriteChannel,
  };

  return (
    <FavoriteContext.Provider value={values}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
