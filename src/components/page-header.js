import React from 'react'
import Img from "gatsby-image"
import './page-header.css'

function PageCoverImg ({ image, headerTitle }) {
   return (
      <>
      <div style={{position: `relative`, height: `50vh`, overflow:`hidden`}}>
         <Img fluid={image} style={{position: `absolute`, zIndex:`1`, height: `50vh`, width: `100%`}}/>
         <div className="header-overlay"></div>
         <div className="header-title" style={{width: `100%`}}>
            <h1 style={{fontWeight:`bold`}}>{headerTitle}</h1>
         </div>
      </div>
      <div className="slant">
         <div className="slant-container">
            {/* <h5 className="page-title">{pageTitle}</h5> */}
         </div>
      </div>
   </>
   )
}

export default PageCoverImg;

