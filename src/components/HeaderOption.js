import React from 'react';
import "../style/HeaderOption.css";

function HeaderOption({ title }) {
  const scrollToTopOrBottom = () => {
    if (title === 'AJAY YADAV') {
      window.scrollTo({
        top: 0, // Scroll to the top
        behavior: 'smooth', 
      });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth', 
      });
    }
  };

  return (
    <div className="headerOption" onClick={scrollToTopOrBottom}>
      <p className="options">{title}</p>
    </div>
  );
}

export default HeaderOption;
