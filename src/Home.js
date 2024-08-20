import React from 'react'
import ImageContainer from './component/ImageContainer'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#080404' }}>
      <ImageContainer imgHeight='400px' imgSrc="/assets/Banner1.jpg" />
      <div className="container fw-light">
        <div className="row">
          <div className="col lotus-text-grey" >
            <div className='fw-light' style={{ fontSize: '45px' }}>
            Mumbai's Premier <br /> Real Estate Developers
            </div>
            <div className='mb-2' style={{ fontSize: '28px'}}>
            {/* <span style={{height:'42px',width:'42px', backgroundColor:'white',borderRadius: '50%'}}> */}
            <i className="bi bi-telephone me-2" style={{ fontSize: '24px' }}></i> 
            {/* </span> */}
            Contact us
            </div>
            <span className='lotus-text-golden fw-normal lotus-box px-4  py-1' style={{ fontSize: '28px' }}>
              Find Your Property 
            </span>
            
          </div>
          <div className="col">
            <div className='lotus-text-grey ' style={{width:'350px', fontSize: '18px'}}>
            Impressive portfolio of residential, office, and mixed-use properties
            </div>
            <div className='text-white fw-normal' style={{fontSize:'110px',lineHeight: 1}}>
              Lotus Developers
            </div>
          
          </div>
        </div>

        <div className='pt-5'>
        <div className="row mt-5">
          <div className="col-7 ">
            <img src='/assets/About1.jpg' width='100%' />
          </div>
          <div className="col-5 text-white">
            <div className='mt-5'>
              <div className='fw-normal' style={{ fontSize: '50px' }}>About Us</div>
              <div className='fw-medium mt-3' style={{ fontSize: '25px' }}>Quality</div>
              <div style={{width:'400px', fontSize: '20px'}}>
              We create real estate spaces for those who value impeccable design, superior craftsmanship, and the finest appointments. Each and every one of our developments embodies the true definition of quality, from customized finishes and thoughtful floor plans to the elevated offerings or our premium amenities.
              </div>
              <div className='mt-3'>NEXT</div>
            
            
            
            

            </div>
          </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Home