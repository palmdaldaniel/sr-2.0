import { useContext, useState } from "react";


//css
import styles from "./css/channel.module.css";

import Channel from "./channel";
import Pagination from "./Pagination";

const Channels = ({channels}) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [channelsPerPage] = useState(8);

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
        <div className={styles.channelsContainer}>
      
          {currentChannels &&
            currentChannels.map((channel) => (
              <Channel key={channel.id} channel={channel} />
            ))}
        </div>
        <Pagination
          paginate={paginate}
          totalChannels={channels.length}
          channelsPerPage={channelsPerPage}
        />
      </>
    );
  }
  return <div className={styles.channelsWrapper}>{content}</div>;
};

export default Channels;
