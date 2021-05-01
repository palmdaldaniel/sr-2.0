import styles from "./css/Form.module.css";

import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserProvider";
import useForm from "../hooks/useForm";
import Helpbox from "../components/Helpbox";

const RegisterPage = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const {
    registerUser,
    errorMessage,
    setErrorMessage,
    status,
    setStatus,
  } = useContext(UserContext);
  console.log(status);

  useEffect(() => {

    return () => {
      setErrorMessage(undefined);
    };
  }, []);

  useEffect(() => {
    if (status === 200) {
      history.push("/login");
      setStatus(404);
      setErrorMessage(undefined);
    }
  }, [status]);

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

    // info is sent to validator function before it goes to db
    validateUser(userInfo);
  };

  // check if these are good or bad credintals
  const validateUser = (user) => {
    // (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
    // (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
    // (?=.*[0-9])	The string must contain at least 1 numeric character
    // (?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
    // (?=.{8,})	The string must be eight characters or longer

    const strongPassword = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    const passwordIsValid = strongPassword.test(user.password);

    // check for basic emailpatterns. valid email could be daniel@gmail.com
    // test will show false if you submit ex: daniel@@gmal.com
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email);

    if (passwordIsValid && emailIsValid) {
      registerUser(user);
    } else {
      setShow(true);
      setErrorMessage(undefined);
      setTimeout(hideFeedbackMessage, 6500);
    }
  };
  const hideFeedbackMessage = () => {
    setShow(false);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <p>{errorMessage}</p>
          {show && <Helpbox />}
          <input
            name="username"
            value={values.username}
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            values={values.email}
            placeholder="Email..."
            onChange={handleChange}
            required
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

