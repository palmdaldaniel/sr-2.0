import { createContext, useState, useEffect } from "react";

export const RadioContext = createContext();

const RadioProvider = (props) => {
  const [channels, setChannels] = useState(null);
  const [categories, setCategories] = useState(null);
  const [channel, setChannel] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const [programs, setPrograms] = useState(null);
  const [programsToFavorite, setProgramsToFavorite] = useState(null)
  const [programsForChannel, setProgramsForChannel] = useState(null)
  

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
    let scheduleToGet = await fetch(`/api/v1/channels/schedule/${channelId}`);
    scheduleToGet = await scheduleToGet.json();
    setSchedule(scheduleToGet);
  };

  const getAllPrograms = async () => {
    let programsToGet = await fetch("/api/v1/programs");
    programsToGet = await programsToGet.json();

    const { programs } = programsToGet;
    setPrograms(programs);
    setProgramsToFavorite(programs)
  };

  const getAllProgramsForChannel = async (channelId) => {
    let allPrograms = await fetch(`/api/v1/programs/${channelId}`);
    allPrograms = await allPrograms.json();
    setProgramsForChannel(allPrograms.programs);
  };

  const filterByCategory = async (id) => {
    let filteredPrograms = await fetch(`/api/v1/categories/${id}`);
    filteredPrograms = await filteredPrograms.json();
    const { programs } = filteredPrograms;
    setPrograms(programs);
  };

  const getScheduleByDate = async (channelId, date) => {
    let scheduleByDate = await fetch(
      `/api/v1/channels/schedule/${channelId}/${date}`
    );
    scheduleByDate = await scheduleByDate.json();

    // when filtered on date, the state of schedule will change
    setSchedule(scheduleByDate);
  };

  const values = {
    channels,
    channel,
    categories,
    schedule,
    programs,
    programsForChannel,
    programsToFavorite,
    setSchedule,
    getChannelById,
    getScheduleForChannel,
    getAllProgramsForChannel,
    filterByCategory,
    getAllPrograms,
    getScheduleByDate,
  };
  return (
    <RadioContext.Provider value={values}>
      {props.children}
    </RadioContext.Provider>
  );
};

export default RadioProvider;
