import styles from '../pages/css/ChannelPage.module.css'


const ProgramsChannel = ({ programsForChannel }) => {
  console.log(programsForChannel);

  return (
    <div className={styles.ProgramsChannel}>
      {programsForChannel &&
        programsForChannel.map((p, i) => (
          <div key={i}>
            <h4>{p.channel.name}</h4>
            <p>{p.description}</p>
          </div>
        ))}
    </div>
  );
};

export default ProgramsChannel;
