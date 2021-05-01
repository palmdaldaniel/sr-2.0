import { useContext, useState } from "react";

import { UserContext } from "../contexts/UserProvider";

const EdituserPopup = ({setShow}) => {
  const { updateUsername, user, whoami} = useContext(UserContext);
  const [username, setUsername] = useState(user.username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userToEdit = {
      newUsername: username,
      userid: user.userid

    };
    await updateUsername(userToEdit);
    setUsername("");
    await whoami()
    setShow(false)
   
  };

  const handlechange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handlechange} />
        <input type="submit" value="Spara" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default EdituserPopup;
