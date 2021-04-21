import { createContext, useState, useEffect } from "react";

export const RadioContext = createContext();

const RadioProvider = (props) => {
  const [channels, setChannels] = useState(null);
  const [categories, setCategories] = useState(null);
  const [channel, setChannel] = useState(null)
  const [schedule, setSchedule] = useState(null)
  const [programs, setPrograms] = useState(null)

  useEffect(() => {
    getAllChannels();
    getAllCategories();
    getAllPrograms()
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

  const getAllPrograms = async () => {

    let programsToGet = await fetch('/api/v1/programs');
    programsToGet = await programsToGet.json()

    setPrograms(programsToGet);

  }

  const values = {
    channels,
    channel,
    categories,
    schedule,
    programs,
    getChannelById,
    getScheduleForChannel
  };
  return (
    <RadioContext.Provider value={values}>
      {props.children}
    </RadioContext.Provider>
  );
};

export default RadioProvider;
