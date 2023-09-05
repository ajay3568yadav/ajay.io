import React, { useRef, useState } from 'react';
import diging from '../Images/diging.png';
import nsflogo from '../Images/nsflogo.png';
import asu from '../Images/asu.png';
import fulton from '../Images/fulton.png';
import solet from '../Images/solet.png';
import Patch from '../components/Patch';
import '../style/Block.css';
import { motion } from 'framer-motion';

function Block() {

  const [bgcolor,setbgColor] = useState("true");

  const variants={
    active:{
      
      transition: { duration: 2, delay: 0.5},
    },
    inactive:{
      backgroundColor: "#f0f0f0",
      transition: { duration: 2, delay: 0.5},
     
    }
  }

  return (
    <motion.div className="svg-container" 
    >
      <div className="block">
      <div className="line1"  >
        
       <a href='https://diging.asu.edu/people/index.html'><Patch Image={diging} Height={800} Width={750} Margin={0} BackgroundSize={600} title="Diging" year="YEAR: 2023" role="ROLE: Software Developer" /></a>
        
       <a href='https://soletlab.asu.edu/'><Patch Image={solet} Height={550} Width={500} Margin={200} BackgroundSize={450} title="SoLET" year="YEAR: 2023" role="ROLE: Web Developer" /></a>
      </div>
      <div className="line2">
        <a href='https://faculty.engineering.asu.edu/vidyachhabria/people/'><Patch Image={fulton} Height={650} Width={650} Margin={0} BackgroundSize={500} title="Fulton" year="YEAR: 2023" role="ROLE: ML research Intern" /></a>
      </div>
      <div className="line3">
       <a href='https://www.asu.edu/'> <Patch Image={asu} Height={500} Width={500} Margin={0} BackgroundSize={300} title="ASU" year="YEAR: 2023" role="ROLE: Undergraduate TA" /></a>
       <a href='https://infodeserts.org/people'> <Patch Image={nsflogo} Height={700} Width={700} Margin={0} BackgroundSize={500} title="NSF" year="YEAR: 2022" role="ROLE: Web Developer REU" /></a>
      </div>
      <a href='https://github.com/ajay3568yadav'><div className="button">
      <button className="projects-page">See Projects</button>
      </div></a>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f0f0f0" fill-opacity="1" d="M0,64L40,90.7C80,117,160,171,240,176C320,181,400,139,480,117.3C560,96,640,96,720,128C800,160,880,224,960,208C1040,192,1120,96,1200,74.7C1280,53,1360,107,1400,133.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      </motion.div>
  );
}

export default Block;
