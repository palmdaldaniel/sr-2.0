import { useContext, useState } from "react";
import { useHistory } from 'react-router-dom'
import { UserContext } from "../contexts/UserProvider";
import useForm from "../hooks/useForm.js";
import styles from "./css/LoginPage.module.css";

const LoginPage = () => {
  const history = useHistory()
  const { loginUser } = useContext(UserContext);
  const [values, handleChange] = useForm({ email: '', password: '' });


  const handleSubmit = (e) => {
    e.preventDefault();
    let userInfo = {
      email: values.email,
      password: values.password,
    };
    loginUser(userInfo);

    history.push('/')

    // you need to reset valyes after log in
  };

  return (
    <div className={styles.loginwrapper}>
      <div className={styles.formwrapper}>
        <form onSubmit={handleSubmit}>
          <input name="email" value={values.email} placeholder="Email..." onChange={handleChange} />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <input type="submit" name="" id="" onSubmit={handleSubmit} />
          <p>Register?</p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
