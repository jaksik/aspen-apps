import React from 'react'
import Img from "gatsby-image"
import './page-header.css'

function PageCoverImg ({ image, title, subtitle, titlethree, description }) {
   return (
      <>
      <div style={{position: `relative`, height: `50vh`, overflow:`hidden`}}>
         <Img fluid={image} style={{position: `absolute`, zIndex:`1`, height: `70vh`, padding: `50vh`, width: `100%`}}/>
         <div className="header-overlay"></div>
         <div className="header-title" style={{width: `100%`}}>
            {/* <h5>{title}</h5> */}
            <h1 style={{fontWeight:`bold`}}>{subtitle}</h1>
         </div>
      </div>
      <div className="slant">
         <div className="slant-container">
            <h2 className="slant-title">{titlethree || subtitle}</h2>
            {/* <p className="slant-text" style={{fontSize:`15px`, maxWidth:`70%`, margin:`10px auto`}}>{description}</p> */}
            {/* <div className="header-border"></div> */}
         </div>
      </div>
   </>
   )
}

export default PageCoverImg;

