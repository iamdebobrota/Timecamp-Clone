import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthContext/authContext";
import { Header } from "../Header/Header";
import styles from "./login.module.css";

const Login = () => {
  const [client, setClient] = useState({});
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setClient({
      ...client,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let payload = JSON.stringify(client);
    localStorage.setItem("loggedInUser", payload);
    fetch("https://timecampclone.herokuapp.com/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("userid", JSON.stringify(res._id));
        if (res.token) {
          setIsAuth(true)
          navigate("/app");
        } else {
          console.log("wrong credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.leftDivInMain}>
          <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>
            TimeCamp Plugin for Google Chrome
          </h1>

          <div className={styles.trackTimeDiv}>
            <h4 className={styles.trackTime}>
              Track time without leaving Chrome in 70+ online apps.
            </h4>
          </div>

          <div className={styles.reviewColumns}>
            <div className={styles.reviewColumnSingle}>
              <img
                alt="img"
                src="https://cdn.timecamp.com/res/css/images/crozdesk-icon.1658395295.png"
              />
            </div>
            <div className={styles.reviewColumnSingle}>
              <img
                alt="img"
                src="https://cdn.timecamp.com/res/css/images/capterra-icon.1658395295.png"
              />
            </div>
            <div className={styles.reviewColumnSingle}>
              <img
                alt="img"
                src="https://cdn.timecamp.com/res/css/images/crowd-icon.1658395295.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.rightDivInMain}>
          <div className={styles.formGroupUpper}>
            <h3 className={styles.formGroupH3Tag}>Log in to TimeCamp</h3>
            <button className={styles.googleButton}>
              <a
                className={styles.googleBtnAnchor}
                href="https://app.timecamp.com/auth/google_auth/register"
                id="googleButton"
              >
                Log in with Google
              </a>
            </button>
            <span style={{ margin: "auto 0px" }}>Or</span>
          </div>
          <div className={styles.formInputs}>
            <input
              name="email"
              type="string"
              onChange={handleChange}
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className={styles.formInputs}>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className={styles.formButtonDiv}>
            <button
              onClick={handleLogin}
              style={{ borderRadius: "25px", padding: "0.5rem 2rem", width:"160px" }}
              className="btn btn-lg btn-success g-recaptcha"
            >
              Log In
            </button>
          </div>

          <div className="form-group__termsPrivacy col-sm-12">
            <p className={styles.needSignup}>
              <Link
                to="/auth/register"
                className={styles.signUpTerms}
                href="https://app.timecamp.com/page/terms"
              >
                No account? Sign Up{" "}
              </Link>
              or{" "}
              <a
                className={styles.signUpTerms}
                href="https://app.timecamp.com/page/privacy"
              >
                Login with SSO
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
