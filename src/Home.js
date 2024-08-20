import React from 'react'
import ImageContainer from './component/ImageContainer'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {

  const aboutArray = [
    {
      imgPath: '/assets/About1.JPG',
      heading: 'About Us',
      subHeading: 'Quality',
      description: 'We create real estate spaces for those who value impeccable design, superior craftsmanship, and the finest appointments. Each and every one of our developments embodies the true definition of quality, from customized finishes and thoughtful floor plans to the elevated offerings or our premium amenities.',
    },
    {
      imgPath: '/assets/About2.JPG',
      heading: 'About Us',
      subHeading: 'Luxury',
      description: 'True luxury is a matter of comfort. The Lotus standard is widely recognized as a unique value proposition allowing buyers to choose from a sophisticated selection of the finishes, design, and layouts to tailor homes to their individual tastes. Luxury extends beyond the tangibles to include views, flexible floor plans, and unrivaled amenities.',
    },
    {
      imgPath: '/assets/About3.JPG',
      heading: 'About Us',
      subHeading: 'Efficiency',
      description: 'Efficiency comes from our commitment to working with talented professionals. We collaborate with world-renowned architects, designers and consultants. Our in-house teams oversee every aspect, from conception to completion, devoting the time, energy, and resources needed to deliver the finest products and services.',
    }
  ]

  const FooterArray = [
    '/assets/Footer1.png',
    '/assets/Footer2.png',
    '/assets/Footer3.png',
    '/assets/Footer4.png',
    '/assets/Footer5.png',
    '/assets/Footer6.png',
    '/assets/Footer7.png',
    '/assets/Footer8.png',
    '/assets/Footer9.png',
    '/assets/Footer10.png',
    '/assets/Footer11.png',
    '/assets/Footer12.png',
    '/assets/Footer13.png',
    '/assets/Footer14.png',
    '/assets/Footer15.png',
    '/assets/Footer16.png',
  ]

  const footerRightLink = [
    'Our Philosophy','About Us','Residential Developments','Commercial Developments','Contact Us'
  ]

  const footerLeftLink = [
    {
      icon:'bi-geo-alt',
      label:'Lotus Tower, Road No. 12 A'
    },
    {
      icon:'bi-envelope',
      label:'sales@lotusdevelopers.com'
    },
    {
      icon:'bi-telephone',
      label:'+91-9987509311'
    }
  ]

  return (
    <div style={{ backgroundColor: '#080404' }}>

      <div className="px-5 fw-light">
        <ImageContainer imgHeight='400px' imgSrc="/assets/Banner1.jpg" />
        <div className="row mt-2">
          <div className="col lotus-text-grey" >
            <div className='fw-light' style={{ fontSize: '45px' }}>
              Mumbai's Premier <br /> Real Estate Developers
            </div>
            <div className='mb-2' style={{ fontSize: '28px' }}>
              {/* <span style={{height:'42px',width:'42px', backgroundColor:'white',borderRadius: '50%'}}> */}
              {/* <i className="bi bi-telephone me-2" style={{ fontSize: '24px' }}></i> */}
              {/* </span> */}

              <div className='d-flex my-3'>
              <div className='text-center rounded-circle ' style={{width:'40px', height:'40px', backgroundColor: 'white'}}>
              <i class={`bi bi-telephone-fill  fs-3 `} style={{color:'black'}}></i>
              </div>
              <div className='ms-2'>Contact us</div>
              </div>
            </div>
            <span className='lotus-text-golden fw-normal lotus-box px-4  py-1' style={{ fontSize: '28px' }}>
              Find Your Property
            </span>

          </div>
          <div className="col">
            <div className='lotus-text-grey ' style={{ width: '350px', fontSize: '18px' }}>
              Impressive portfolio of residential, office, and mixed-use properties
            </div>
            <div className='text-white fw-normal' style={{ fontSize: '110px', lineHeight: 1 }}>
              Lotus Developers
            </div>

          </div>
        </div>


        <div id="carouselExampleSlidesOnly " className="carousel slide mt-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            {
              aboutArray.map((aboutData, index) => {
                return (
                  <div className={`carousel-item ${index == 0 ? 'active' : ''}`} data-bs-interval={2000}>
                    <div className="row mt-5">
                      <div className="col-7 ">
                        <img src={aboutData.imgPath} width='100%' />
                      </div>
                      <div className="col-5 text-white">
                        <div className='mt-5'>
                          <div className='fw-normal' style={{ fontSize: '50px' }}>{aboutData.heading}</div>
                          <div className='fw-medium mt-3' style={{ fontSize: '25px' }}>{aboutData.subHeading}</div>
                          <div style={{ width: '400px', fontSize: '20px' }}>
                            {aboutData.description}
                          </div>
                          <div className='mt-3' style={{ position: 'relative', }} >
                            <button style={{ position: 'absolute', border: 'none', background: 'none', padding: 0, cursor: 'pointer', color: 'white' }}>
                              <div >NEXT</div>
                            </button>
                            <img style={{ position: 'absolute', width: '50px', top: '20px' }} src='/assets/icons/Arrow.png' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>

        </div>

        <ImageContainer imgHeight='400px' imgSrc="/assets/Banner2.jpg" />
        <div className="row mt-3 ">
          <div className="col-5 text-white" >
            <div className='fw-normal lh-1' style={{ fontSize: '50px' }}>Residential Developments</div>



          </div>
          <div className="col-7 text-white ">
            <div style={{ fontSize: '36px' }}>The Atlantis</div>
            <div className='lh-1.2' style={{ fontSize: '24px' }}>
              Atlantis is a one-of-a-kind project. It's uniqueness comes from the sheer scale and grandness of it. Limited 36 residences will be home to Mumbai's elite families. Flourished with an endless list of amenities, Atlantis caters to your every need.
            </div>


          </div>
        </div>


        <div className="row mt-5 pt-5">
          <div className="col-5 text-white" >
            <div className='mt-5 pt-5 ms-5'>
              <div className='fw-normal mt-5 lh-1' style={{ fontSize: '50px' }}>Commercial Developments</div>

              <div className='fw-medium lh-1.5 my-2' style={{ fontSize: '32px' }}>Lotus Corporate Park - LCP</div>

              <div className='lh-1.2' style={{ fontSize: '24px', width: '400px' }}>
                LCP is one of the largest commercial projects in Asia based on square footage. It is an amalgamation of the finest amenities complementing large flexible office spaces. LCP houses the head offices of many Fortune 500 multinationals like Deloitte and Heinze.
              </div>
            </div>




          </div>
          <div className="col-7 text-white ">
            <ImageContainer imgHeight='800px' imgSrc="/assets/Banner3.jpg" />


          </div>
        </div>
      </div>

      <div className=' row mt-5'>
          {FooterArray.map(footerImg=>{
            return(
              <div className='col-3 p-0'>
              <img src={footerImg} width='100%' alt="" />
            </div>
          )
          })}
          

      </div>

      <div className='container px-5 text-white'>
          <div className='mx-5 mt-5 py-5 row'>
            <div className='col-4 '>
              {footerLeftLink.map(data=>{
                return(
                  <div className='my-4 d-flex'>
              <div className='text-center rounded-circle ' style={{width:'48px', height:'48px', backgroundColor: '#D8953C'}}>
              <i class={`bi ${data.icon} fs-2`} style={{color:'black'}}></i>
              </div>
              <div className='ps-2  d-flex align-items-center fs-6 lh-1'>{data.label} </div>
              </div>
                )
              })}
              
              
              

            
            </div>
            <div className='col-4 text-center'>
              <img src='/assets/Logo.png' width='250px' />
            </div>
            <div className='col-4 pt-4' >
              {footerRightLink.map(data=>{
                return(
                  <div className='my-2'>
                  <img src='/assets/icons/ArrowBullet.png'/>
            <span className='ms-2' style={{fontSize: '20px'}}>{data}</span>
                  </div>
            
                )
              })}
            
            </div>
          </div>
      </div>


    </div>
  )
}

export default Home