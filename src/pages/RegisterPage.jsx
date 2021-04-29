import styles from "./css/Form.module.css";

import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";
import useForm from "../hooks/useForm";

const RegisterPage = () => {
  const history = useHistory();
  const { registerUser } = useContext(UserContext);
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let userInfo = {
      email: values.email,
      password: values.password,
      username: values.username,
    };
    registerUser(userInfo);


    // history.push('/login')

    // you need to find a way to reset valyus after log in
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <ul>
            <p>Ditt lösenord ska innehålla:</p>
            <li> Minst 8 tecken långt </li>
            <li> Innehålla ett specieltecken </li>
            <li> Innehålla en siffra </li>
            <li> Stora och små bokstäver </li>
          </ul>
          <input
            name="username"
            value={values.username}
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
          type="email"
            name="email"
            values={values.email}
            placeholder="Email..."
            onChange={handleChange}
            
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input type="submit" onSubmit={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
