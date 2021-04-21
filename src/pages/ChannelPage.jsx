import { useEffect, useContext } from "react";
import { RadioContext } from "../contexts/RadioProvider";

const ChannelPage = (props) => {
  const {
    getChannelById,
    getScheduleForChannel,
    channel,
    schedule,
  } = useContext(RadioContext);
  const { id } = props.match.params;

  console.log(schedule);

  useEffect(() => {
    getChannelById(id);
    getScheduleForChannel(id);
  }, []);

  return (
    <>
      {channel && (
        <div>
          <h1> {channel.channel.name} </h1>
          <p> {channel.channel.tagline} </p>
        </div>
      )}
      <div>
        <h1> Dagens sändningar </h1>
      </div>

      {schedule &&
        schedule.map((s) => (
          <div>
            <p> {s.title} </p>
            <p>{s.starttimeutc}</p>
            <p> {s.description} </p>
          </div>
        ))}
    </>
  );
};

export default ChannelPage;
