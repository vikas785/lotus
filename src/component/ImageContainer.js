import React from 'react'

const ImageContainer = ({ height, width }) => {
    return (
        <div>
            {/* <svg width="100%" height="500px" viewBox="0 0 100 100" >
                <mask id="svgmask2">
                    <polygon fill="#ffffff" points="20%,0 273,0 279,11 300,11 300,84 285,100 0,100 0,21"></polygon>

                </mask>
                <image href='/assets/Banner1.jpg' width='100%' mask="url(#svgmask2)" preserveAspectRatio="xMidYMid meet"  ></image>
            </svg> */}

            <img className='clip-polygon' src="/assets/Banner1.jpg" alt="Paris" width="100%" height="500" />
            
        </div>
    )
}

export default ImageContainer