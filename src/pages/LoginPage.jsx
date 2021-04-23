import useForm from "../hook/useForm";
import styles from "./css/LoginPage.module.css";

const LoginPage = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let userInfo = {
        email: values.email,
        password: values. password
    }
 
    // you need to reset valyes after registration

  };

  return (
    <div className={styles.loginwrapper}>
      <div className={styles.formwrapper}>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" onChange={handleChange} />
          <input type="password" name="password" onChange={handleChange} />
          <input
            type="submit"
            name=""
            id=""
            value="Logga in"
            onSubmit={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
