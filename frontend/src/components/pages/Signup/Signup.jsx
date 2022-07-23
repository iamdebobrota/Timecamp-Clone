import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signup.module.css";

const Signup = () => {
  const [client, setClient] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setClient({
      ...client,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    let payload = JSON.stringify(client);
    console.log('payload: ', payload);
    fetch("https://timecampclone.herokuapp.com/auth/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => navigate("/auth/login"))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.leftDivInMain}>
        <h1 style={{ fontSize: "42px",     fontWeight: '700' }}>
          Loved by customers and recognized among online communities.{" "}
        </h1>
        <div className="register-wrapper__img--review">
          <img alt="img" src="https://cdn.timecamp.com/res/css/images/review-icon-signup.1658227855.svg" />
        </div>
        <div className={styles.reviewColumns}>
          <div className={styles.reviewColumnSingle}>
            <p className={styles.reviewColumnSinglePTag}>
              Counting every second is easy with TimeCamp.{" "}
            </p>
            <img alt="img" src="https://cdn.timecamp.com/res/css/images/stars-reviews-signup.1658227855.svg" />
            <p>
              <span>Emily, </span>Lead Software Engineer{" "}
            </p>
          </div>
          <div className={styles.reviewColumnSingle}>
            <p className={styles.reviewColumnSinglePTag}>
              Great tool to measure the time dedicated to tasks and projects.{" "}
            </p>
            <img alt="img" src="https://cdn.timecamp.com/res/css/images/stars-reviews-signup.1658227855.svg" />
            <p>
              <span>Enrique, </span>Director Operaciones at Consultor{" "}
            </p>
          </div>
          <div className={styles.reviewColumnSingle}>
            <p className={styles.reviewColumnSinglePTag}>
              It has removed all our worries about tracking time and activities.{" "}
            </p>
            <img alt="img" src="https://cdn.timecamp.com/res/css/images/stars-reviews-signup.1658227855.svg" />
            <p>
              <span>Sarah, </span>Practice Lead at Cloud &amp; Emerging Tech{" "}
            </p>
          </div>
        </div>

        <div className={styles.imageIcons}>
          <img alt="img" src="https://cdn.timecamp.com/res/css/images/leader-summer-reviews-signup.1658227855.svg" />
          <img alt="img" src="https://cdn.timecamp.com/res/css/images/easiest-to-use-icon-review-signup.1658227855.svg" />
        </div>
      </div>
      <div className={styles.rightDivInMain}>
        <div className={styles.formGroupUpper}>
          <h3 className={styles.formGroupH3Tag}>Start tracking time</h3>
          <h4 className={styles.formGroupH4Tag}>
            Create an account and start with a free 14-day trial
          </h4>
          <h5 className={styles.formGroupH5Tag}>
            All features. No credit card required
          </h5>
          <br />
          <button className={styles.googleButton}>
            <a
              className={styles.googleBtnAnchor}
              href="https://app.timecamp.com/auth/google_auth/register"
              id="googleButton"
            >
              Sign up with Google
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
            required
          />
        </div>
        <div className={styles.formInputs}>
          <input
            name="password"
            type="string"
            onChange={handleChange}
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div className={styles.formInputs}>
          <input
            name="phone"
            type="number"
            onChange={handleChange}
            className="form-control"
            placeholder="Phone (optional)"
            required
          />
        </div>

        <div className={styles.formButtonDiv}>
          <button
            onClick={handleSignup}
            style={{ borderRadius: "25px" }}
            className="btn btn-lg btn-success g-recaptcha"
          >
            Sign up for free
          </button>
        </div>

        <div className="form-group__termsPrivacy col-sm-12">
          <p className={styles.reviewColumnSinglePTag}>
            By signing up you agree to our
            <a
              className={styles.signUpTerms}
              href="https://app.timecamp.com/page/terms"
            >
              {" "}
              Terms of Service{" "}
            </a>
            and
            <a
              className={styles.signUpTerms}
              href="https://app.timecamp.com/page/privacy"
            >
              {" "}
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
