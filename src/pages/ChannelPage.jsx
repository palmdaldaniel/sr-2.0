import { useEffect, useContext, useState } from "react";
import { RadioContext } from "../contexts/RadioProvider";
import { UserContext } from "../contexts/UserProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router-dom";

import DatePicker from "react-datepicker";
import Schedule from "../components/Schedule";
import ProgramsChannel from "../components/ProgramsChannel";

import styles from "./css/ChannelPage.module.css";

const ChannelPage = (props) => {
  const [startDate, setStartDate] = useState(null);
  const { user, saveFavoriteChannel } = useContext(UserContext);

  const {
    getChannelById,
    getScheduleForChannel,
    getAllProgramsForChannel,
    getScheduleByDate,
    programsForChannel,
    channel,
    schedule,
    setSchedule
  } = useContext(RadioContext);

  const { id } = props.match.params;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    getChannelById(id);
    getScheduleForChannel(id);
    getAllProgramsForChannel(id);

    return () => {
      setSchedule(null)
    }

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
              <img src={channel.channel.image} alt='logotype'/>
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

      <div className={styles.secondWrapper}>
        <div>
          <h2>Sändningar</h2>
          {schedule && <Schedule schedule={schedule} />}
        </div>

        <div>
          <h2>Program</h2>

          {programsForChannel && (
            <ProgramsChannel programsForChannel={programsForChannel} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
