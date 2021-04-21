import { createContext, useState, useEffect } from "react";

export const ChannelContext = createContext();

const ChannelProvider = (props) => {
  const [channels, setChannels] = useState(null);
  const [categories, setCategories] = useState(null);
  const [channel, setChannel] = useState(null)

  useEffect(() => {
    getAllChannels();
    getAllCategories();
  }, []);

  const getAllChannels = async () => {
    let getChannels = await fetch("/api/v1/channels");
    getChannels = await getChannels.json();
    setChannels(getChannels.channels);
  };

  const getAllCategories = async () => {
    let getCategories = await fetch("/api/v1/categories");
    getCategories = await getCategories.json();
    setCategories(getCategories.programcategories);
  };

  const getChannelById = async (channelId) => {
    let channelToGet = await fetch(`/api/v1/channels/${channelId}`);
    channelToGet = await channelToGet.json();
    setChannel(channelToGet)
  };

  const values = {
    channels,
    channel,
    categories,
    getChannelById,
  };
  return (
    <ChannelContext.Provider value={values}>
      {props.children}
    </ChannelContext.Provider>
  );
};

export default ChannelProvider;
