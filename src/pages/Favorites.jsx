import { useContext, useEffect } from "react";

import { UserContext } from "../contexts/UserProvider";
import { FavoriteContext } from "../contexts/FavoriteProvider";
import { RadioContext } from "../contexts/RadioProvider";

const Favorites = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  const {
    getFavoriteChannels,
    favoritePrograms,
    favoriteChannels,
    getFavoritePrograms,
  } = useContext(FavoriteContext);
  const { channels, filteredPrograms } = useContext(RadioContext);

  useEffect(() => {
    console.log(user);
    if (!user) return;
    getFavoriteChannels(user.userid);
    getFavoritePrograms(user.userid);
  }, []);

  useEffect(() => {
    if (favoriteChannels && favoritePrograms) {
      filterChannels();
      filterPrograms();
    }
  }, [favoriteChannels, favoritePrograms]);

  const filterChannels = () => {
    if (channels) {
      let favoriteChannelsId = favoriteChannels.map((fc) => fc.channelid);
      let filteredChannels = channels.filter((channel) =>
        favoriteChannelsId.includes(channel.id)
      );
      console.log("favorites: ", filteredChannels);
    }
  };

  const filterPrograms = () => {
    if (filteredPrograms) {
      const { programs } = filteredPrograms;

      let favoriteProgramsId = favoritePrograms.map(
        (program) => program.programid
      );

      let favoriteFilteredPrograms = programs.filter((program) =>
        favoriteProgramsId.includes(program.id)
      );
      console.log("finished: ", favoriteFilteredPrograms);
    }
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
