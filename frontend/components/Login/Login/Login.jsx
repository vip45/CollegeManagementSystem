import React from "react";
import styles from "./Login.module.css";
const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginMain}>
        <div className={styles.left}>
          <img src="/resources/images/login/login.jpg" alt="Login" />
        </div>
        <div className={styles.loginForm}>
          <h2 className={styles.heading}>
            Welcome to College Management System
          </h2>
          <div className={styles.btns}>
            <button>User</button>
            <button>Admin</button>
          </div>

          <div className={styles.loginForm}>
            <div className={styles.email}>
              <label htmlFor="emailID">Email ID</label>
              <input type="text" placeholder="" id="emailID" />
            </div>
            <div className={styles.password}>
              <label htmlFor="password">Password</label>
              <input type="text" placeholder="" id="password" />
            </div>
          </div>

          <div className={styles.loginButton}>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
