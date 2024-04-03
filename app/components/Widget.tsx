import React from 'react';
// Import FontAwesome icons if you're using FontAwesome React components
// import { FaCaretDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';


export default function Widget() {
    return (
        <>
          <div className="filter-container"> 
            <div className="filter-box">
              <input type="text" placeholder="Filter Location" />
              {/* If using FontAwesome React components, replace <i> tags */}
              {/* <FaCaretDown /> */}
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
    
          <div id="grid-wrapper">
            <div id="grid-container">
              {/* Repeat <div className="grid-tile" /> as needed */}
              {[...Array(9)].map((_, index) => (
                <div key={index} className="grid-tile"></div>
              ))}
            </div>      
    
            <div className="arrow-buttons">
              {/* Replace <i> tags if using FontAwesome React components */}
              {/* <FaArrowLeft /> */}
              {/* <FaArrowRight /> */}
              <i className="fa-solid fa-arrow-left"></i>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="page-text">
              <span style={{ fontStyle: "italic" }}>Showing page 1 of 2</span>
            </div>
          </div>
        </>
      );
    };
