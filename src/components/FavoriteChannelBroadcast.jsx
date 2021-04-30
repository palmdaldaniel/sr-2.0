import styles from '../pages/css/FavoritePage.module.css'


const FavoriteChannelBroadCast = ({ schedule }) => {
  console.log(schedule);

  return (
    <div>
      
      {schedule &&
        schedule.map((s, i) => (
          <div className={styles.schedule}  key={i}>
            <h3> {s.program.name} </h3>
            <p>{s.description}</p>
            <p> Från {s.starttimeutc.slice(10, 16)} - till {s.endtimeutc.slice(10, 16)}  </p>
            
          </div>
        ))}
    </div>
  );
};

export default FavoriteChannelBroadCast;
