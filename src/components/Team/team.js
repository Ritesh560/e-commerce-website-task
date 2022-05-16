import React from "react"

//css file
import "./team.css"

//import images
import zidane from "../../assets/zidane.jpg"
import facebookLogo from "../../assets/facebook.png"
import mediumLogo from "../../assets/medium.png"
import linkedinLogo from "../../assets/linkedin.png"
import tonikroos from "../../assets/tonikroos.jpg"
import ikercasillas from "../../assets/ikercasillas.jpg"
import james from "../../assets/james.jpg"
import christiano from "../../assets/christiano.jpg"

function Team() {
  return (
    <div className="teamContainer">
      <p className="titleline">Without bonding and coordination, every project is a failure. look at who makes KICKSUP great. ;)</p>

      <div className="team">
        <div className="profile">
          <img className="team-profile-pic" src={zidane} alt="#" />
          <p className="name">Zidane</p>
          <p className="fields">Leadership & management</p>
          <div className="social-media">
            <img src={facebookLogo} alt="#" />
            <img src={mediumLogo} alt="#" />
            <img src={linkedinLogo} alt="#" />
          </div>
        </div>

        <div className="profile">
          <img className="team-profile-pic" src={tonikroos} alt="#" />
          <p className="name">Toni Kroos</p>
          <p className="fields">Product Developer</p>
          <div className="social-media">
            <img src={mediumLogo} alt="#" />
            <img src={linkedinLogo} alt="#" />
          </div>
        </div>

        <div className="profile">
          <img className="team-profile-pic" src={ikercasillas} alt="#" />
          <p className="name">Iker Casilias</p>
          <p className="fields">Marketing Strategy</p>
          <div className="social-media">
            <img src={mediumLogo} alt="#" />
          </div>
        </div>

        <div className="profile">
          <img className="team-profile-pic" src={james} alt="#" />
          <p className="name">James</p>
          <p className="fields">Product designer</p>
          <div className="social-media">
            <img src={facebookLogo} alt="#" />
            <img src={mediumLogo} alt="#" />
            <img src={linkedinLogo} alt="#" />
          </div>
        </div>

        <div className="profile">
          <img className="team-profile-pic" src={christiano} alt="#" />
          <p className="name">Christiano</p>
          <p className="fields">Financial Operations</p>
          <div className="social-media">
            <img src={facebookLogo} alt="#" />
            <img src={linkedinLogo} alt="#" />
          </div>
        </div>
      </div>

      <h2>and You! ;)</h2>
    </div>
  )
}

export default Team
