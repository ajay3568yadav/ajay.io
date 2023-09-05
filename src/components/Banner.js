import React from 'react'
import "../style/Banner.css"
import Fade from 'react-reveal/Fade';

export default function Banner() {
  return (
    <div className="banner">
      <div className="creative-line1">
        <div className="creative">
        <Fade left>
        Creative
        </Fade>
            
        </div>
        <Fade top>
        <div className="sub1">
                CURRENTLY AVAILABLE <span className="sp"> FOR </span>
                FREELANCE WORLDWIDE.
        </div>
        </Fade>
        <Fade bottom>
        <div className="sub2">MY LOCAL TIME <span id="time-container"></span>
            GMT (+5:30)</div>
        </Fade>
    </div>
    <div className="visual-line2">
        <div className="circle"></div>
        <div className="visual">
            <Fade bottom>
            Visual
            </Fade>    
    </div>
        <div className="designer">
            <Fade right>
            Designer
            </Fade>
            
    </div>
    </div>
    </div>
  )
}
