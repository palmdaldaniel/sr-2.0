import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserProvider";

import { RadioContext } from "../contexts/RadioProvider";
import Channels from "../components/channels";
import ProgramsList from "../components/ProgramsList";
import Schedule from "../components/Schedule";
import FavoriteChannelBroadCast from "../components/FavoriteChannelBroadcast";

const Favorites = () => {
  const [filteredFavoriteChannels, setFilteredFavoriteChannels] = useState(
    null
  );
  const [filteredFavoritePrograms, setFilteredFavoritePrograms] = useState(
    null
  );

  const [newSchedule, setNewSchedule] = useState(null)

  const {
    user,
    getFavoriteChannels,
    favoritePrograms,
    favoriteChannels,
    getFavoritePrograms,
  } = useContext(UserContext);

  const { channels, programs, schedule } = useContext(RadioContext);

 


  useEffect(() => {
    if (user) {
      getFavoriteChannels(user.userid);
      getFavoritePrograms(user.userid);
    }
  }, [user]);

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

      setFilteredFavoriteChannels(filteredChannels);
    }
  };

  const filterPrograms = () => {
    let favoriteProgramsId = favoritePrograms.map(
      (program) => program.programid
    );

      if(programs) {
        let favoriteFilteredPrograms = programs.filter((program) =>
          favoriteProgramsId.includes(program.id)
        );

        console.log("inside filterPrograms", favoriteFilteredPrograms);
        setFilteredFavoritePrograms(favoriteFilteredPrograms);
      }

  };

  return (
    <div>
      {user ? (
        <div>
          <h1> Welcome {user.username} </h1>
          FavoritKanaler
          <Channels channels={filteredFavoriteChannels} />

          {/* jag vill bara att den här ska ladda när jag trycker på en kanal */}

          <FavoriteChannelBroadCast  schedule={schedule}  />
         
        

          Favoritprogram
          <ProgramsList programs={filteredFavoritePrograms} />
         
                </div>
      ) : (
        <h1> Pls log in to see your favorites </h1>
      )}
    </div>
  );
};

export default Favorites;
