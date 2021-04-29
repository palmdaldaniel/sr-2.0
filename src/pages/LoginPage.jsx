import { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";
import useForm from "../hooks/useForm.js";
import styles from "./css/Form.module.css";

const LoginPage = () => {
  const history = useHistory();
  const { loginUser, errorMessage } = useContext(UserContext);
  const [values, handleChange] = useForm({ email: "", password: "" });
  console.log(errorMessage);

  const handleSubmit = (e) => {
    e.preventDefault();
    let userInfo = {
      email: values.email,
      password: values.password,
    };
    loginUser(userInfo);

    // history.push('/')

    // you need to reset valyes after log in
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <ul>
            <li style={{listStyle: 'none'}}>{errorMessage}</li>
          </ul>
          <input
            name="email"
            value={values.email}
            placeholder="Email..."
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <input type="submit" value="Logga in" onSubmit={handleSubmit} />
          <Link to="/register"> Register? </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
