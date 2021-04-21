import { createContext, useState, useEffect } from "react";

export const ChannelContext = createContext();

const ChannelProvider = (props) => {
  const [channels, setChannels] = useState(null);
  const [categories, setCategories] = useState(null);
  const [channel, setChannel] = useState(null)
  const [schedule, setSchedule] = useState(null)

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

  const getScheduleForChannel = async(channelId, date) => {
      console.log(channelId);
    let scheduleToGet = await fetch(`/api/v1/channels/schedule/${channelId}`);
    scheduleToGet = await scheduleToGet.json()

    setSchedule(scheduleToGet);
  }

  const values = {
    channels,
    channel,
    categories,
    schedule,
    getChannelById,
    getScheduleForChannel
  };
  return (
    <ChannelContext.Provider value={values}>
      {props.children}
    </ChannelContext.Provider>
  );
};

export default ChannelProvider;
