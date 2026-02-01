import styles from './Navbar.module.css'
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router'
import { useState } from 'react';

function Navbar() {


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>

      <nav className={`${styles.navbar} fixed-top`}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <a href="" className="text-decoration-none d-flex align-items-center gap-2">
              <div>
                <img src={logo} alt="" className={styles.logoImage} />
              </div>
              <div>
                <span className={`${styles.textNavdar} ${styles.f20}`}>عدسة</span>
                <span className={`${styles.f12} ${styles.orange} d-none d-md-block`}>عالم التصوير الفوتوغرافي</span>
              </div>
            </a>

            <div className='d-none d-md-flex align-items-center'>
              <div className={`${styles.anchors} d-flex align-items-center rounded-pill gap-2`}>
                <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.anchorIsActive} f14-500 gray text-decoration-none rounded-pill` : `${styles.anchorNotActive} f14-500 gray text-decoration-none`}>الرئيسية</NavLink>
                <NavLink to="/blog" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.anchorIsActive} f14-500 gray text-decoration-none rounded-pill` : `${styles.anchorNotActive} f14-500 gray text-decoration-none`}>المدونة</NavLink>
                <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.anchorIsActive} f14-500 gray text-decoration-none rounded-pill` : `${styles.anchorNotActive} f14-500 gray text-decoration-none`}>من نحن</NavLink>
              </div>
            </div>


            <div className={`d-none d-md-flex align-items-center gap-2`}>
              <button className={`${styles.btnSearch}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
              <Link to={'/blog'} className={`${styles.anchorRead} ${styles.f146} text-decoration-none rounded-pill`} >ابدأ القراءة</Link>
            </div>

            <button onClick={toggleMenu} className={`${styles.btnNavbar} d-md-none`}>
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>






          </div>


          {menuOpen && (
            <div className='mt-3 d-lg-none'>
              <div className={`${styles.linkDiv} ${menuOpen ? styles.show : ''}`}>
                <div className='d-flex flex-column gap-2'>
                  <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.linkNavActive} f14-500 gray text-decoration-none` : `${styles.linkNav} f14-500 gray text-decoration-none`}>الرئيسية</NavLink>
                  <NavLink to="/blog" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.linkNavActive} f14-500 gray text-decoration-none` : `${styles.linkNav} f14-500 gray text-decoration-none`}>المدونة</NavLink>
                  <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.linkNavActive} f14-500 gray text-decoration-none ` : `${styles.linkNav} f14-500 gray text-decoration-none`}>من نحن</NavLink>
                  <NavLink to="/blog" onClick={closeMenu} className={`${styles.startRead} text-center rounded-pill f14-600 gray text-decoration-none`}>ابدأ القراءة</NavLink>
                </div>
              </div>
            </div>
          )}

        </div>
      </nav>

    </>
  )
}

export default Navbar