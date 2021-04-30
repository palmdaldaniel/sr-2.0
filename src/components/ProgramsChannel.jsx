import styles from '../pages/css/ChannelPage.module.css'


const ProgramsChannel = ({ programsForChannel }) => {
 

  return (
    <div className={styles.ProgramsChannel}>
      {programsForChannel &&
        programsForChannel.map((p, i) => (
          <div key={i} className={styles.programInfo}>
            <h3>{p.channel.name}</h3>
            <p>{p.description}</p>
          </div>
        ))}
    </div>
  );
};

export default ProgramsChannel;
