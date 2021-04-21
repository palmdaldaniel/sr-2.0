import { useContext } from "react";
import { ChannelContext } from "../contexts/ChannelProvider";

//css
import styles from "./css/channel.module.css";

import Channel from "./channel";

const Channels = () => {
  const { channels } = useContext(ChannelContext);

  return (
    <div className={styles.channelsWrapper}>
      <h1> Kanaler </h1>
      <hr />
      <div className={styles.channelsContainer}>
        {channels &&
          channels
          .slice(0, 4)
            .map((channel) => <Channel key={channel.id} channel={channel} />)}
      </div>
    </div>
  );
};

export default Channels;
