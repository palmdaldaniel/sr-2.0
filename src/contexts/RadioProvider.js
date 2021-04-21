import { createContext, useState, useEffect } from "react";

export const RadioContext = createContext();

const RadioProvider = (props) => {
  const [channels, setChannels] = useState(null);
  const [categories, setCategories] = useState(null);
  const [channel, setChannel] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const [programs, setPrograms] = useState(null);
  const [filteredPrograms, setFilteredPrograms] = useState(null);

  useEffect(() => {
    getAllChannels();
    getAllCategories();
    getAllPrograms();
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
    setChannel(channelToGet);
  };

  const getScheduleForChannel = async (channelId, date) => {
    console.log(channelId);
    let scheduleToGet = await fetch(`/api/v1/channels/schedule/${channelId}`);
    scheduleToGet = await scheduleToGet.json();

    setSchedule(scheduleToGet);
  };

  const getAllPrograms = async () => {
    let programsToGet = await fetch("/api/v1/programs");
    programsToGet = await programsToGet.json();

    //setPrograms(programsToGet);
    // load programs
    setFilteredPrograms(programsToGet)
  };

  const filterByCategory= async (id) => {
    let filteredPrograms = await fetch(`/api/v1/categories/${id}`)
    filteredPrograms = await filteredPrograms.json();
    setFilteredPrograms(filteredPrograms); 
  };

  const values = {
    channels,
    channel,
    categories,
    schedule,
    programs,
    filteredPrograms,
    getChannelById,
    getScheduleForChannel,
    filterByCategory,
    getAllPrograms
  };
  return (
    <RadioContext.Provider value={values}>
      {props.children}
    </RadioContext.Provider>
  );
};

export default RadioProvider;
