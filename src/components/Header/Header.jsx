import './Header.scss';

const Header = () => {
  const handleHomeClick = e => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };
  return (
    <header>
      <nav id='home' className='navbar navbar-expand-lg fixed-top p-3'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img
              className='nav-logo-img d-block w-100'
              src='https://res.cloudinary.com/cloudinary-h/image/upload/v1706369091/cg-klopp-tribute/Juergen_Klopp_sig_pwvdfe.svg'
              alt='Jürgen Klopp signature - navigate to homepage'
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
            aria-label='Toggle navigation'
            aria-expanded='false'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end'
            tabIndex='-1'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
          >
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                Logo
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                <li className='nav-item'>
                  <a
                    className='nav-link mx-lg-2 active'
                    aria-current='page'
                    href='#'
                    onClick={handleHomeClick}
                  >
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link mx-lg-2' href='#honours'>
                    Honours
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link mx-lg-2' href='#faq'>
                    FAQs
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link mx-lg-2' href='#memories'>
                    Memories
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
