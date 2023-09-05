import React, { useEffect } from 'react';
import '../style/Cards.css';
import { motion, useScroll } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import sunset from '../Images/sunset.jpeg';
import hayden from '../Images/hayden.jpeg';
import palmwalk from '../Images/palmwalk.webp';

function Cards() {
  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const y = scrollYProgress.get();
      const rotationRange = 100; 
      const rotation = -15+y * rotationRange; 

      const photos = document.querySelectorAll('.photo');

      photos.forEach((photo) => {
        photo.style.transform = `rotate(${rotation}deg)`;
      });
    };

    scrollYProgress.onChange(handleScroll);

    return () => {
      scrollYProgress.onChange(null);
    };
  }, [scrollYProgress]);

  const lineVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="banner2">
      <motion.div
        className="intro"
       >
        <motion.div variants={lineVariants} ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5}}>
          I AM AJAY YADAV,
        </motion.div>
        <motion.div variants={lineVariants} ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, delay: 0.1}}>
          A STUDENT AT
        </motion.div>
        <motion.div variants={lineVariants} ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5,delay: 0.15}}>
          <span className="sp"> Arizona State University </span>
        </motion.div>
        <motion.div variants={lineVariants} ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5,delay: 0.18}}>
          MAJORING IN 
        </motion.div>
        <motion.div variants={lineVariants} ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5,delay:0.2}}>
          COMPUTER SCIENCE.
        </motion.div>
        <motion.div variants={lineVariants} ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5,delay:0.22}}>
          WELCOME TO MY
        </motion.div>
        <motion.div variants={lineVariants} ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5,delay:0.24}}>
          PORTFOLIO
        </motion.div>
        <motion.div variants={lineVariants} ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5,delay:0.25}}>
          SITE
        </motion.div>
      </motion.div>
      <div className="photos">
        <motion.img
          className="photo waves"
          alt="image"
          src={palmwalk}
          
        />
        <motion.img
          className="photo sunset"
          alt="image"
          src={hayden}
          
        />
        <motion.img
          className="photo flower"
          alt="image"
          src={sunset}
          
        />
      </div>
    </div>
  );
}

export default Cards;
