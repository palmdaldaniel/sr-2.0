const FavoriteChannelBroadCast = ({ schedule }) => {

  return (
    <div>
      {schedule &&
        schedule.map((s) => {
          return <p>{s.program.name}</p>;
        })}
    </div>
  );
};

export default FavoriteChannelBroadCast;
