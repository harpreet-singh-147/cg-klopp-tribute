import './Hero.scss';

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='container px-sm-0'>
        <div className='row mb-1 text-center'>
          <div className='col-12 text-container'>
            <h1 className='display-3'>Thank you Jurgen</h1>
            <p className='lead w-75 m-auto'>Jurgen Norbert Klopp</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div
              id='carouselExampleIndicators'
              className='carousel slide'
              data-bs-ride='carousel'
            >
              <div className='carousel-indicators'>
                <button
                  type='button'
                  data-bs-target='#carouselExampleIndicators'
                  data-bs-slide-to='0'
                  className='active'
                  aria-current='true'
                  aria-label='Slide 1'
                ></button>
                <button
                  type='button'
                  data-bs-target='#carouselExampleIndicators'
                  data-bs-slide-to='1'
                  aria-label='Slide 2'
                ></button>
                <button
                  type='button'
                  data-bs-target='#carouselExampleIndicators'
                  data-bs-slide-to='2'
                  aria-label='Slide 3'
                ></button>
              </div>
              <div className='carousel-inner rounded-5'>
                <div className='carousel-item active'>
                  <img
                    src='https://res.cloudinary.com/cloudinary-h/image/upload/v1706369092/cg-klopp-tribute/klopp01.jpg'
                    className='d-block w-100 rounded-5'
                    alt='...'
                  />
                </div>
                <div className='carousel-item'>
                  <img
                    src='https://res.cloudinary.com/cloudinary-h/image/upload/v1706369092/cg-klopp-tribute/klopp02.jpg'
                    className='d-block w-100 rounded-5'
                    alt='...'
                  />
                </div>
                <div className='carousel-item'>
                  <img
                    src='https://res.cloudinary.com/cloudinary-h/image/upload/v1706395103/cg-klopp-tribute/klopp05.jpg'
                    className='d-block w-100 rounded-5'
                    alt='...'
                  />
                </div>
              </div>
              <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Previous</span>
              </button>
              <button
                className='carousel-control-next'
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
