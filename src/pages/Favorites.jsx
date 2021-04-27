import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

const Favorites = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <h1> Welcome {user.username} </h1>
        </div>
      ) : (
        <h1> Pls log in to see your favorites </h1>
      )}
    </div>
  );
};

export default Favorites;
