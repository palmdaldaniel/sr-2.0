import { useEffect, useContext } from "react";
import { ChannelContext } from "../contexts/ChannelProvider";

const ChannelPage = (props) => {
  const { getChannelById, channel } = useContext(ChannelContext);
  const { id } = props.match.params;

  useEffect(() => {
      getChannelById(id)
  }, []);
  

  return (
    <div>
      <h1> { channel.channel.name} </h1>
      <p> {channel.channel.tagline}   </p>
    </div>
  );
};

export default ChannelPage;
