function Navigation( { activePage, handlePageChange }) {
    return (
        <>
            <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link onClick={ () => handlePageChange('about')}>
                  About
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link onClick={ () => handlePageChange('resume')}>
                  Resume
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link onClick={ () => handlePageChange('skill')}>
                  Skills
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link onClick={ () => handlePageChange('portfolio')}>
                  Portfolio
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link onClick={ () => handlePageChange('blog')}>
                  Gallery
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link onClick={ () => handlePageChange('contact')}>
                  Contact
                </button>
              </li>
              {/* <li className="navbar-item">
                <button className="navbar-link" data-nav-link>
                  Gallery
                </button>
              </li> */}
            </ul>
          </nav>
        </>
    )
}

export default Navigation