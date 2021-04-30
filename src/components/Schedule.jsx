import styles from '../pages/css/ChannelPage.module.css'

const Schedule = ({ schedule }) => {
  return (
    <div className={styles.schedule}>
      {schedule &&
        schedule.map((s, i) => (
          <div key={i} className={styles.scheduleInfo}>
            <h3> {s.title} </h3>
            <p>
              Börjar: {s.starttimeutc} | Slutar: {s.endtimeutc}
            </p>
            <p> {s.description} </p>
          </div>
        ))}
    </div>
  );
};

export default Schedule;
