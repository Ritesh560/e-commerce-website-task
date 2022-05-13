import React from "react"

//import css
import "./contact.css"

//import images
import facebookLogo from "../../assets/facebook.png"
import instaLogo from "../../assets/insta.png"
import twitterLogo from "../../assets/twitter.png"

function Contact() {
  return (
    <div className="contact">
      <div className="contact-emails">
        <h3 id="center">REACH US AT</h3>
        <p className="email">support@kicksup.com</p>
        <p>to any technical support</p>
        <p className="email">info@kicksup.com</p>
        <p>to more information.</p>
        <p className="email">feedback@kicksup.com</p>
        <p>to send your feedback</p>
        <p className="email">jobs@kicksup.com</p>
        <p>to work with us</p>
      </div>
      <div className="social-media">
        <p>stay in touch</p>
        <img src={twitterLogo} alt="#" />
        <img src={instaLogo} alt="#" />
        <img src={facebookLogo} alt="#" />
      </div>
    </div>
  )
}

export default Contact
