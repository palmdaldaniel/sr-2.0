import styles from "./css/channel.module.css";
import { useHistory, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { RadioContext } from "../contexts/RadioProvider";
import Schedule from './Schedule'

const Channel = ({ channel }) => {
  const history = useHistory();
  const location = useLocation()
  const { getScheduleForChannel, schedule, } = useContext(RadioContext)

  const handleClick = (channelId) => {

    
    if(location.pathname === '/favorites'){
      getScheduleForChannel(channelId)
      return
    } 
      
    history.push(`/channels/${channelId}`);
  };
  return ( 
    <div
      className={styles.channel}
      onClick={() => {
        handleClick(channel.id);
      }}
    >
      <div className={styles.imgContainer}  >
        <img src={channel.image} className={styles.image}></img>
      </div>
      <h1> {channel.name} </h1>
      <p> {channel.tagline} </p>      
    </div>
    
  );
};

export default Channel;
