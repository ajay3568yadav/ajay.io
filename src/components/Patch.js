import React, { useRef,useEffect } from 'react';
import '../style/Patch.css';
import arrow from '../Images/arr.png'
import { motion, useScroll } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function Patch({ Image, Height, Width, Margin, BackgroundSize, title, year, role }) {

  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(()=>{
    const handleScroll = () =>{

      const y=scrollYProgress.get();
      const bags=document.querySelectorAll('.patch');
      if(inView)
      {
      bags.forEach((bag)=>{
        bag.style.backgroundPositionY=`translateY(${y*1000})`;
      }
      );
    }
    };
    scrollYProgress.onChange(handleScroll);
    return () => {
      scrollYProgress.onChange(null);
    };
  },[scrollYProgress]);




  return (
    <div className="patch"
      ref={ref}
      style={{
        height: Height,
        width: Width,
        backgroundImage: `url(${Image})`,
        marginTop: Margin,
        backgroundRepeat: 'no-repeat',
        backgroundSize: BackgroundSize,
        borderRadius: '50px',
        backgroundPosition: 'center',
        backgroundColor: '#FEFEFE',
      }}
    >
      <div className="project">
        <div className="year">{year}</div>
        <div className="role">{role}</div>
        <div className="pannel">
        <div className="project-name">
          <p>{title}</p>
        </div>
        <img src={arrow} alt="arrow" class="arro"></img>
        </div>
        
       
      </div>
    </div>
  );
}

export default Patch;
