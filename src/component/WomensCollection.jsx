import React from 'react'

function WomensCollection(props) {

const {title, image1, image2, image3, image4, image5, image6}=props.ladiesFashion

  return (
    <div className='collectio-section'>
        <h2>{title}</h2>
        <div className='banner-box'>
        <img src='assets/LadiesBanner.gif'></img>
      </div>
        
        <div className='ladies-images'>
  <img src={image1} alt={title}/>
  <img src={image2} alt={title}/>
  <img src={image3} alt={title}/>
  <img src={image4} alt={title}/>
  <img src={image5} alt={title}/>
  <img src={image6} alt={title}/>
  
</div>
    </div>
  )
}

export default WomensCollection