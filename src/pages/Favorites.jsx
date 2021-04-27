import { useContext, useEffect } from "react";

import { UserContext } from "../contexts/UserProvider";
import { FavoriteContext } from "../contexts/FavoriteProvider";
import { RadioContext } from "../contexts/RadioProvider";

const Favorites = () => {
  const { user } = useContext(UserContext);
  const { getFavoriteChannels, favorites } = useContext(FavoriteContext);
  const { channels } = useContext(RadioContext);

  useEffect(() => {
    if (!user) return;
    getFavoriteChannels(user.id);
   
  }, []);

  useEffect(() => {
    if(favorites) {
      filterChannels();
    }
  }, [favorites])

  const filterChannels = () => {
    if (!channels) return;
    if (!favorites) return;
    console.log("kanaler", channels);
    console.log("favoriter", favorites);
/* 
   let favoritesId = favorites.map(favorite => favorite.channelid)
   let filteredChannels = channels.filter(channel => favoritesId.includes(channel.id))
    console.log('favorites: ', filteredChannels); */

  
  };

  return (
    <div>
      {user ? (
        <div>
          <h1> Welcome {user.username} </h1>
        </div>
      ) : (
        <h1> Pls log in to see your favorites </h1>
      )}
    </div>
  );
};

export default Favorites;
