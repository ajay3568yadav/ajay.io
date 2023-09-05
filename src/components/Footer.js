import React from 'react';
import '../style/Footer.css';
import arrow from "../Images/arrow-white.png"
import instagram from '../Images/instagram.png'
import github from '../Images/github.png'
import linkedin from '../Images/linkedin.png'
import behance from '../Images/behance.png'
import Social from './Social';


function Footer() {
  return (
    <div className="footer">
        <span>LET'S TALK</span>
        <span>ABOUT THE NEXT</span>
        <span><img src={arrow} alt='img'></img>BIG THING</span>
    <div className="button-group">
        <a href='mailto:ayadav55@asu.edu'><button>Write a Message</button></a>
        <a href='mailto:ayadav55@asu.edu'><button>Discuss Project</button></a>
    </div>
    <div className="social-pannel">
    <Social title={"Instagram"} id={"@ajzona_"} Icon={instagram} link='https://www.instagram.com/ajzona_/'/>
    <Social title={"Behance"} id={"@ajzona_"} Icon={behance} link='https://www.behance.net/ajayyadav75'/>
    <Social title={"Linkedin"} id={"@ajayyadav"} Icon={linkedin} link='https://www.linkedin.com/in/ajay-yadav-020877226/'/>
    <Social title={"Github"} id={"@ajay3568yadav"} Icon={github} link='https://github.com/ajay3568yadav'/>
    </div>
    </div>
  );
}

export default Footer;
