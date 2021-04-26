import { useEffect, useContext, useState } from "react";
import { RadioContext } from "../contexts/RadioProvider";
import { UserContext } from '../contexts/UserProvider'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


import DatePicker from "react-datepicker";

const ChannelPage = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);


  const { user } = useContext(UserContext)

  const {
    getChannelById,
    getScheduleForChannel,
    channel,
    schedule,
    getScheduleByDate
  } = useContext(RadioContext);

  const { id } = props.match.params;

  useEffect(() => {
    getChannelById(id);
    getScheduleForChannel(id);
  }, []);

  // only fires when startdate changes.
  useEffect(() => {
    if(!startDate) return
    let formattedDate = startDate.toLocaleString().slice(0,10);
    getScheduleByDate(id, formattedDate)
      
  },[startDate])

  const toggleFavorite = () => {

   if (isFavorite) {
      setIsFavorite(false);
      return;
    }

    setIsFavorite(true);



  }
  return (
    <>
      {channel && (
        <div>
          <h1> {channel.channel.name} </h1>
          <p> {channel.channel.tagline} </p>
          { user &&  <FontAwesomeIcon size='3x' icon={faHeart} style={{ color: isFavorite ? "green" : "black" }} onClick={toggleFavorite} />  }
        </div>
      )}
      <div>
        <h1> Dagens sändningar </h1>
      </div>

      <h1>Filtrera på datum: <DatePicker placeholderText='Filtrera på datum' selected={startDate} onChange={date => setStartDate(date)} /> </h1>
      <button onClick={() =>  getScheduleForChannel(id)}> Dagens sändningar </button>

      {schedule &&
        schedule.map((s) => (
          <div style={{border: '1px solid black', marginBottom: '2vh', padding: '1rem'}}>
            <p> {s.title} </p>
            <p> Börjar: {s.starttimeutc} | Slutar: {s.endtimeutc} </p>
            <p> {s.description} </p>
          </div>
        ))}
    </>
  );
};

export default ChannelPage;
