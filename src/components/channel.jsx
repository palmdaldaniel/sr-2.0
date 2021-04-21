import styles from "./css/channel.module.css";


const Channel = ({ channel }) => {
  return (
     <div className={styles.channel}>
        <div className={styles.imgContainer}>
            <img src={channel.image} className={styles.image}></img>
        </div>
        <h1> {channel.name}  </h1>
        <p> {channel.tagline}  </p>
    </div>  

  );
};

export default Channel;
