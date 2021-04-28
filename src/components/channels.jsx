import { useContext, useState } from "react";
import { RadioContext } from "../contexts/RadioProvider";

//css
import styles from "./css/channel.module.css";

import Channel from "./channel";
import Pagination from "./Pagination";

const Channels = ({channels}) => {
  
  //const { channels } = useContext(RadioContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [channelsPerPage] = useState(9);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let content = "";
  if (channels) {
    const indexOfLastChannel = currentPage * channelsPerPage;
    const indexOfFirstChannel = indexOfLastChannel - channelsPerPage;
    const currentChannels = channels.slice(
      indexOfFirstChannel,
      indexOfLastChannel
    );

    content = (
      <>
        <h1> Kanaler </h1>
        <hr />
        <Pagination
          paginate={paginate}
          totalChannels={channels.length}
          channelsPerPage={channelsPerPage}
        />
        <div className={styles.channelsContainer}>
          {currentChannels &&
            currentChannels.map((channel) => (
              <Channel key={channel.id} channel={channel} />
            ))}
        </div>
      </>
    );
  }
  return <div className={styles.channelsWrapper}>{content}</div>;
};

export default Channels;
