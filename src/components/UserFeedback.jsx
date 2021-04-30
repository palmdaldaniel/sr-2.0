import styles from '../pages/css/HomePage.module.css'


const UserFeedback = ({ username }) => {
  return (
    <div className={styles.userfeedback}>
      <h4>Välkommen {username}!</h4>
    </div>
  );
};

export default UserFeedback;
