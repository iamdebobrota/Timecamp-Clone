import React from 'react'
import style from './footer.module.css'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const footers = [
    {
      title: "Product",
      description: [
        "Features",
        "Integrations",
        "Applications",
        "Product updates",
        "Customer Stories",
        "Self-hosting"
      ],
    },
    {
      title: "Support",
      description: [
        "Support",
        "Knowledge base",
        "Developers API",
        "Server Status",
      ],
    },
    {
      title: "Integrations",
      description: [
        "Trello",
        "Monday.com",
        "Googlr Calendar",
        "Asana",
        "Jira",
        "All integrations",
      ],
    },
    {
      title: "Resources",
      description: ["Contact",
       "HeySpace",
        "Jobs", 
        "About us", 
        "Press",
    "Became a Partner"],
    },
    {
      title: "Calculators",
      description: ["profit Margin Calculator",
       "Online Timer",
        "Overtime Calculator", 
      "ROI Calculator", "Time Card Calculator"],
    },
    {
      title: "Legal",
      description: ["Terms", "Privacy", "Security"],
    },
  ];

  

const Footer = () => {
  return (
    <div className={style.footer_main}>
        <div className={style.footer}>
          {footers.map((footer) => (
            <div xs={5} sm={2} key={footer.title}
            className={style.container_footer}>
              <div className={style.title}
              >
                {footer.title}
              </div>
              <div className={style.ul}>
                {footer.description.map((ite, ind) => (
                  <div key={ind}>
                    <p>
                      {ite}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>

<div className={style.copyright}>
    <div className={style.copyright_icon}>
        <FaFacebookF/>
        <FaLinkedinIn/>
        <BsTwitter/>
    </div>
    <p>Copyright © 2022 TimeCamp. Inc.</p>
    <p>We use cookies. Click here to learn more</p>
</div>


    </div>
  )
}

export default Footer