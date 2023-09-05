import React from 'react';
import '../style/Work.css';
import arrow from "../Images/path5.png"
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function Work() {

  const ref= useRef(null);
  const inView=useInView(ref,{once:true});

  const featVariant={
    hidden: {opacity:0,y:50},
    visible: {opacity:1,y:0}
  }


  return (
    <div className="work">
      <img src={arrow} alt="" className="arrow" />
      <div className="web-and-mobile">
        <div className="services">
          THINGS I <span className="can">CAN</span> HELP YOU WITH.
        </div>
        <div className="mob-web">
          WEB AND MOBILE / UI&UX / <br />
          BRANDING / FRONT-END <br />
          DEVELOPMENT
        </div>
        <div className="c-works">
          <hr className="in-view" />
        </div>
      </div>
      <div className="feat">
        <motion.div className="feat-work" ref={ref} variants={featVariant} initial='hidden' animate={inView?'visible':'hidden'} transition={{duration:0.75,delay:0.3}}>
          Feat Wo<span className="sp" style={{ backgroundColor: '#F0F0F0' }}>r</span>k
        </motion.div>
        <div className="number">
          <div className="num">(05)</div>
        </div>
      </div>
    </div>
  );
}

export default Work;
