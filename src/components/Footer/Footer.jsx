


import { Link } from 'react-router'
import styles from './Footer.module.css'

function Footer() {





  return (
    <>


      <footer className={`${styles.footer} overflow-hidden`}>
        <div className={`${styles.glow1} `}></div>
        <div className="container ">
          <div className="row gy-4">
            <div className="col-md-6 col-lg-3">
              <div>
                <a href="" className={`d-flex align-items-center gap-2 text-decoration-none mb-3`}>
                  <div className={`${styles.footerLogo} d-flex align-items-center justify-content-center`}><span className={`${styles.f20}  ${styles.white}`}>ع</span></div>
                  <span className={`${styles.f20} ${styles.white}`}>عدسة</span>
                </a>
                <p className={`${styles.f14} ${styles.gray}`}>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>
                <div className=' d-flex align-items-center gap-2'>
                  <a href="" className={`${styles.linkExtrnal} text-decoration-none d-flex align-items-center justify-content-center`}><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a>
                  <a href="" className={`${styles.linkExtrnal} text-decoration-none d-flex align-items-center justify-content-center`}><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg></a>
                  <a href="" className={`${styles.linkExtrnal} text-decoration-none d-flex align-items-center justify-content-center`}><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a>
                  <a href="" className={`${styles.linkExtrnal} text-decoration-none d-flex align-items-center justify-content-center`}><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg></a>
                </div>
              </div>
            </div>



            <div className='col-md-6 col-lg-3'>
              <div>
                <h3 className={`${styles.f16}  ${styles.white} d-flex align-items-center gap-2 mb-3`}>
                  <span className={`${styles.lineGradient}`}></span>
                  استكشف
                </h3>

                <ul className='list-unstyled pe-0'>
                  <li className='d-flex align-items-center gap-2 mb-2'>
                    <Link to={"/"} className={`${styles.f14} ${styles.gray} ${styles.arrowFooter} text-decoration-none`}>
                      <svg className=" " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      الرئيسية
                    </Link>
                  </li>
                  <li className='d-flex align-items-center gap-2 mb-2'>
                    <Link to={"/blog"} className={`${styles.f14} ${styles.gray} ${styles.arrowFooter} text-decoration-none`}>
                      <svg className=" " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      المدونة
                    </Link>
                  </li>
                  <li className='d-flex align-items-center gap-2 mb-2'>
                    <Link to={"/about"} className={`${styles.f14} ${styles.gray} ${styles.arrowFooter} text-decoration-none`}>
                      <svg className=" " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      من نحن
                    </Link>
                  </li>
                </ul>

              </div>
            </div>


            <div className='col-md-6 col-lg-3'>
              <div>
                <h3 className={`${styles.f16}  ${styles.white} d-flex align-items-center gap-2 mb-3`}>
                  <span className={`${styles.lineGradient}`}></span>
                  التصنيفات
                </h3>

                <ul className='list-unstyled pe-0'>
                  <li className='d-flex align-items-center gap-2 mb-2'>
                    <Link to={"/blog?category=إضاءة"} className={`${styles.f14} ${styles.gray} ${styles.arrowFooter} text-decoration-none`}>
                      <svg className=" " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      إضاءة
                    </Link>
                  </li>
                  <li className='d-flex align-items-center gap-2 mb-2'>
                    <Link to={"/blog?category=بورتريه"} className={`${styles.f14} ${styles.gray} ${styles.arrowFooter} text-decoration-none`}>
                      <svg className=" " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      بورتريه
                    </Link>
                  </li>
                  <li className='d-flex align-items-center gap-2 mb-2'>
                    <Link to={"/blog?category=مناظر طبيعية"} className={`${styles.f14} ${styles.gray} ${styles.arrowFooter} text-decoration-none`}>
                      <svg className=" " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      مناظر طبيعية
                    </Link>
                  </li>
                  <li className='d-flex align-items-center gap-2 mb-2'>
                    <Link to={"/blog?category=تقنيات"} className={`${styles.f14} ${styles.gray} ${styles.arrowFooter} text-decoration-none`}>
                      <svg className=" " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      تقنيات
                    </Link>
                  </li>
                </ul>

              </div>
            </div>


            <div className='col-md-6 col-lg-3'>
              <div>
                <h3 className={`${styles.f16}  ${styles.white} d-flex align-items-center gap-2 mb-3`}>
                  <span className={`${styles.lineGradient}`}></span>
                  ابقى على اطلاع
                </h3>
                <p className={`${styles.f14} ${styles.gray}`}>اشترك للحصول على أحدث المقالات والتحديثات.</p>
                <form action="">
                  <div className={`mb-2`}>
                    <input type="email" placeholder='أدخل بريدك الإلكتروني' className={`${styles.f14} ${styles.grayDark} ${styles.inputCustom} w-100 font-body`} />
                  </div>
                  <button type='submit' className={`${styles.f146} ${styles.white} ${styles.btnSubscride} w-100 d-flex align-items-center justify-content-center rounded-pill`}>اشترك</button>
                </form>
              </div>

            </div>

          </div>


        </div>


        <div className={`${styles.bottomFooter} mt-5 `}>
          <div className={`container mt-3`}>
            <div className='d-flex flex-column align-items-center flex-md-row justify-content-between' >
              <p className={`${styles.f14} ${styles.gray}`}>© 2026 عدسة. صنع بكل
                <i className={`${styles.orange} fa-solid fa-heart`}></i>
                جميع الحقوق محفوظة.
              </p>
              <div className='d-flex gap-4 align-items-center'>
                <Link to={''} className={`${styles.gray} ${styles.f14} ${styles.linkFooter} text-decoration-none `}>سياسة الخصوصية</Link>
                <Link to={''} className={`${styles.gray} ${styles.f14} ${styles.linkFooter} text-decoration-none `}> شروط الخدمة</Link>
              </div>

            </div>

          </div>

        </div>
      </footer>



      <svg width="0" height="0">
        <defs>
          <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF4D07" />
            <stop offset="100%" stopColor="#EC6900" />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}

export default Footer