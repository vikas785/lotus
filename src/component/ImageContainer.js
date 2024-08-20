import React from 'react'

const ImageContainer = ({ imgSrc, imgHeight}) => {
    return (
        <div>
            <img className='clip-polygon' src={imgSrc} alt="Paris" width="100%" height={imgHeight} />
        </div>
    )
}

export default ImageContainer