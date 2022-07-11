import React from 'react'

function BannerName({name, discount, link}) {
  return (
    <div className="bannerContent">
        <h3 className="BannerHeading">Hello {name} </h3>
        <p className="bannerPara">
            Get free discount for every  
            <span> ${discount}</span> purchase
        </p>

        <a  className="bannerAnchor" href={link}>Learn more</a> 
    </div>
  )
}

export default BannerName