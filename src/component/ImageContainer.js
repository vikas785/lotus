import React from 'react'

const ImageContainer = ({ imgSrc, imgHeight}) => {
    return (
        <div style={{position:'relative'}}>
            <img src='/assets/icons/logo.png' height='50px' className='rotate-image' width='50px' style={{position:'absolute', right: '200px', top:'0px'}} />
            <img className='clip-polygon' src={imgSrc} alt="Paris" width="100%" height={imgHeight}  />
        </div>
    )
}

export default ImageContainer