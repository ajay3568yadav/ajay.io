import React from 'react'
import { useInView,useAnimate, inView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import '../style/Honors.css'
import Item from './Item'


function Honors() {
   
   const ref=useRef(null)
   const inView=useInView(ref,{
      once:true,
   });
   const itemvariant={
      hidden: {opacity:0, x:-20},
      visible: {opacity:1, x:0}
   }

  return (
    <div className="honors-component">
        <div className="honors">
        <div className="honors-head">
        Ho<span className="n">n</span>ors
     </div>
     <div className="subtext">
     ALL OF MY PAST ACHIEVEMENTS,<br/>
     AWARDS AND RECOGNITION.
     </div>
        </div>
      
     <div className="list-and-photo">
        <div className="about-me">
        <div className="wrapper">
            <p>ABOUT ME</p>
            <h1>Hi! I am Ajay Yadav<br/>Welcome!</h1>
            <div className="self-image"></div>
            <p>I am a young and passiona driven student who enjoy<br/>learning new things, meeting people and chaninging<br/>lives</p>
        </div>
        </div>
        <div className="list">
         <motion.div
            initial='hidden'
            animate={inView?'visible':'hidden'}
            ref={ref}
            variants={itemvariant}
            transition={{duration: 0.5,delay: 0.15}}
         >
         <Item title={"GDSC Creative Lead"} date={"2023"}/>
         </motion.div>

         <motion.div
         initial='hidden'
         animate={inView?'visible':'hidden'}
         ref={ref}
         variants={itemvariant}
         transition={{duration: 0.51,delay: 0.2}}
         >
         <Item title={"Explores Club Marketing Lead"} date={"2023"}/>
         </motion.div>

         <motion.div
         initial='hidden'
         animate={inView?'visible':'hidden'}
         ref={ref}
         variants={itemvariant}
         transition={{duration: 0.52,delay: 0.25}}
         >
         <Item title={"EPICS Research Lead"} date={"2022"}/>
         </motion.div>

         <motion.div
         initial='hidden'
         animate={inView?'visible':'hidden'}
         ref={ref}
         variants={itemvariant}
         transition={{duration: 0.53,delay: 0.30}}
         >
         <Item title={"NAMU Scholar"} date={"2022"}/>
         </motion.div>

         <motion.div
         initial='hidden'
         animate={inView?'visible':'hidden'}
         ref={ref}
         variants={itemvariant}
         transition={{duration: 0.54,delay: 0.35}}
         >
         <Item title={"Deans List"} date={"2022"}/>
         </motion.div>

         <motion.div
         initial='hidden'
         animate={inView?'visible':'hidden'}
         ref={ref}
         variants={itemvariant}
         transition={{duration: 0.55,delay: 0.4}}
         >
         <Item title={"Fulton Scholar"} date={"2023"}/>
         </motion.div>
       
        </div>
     </div>
    </div>
  )
}

export default Honors
