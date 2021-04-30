import { useEffect, useContext, useState } from "react";
import { RadioContext } from "../contexts/RadioProvider";
import { UserContext } from "../contexts/UserProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router-dom";

import DatePicker from "react-datepicker";
import Schedule from "../components/Schedule";

import styles from "./css/ChannelPage.module.css";

const ChannelPage = (props) => {
  const [startDate, setStartDate] = useState(null);
 // const [isFavorite, setIsFavorite] = useState(true);

  const { user, saveFavoriteChannel } = useContext(UserContext);

  const {
    getChannelById,
    getScheduleForChannel,
    channel,
    schedule,
    getScheduleByDate,
  } = useContext(RadioContext);

  const { id } = props.match.params;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    getChannelById(id);
    //getScheduleForChannel(id);
  }, []);

  // only fires when startdate changes.
  useEffect(() => {
    if (!startDate) return;

    let formattedDate = startDate.toLocaleString().slice(0, 10);

    getScheduleByDate(id, formattedDate);
  }, [startDate]);

  const selectFavorite = () => {
    let favariteChannel = {
      channelId: id,
      channelName: channel.channel.name,
      userId: user.userid,
    };

    saveFavoriteChannel(favariteChannel);
    alert("Kanal sparad som favorit");
  };

  return (
    <div className={styles.channelwrapper}>
      {channel && (
        <div className={styles.channelInfo}>
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <img src={channel.channel.image} />
            </div>
            <div className={styles.info}>
              <h1> {channel.channel.name} </h1>
              <p> {channel.channel.tagline} </p>
            </div>
            {user && (
              <FontAwesomeIcon
                className={styles.icon}
                size="3x"
                icon={faHeart}
                onClick={selectFavorite}
              />
            )}
          </div>
        </div>
      )}
      <div className={styles.controller}>
        <button onClick={() => getScheduleForChannel(id)}>
          Visa dagens sändningar
        </button>


        <DatePicker
          className={styles.datepicker}
          placeholderText="Filtrera på datum"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      {schedule && <Schedule schedule={schedule} />}
    </div>
  );
};

export default ChannelPage;
