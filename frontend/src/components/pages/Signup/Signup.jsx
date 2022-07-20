import React from 'react'
import styles from "./signup.module.css"

const Signup = () => {
  return (
 
       
        <div className={styles.mainDiv}>
            <div className={styles.leftDivInMain}>
                <h1 style={{fontSize: "42px"}}>Loved by customers and recognized among online communities. </h1>
                <div className="register-wrapper__img--review">
                    <img src="https://cdn.timecamp.com/res/css/images/review-icon-signup.1658227855.svg" />
                </div>
                <div className={styles.reviewColumns}>
                    <div className={styles.reviewColumnSingle}>
                        <p className={styles.reviewColumnSinglePTag} >Counting every second is easy with TimeCamp. </p>
                        <img src="https://cdn.timecamp.com/res/css/images/stars-reviews-signup.1658227855.svg" />
                        <p><span>Emily, </span>Lead Software Engineer </p>
                    </div>
                <div className={styles.reviewColumnSingle}>
                    <p className={styles.reviewColumnSinglePTag}>Great tool to measure the time dedicated to tasks and projects. </p>
                    <img src="https://cdn.timecamp.com/res/css/images/stars-reviews-signup.1658227855.svg" />
                    <p><span>Enrique, </span>Director Operaciones at Consultor </p>
                </div>
                    <div className={styles.reviewColumnSingle}>
                        <p className={styles.reviewColumnSinglePTag}>It has removed all our worries about tracking time and activities. </p>
                        <img src="https://cdn.timecamp.com/res/css/images/stars-reviews-signup.1658227855.svg" />
                        <p><span>Sarah, </span>Practice Lead at Cloud &amp; Emerging Tech </p>
                    </div>
                </div>

                <div className={styles.imageIcons}>
                    <img src="https://cdn.timecamp.com/res/css/images/leader-summer-reviews-signup.1658227855.svg" />
                    <img src="https://cdn.timecamp.com/res/css/images/easiest-to-use-icon-review-signup.1658227855.svg" />
                </div>
              
            </div>
            <div className={styles.rightDivInMain}>
                
            </div>
        </div>
  
  )
}

export default Signup

//  {/* <div className="register-wrapper__text-column col-sm-12 col-md-7 col-lg-7 ">
//         <div className="register-wrapper__headingText hidden-xs hidden-sm">
//         <h1>Loved by customers and recognized among online communities. </h1>
//         </div>
//         <div className="register-wrapper__img--review">
//         <img src="https://cdn.timecamp.com/res/css/images/review-icon-signup.1658227855.svg" />
//         </div>
//         <div className="register-wrapper__reviews-columns">
//         <div className="register-wrapper__reviews-columns--single">
//         <p>Counting every second is easy with TimeCamp. </p>
//         <img src="https://cdn.timecamp.com/res/css/images/stars-reviews-signup.1658227855.svg" />
//         <p><span>Emily, </span>Lead Software Engineer </p>
//         </div>
//         <div className="register-wrapper__reviews-columns--single">
//         <p>Great tool to measure the time dedicated to tasks and projects. </p>
//         <img src="https://cdn.timecamp.com/res/css/images/stars-reviews-signup.1658227855.svg" />
//         <p><span>Enrique, </span>Director Operaciones at Consultor </p>
//         </div>
//         <div className="register-wrapper__reviews-columns--single">
//         <p>It has removed all our worries about tracking time and activities. </p>
//         <img src="https://cdn.timecamp.com/res/css/images/stars-reviews-signup.1658227855.svg" />
//         <p><span>Sarah, </span>Practice Lead at Cloud &amp; Emerging Tech </p>
//         </div>
//         </div>
//         <div className="register-wrapper__img--icons">
//         <img src="https://cdn.timecamp.com/res/css/images/leader-summer-reviews-signup.1658227855.svg" />
//         <img src="https://cdn.timecamp.com/res/css/images/easiest-to-use-icon-review-signup.1658227855.svg" />
//         </div>
//         </div> */}