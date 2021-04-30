import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserProvider";

import { RadioContext } from "../contexts/RadioProvider";
import Channels from "../components/channels";
import ProgramsList from "../components/ProgramsList";

import FavoriteChannelBroadCast from "../components/FavoriteChannelBroadcast";

import styles from "./css/FavoritePage.module.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Favorites = () => {
  const [filteredFavoriteChannels, setFilteredFavoriteChannels] = useState(null);
  const [filteredFavoritePrograms, setFilteredFavoritePrograms] = useState(null );

  const {
    user,
    getFavoriteChannels,
    favoritePrograms,
    favoriteChannels,
    getFavoritePrograms,
  } = useContext(UserContext);

  const { channels, programs, schedule, setSchedule } = useContext(
    RadioContext
  );

  useEffect(() => {
    // when component  unmounts  - clear the schedule that is active
    return () => {
      setSchedule(null);
    };
  }, []);

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

    if (programs) {
      let favoriteFilteredPrograms = programs.filter((program) =>
        favoriteProgramsId.includes(program.id)
      );

      setFilteredFavoritePrograms(favoriteFilteredPrograms);
    }
  };

  const editUser = () => {
    console.log('click');
  } 

  return (
    <div>
      {user ? (
        <div className={styles.favoritepage}>
          <div className={styles.favoritePageInfo}>
            <h1> Välkommen {user.username} </h1>
            <h3> Här kan du se vilka kanaler/program som är dina favoriter</h3>
            <FontAwesomeIcon icon={faEllipsisV} onClick={editUser}/>
          </div>

          <div className={styles.channleInfoWrapper}>
            <div className={styles.channels}>
              <Channels channels={filteredFavoriteChannels} />
            </div>
            {schedule && (
              <div className={styles.broadcast}>
                <FavoriteChannelBroadCast schedule={schedule} />
              </div>
            )}
          </div>

          <div className={styles.programlistWrapper}>
            <ProgramsList programs={filteredFavoritePrograms} />
          </div>
        </div>
      ) : (
        <h1> Pls log in to see your favorites </h1>
      )}
    </div>
  );
};

export default Favorites;
