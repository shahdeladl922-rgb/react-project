
import { Link } from "react-router"
import styles from "./Home.module.css"
import article1 from '../../../assets/images/article1.jpeg'
import article2 from '../../../assets/images/article2.jpeg'
import salm from '../../../assets/images/salmAhmed.jpeg'
import salam from '../../../assets/images/salam.jpeg'
import mohamed from '../../../assets/images/mohamedAli.jpeg'
import ibrahim from '../../../assets/images/ibrahimHassan.jpeg'
import salPic from '../../../assets/images/salamPicture.jpeg'
import recArt from '../../../assets/images/recentArticle1.jpeg'
import dawoud from '../../../assets/images/dawoud.jpeg'
import photo1 from '../../../assets/images/photograph.jpeg'
import lith from '../../../assets/images/lith.jpeg'
import gaml from '../../../assets/images/gaml.jpeg'
import tech from '../../../assets/images/tech.jpeg'
import posts from '../../../../src/data/posts'


function Home() {




    return (
        <>
            <section className={`${styles.sectionHeader} position-relative overflow-hidden `}>
                <div className={`${styles.glow} `}></div>
                <div className={`${styles.glow2} `}></div>
                <div className="container ">
                    <div className="text-center d-flex flex-column justify-content-center align-items-center mx-auto">
                        <div className={`${styles.sectionLabel2} rounded-pill d-flex gap-2 align-items-center`}>
                            <span className="position-relative d-flex align-items-center ">
                                <span className={`${styles.cricle1} `}></span>
                                <span className={`${styles.cricle2} `}></span>
                            </span>
                            <span className={`white1 f14-500 pe-2`}>مرحباً بك في عدسة</span>
                        </div>

                        <h1 className="f48-700 line-height mb-3">
                            <span>اكتشف </span>

                            <span className="gradient-text">فن</span>
                            <br />
                            التصوير الفوتوغرافي
                        </h1>
                        <p className="mb-4 f20-400 gray">انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>

                        <div className="d-flex flex-column justify-content-center align-items-center gap-3 w-100 mb-5 flex-md-row ">
                            <Link to={"/blog"} className={`${styles.anchorBlog} ${styles.btnResponsive} rounded-pill text-decoration-none  d-flex justify-content-center align-items-center gap-2`}>
                                <span className="white f16-600">استكشف المقالات</span>
                                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Link>

                            <Link to={"/about"} className={`${styles.anchorAbout} ${styles.btnResponsive} rounded-pill text-decoration-none  d-flex justify-content-center align-items-center gap-2`}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span className="white f16-600">اعرف المزيد</span>
                            </Link>
                        </div>


                       
                    </div>
 <div className="row  gy-4 text-center mx-150">
                            <div className="col-6 col-md-3 ">
                                <div className={`${styles.num1} bg-header`}>
                                    <i className={`${styles.icon} fa-solid fa-newspaper`}></i>
                                    <p className="mb-0 f24-700 gradient-text">+50</p>
                                    <p className="mb-0 f14-400 white1">مقالة</p></div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className={`${styles.num1} bg-header`}>
                                    <i className={`${styles.icon} fa-solid fa-users`}></i>
                                    <p className="mb-0 f24-700 gradient-text">+10ألف</p>
                                    <p className="mb-0 f14-400 white1">قارئ</p></div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className={`${styles.num1} bg-header`}>
                                    <i className={`${styles.icon} fa-solid fa-folder-open`}></i>
                                    <p className="mb-0 f24-700 gradient-text">4</p>
                                    <p className="mb-0 f14-400 white1">تصنيفات</p></div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className={`${styles.num1} bg-header`}>
                                    <i className={`${styles.icon} fa-solid fa-pen-nib`}></i>
                                    <p className="mb-0 f24-700 gradient-text">6</p>
                                    <p className="mb-0 f14-400 white1">كاتب</p></div>
                            </div>

                        </div>
                </div>

            </section>


            <section className={`${styles.sectionArticle} position-relative overflow-hidden `}>
                <div></div>
                <div className="container">

                    <div className="mb-5 d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between ">
                        <div>
                            <div className={`${styles.sectionLabel2} rounded-pill d-flex gap-2 align-items-center`}>
                                <span className="position-relative d-flex align-items-center ">
                                    <span className={`${styles.cricle1} `}></span>
                                    <span className={`${styles.cricle2} `}></span>
                                </span>
                                <span className={`orange f14-500 pe-2`}>  مميز </span>
                            </div>
                            <h2 className="f36-700 white mt-3">مقالات مختارة</h2>
                            <p className="f18-400 gray">محتوى منتقى لبدء رحلة تعلمك</p>
                        </div>


                        <Link to={"/blog"} className={`${styles.anchorAll} text-decoration-none white f16-500 `}>عرض الكل
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </Link>
                    </div>




                    <article className="position-relative mb-4">
                        <Link to={`/blog/mastering-golden-hour-photography`} className={` text-decoration-none `}>
                            <div className={`${styles.article1} d-flex flex-column flex-md-row`}>
                                <div className=" position-relative ">
                                    <img src={article1} alt="" className={`${styles.articleImage} img-fluid w-100 h-100`} />
                                    <div className={`${styles.articleStyle} position-absolute`}></div>
                                    <div className={`${styles.special}`}>
                                        <span className={`${styles.special2} rounded-pill f12-400 white`}>
                                            <svg className="" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            مميز
                                        </span>
                                    </div>
                                </div>
                                <div className={`${styles.part2} d-flex flex-column justify-content-center position-relative pt-3`}>

                                    <div className="d-flex align-items-center mb-3">
                                        <span className={`${styles.category} f12-600 orangeRed rounded-pill`}>إضاءة</span>
                                        <span className={`${styles.time} f14-400 gray1 `}><svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            8 دقائق للقراءة
                                        </span>
                                    </div>

                                    <h2 className="f24-700 white mb-3">إتقان تصوير الساعة الذهبية: دليل شامل</h2>
                                    <p className="f16-400 gray">تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.</p>

                                    <div className="d-flex align-items-center justify-content-between ">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="position-relative">
                                                <img src={salm} alt="" className={`${styles.imageStyle}`} />
                                                <div className={`${styles.dot}`}>

                                                </div>
                                            </div>
                                            <div>
                                                <p className="f14-600 white mb-0">سالم أحمد</p>
                                                <p className="f12-400 gray1 mb-0">١٥ يناير ٢٠٢٦</p>
                                            </div>
                                        </div>
                                        <span className={`${styles.read} orangeRed f14-600 d-flex align-items-center `}> <span>اقرأ المقال</span>
                                            <svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </span>
                                    </div>

                                </div>

                            </div>
                        </Link>
                    </article>
                    <article className="position-relative mb-4">
                        <Link to={`/blog/portrait-photography-secrets`} className={` text-decoration-none `}>
                            <div className={`${styles.article1} d-flex flex-column flex-md-row`}>
                                <div className=" position-relative ">
                                    <img src={salam} alt="" className={`${styles.articleImage} img-fluid w-100 h-100`} />
                                    <div className={`${styles.articleStyle} position-absolute`}></div>
                                    <div className={`${styles.special}`}>
                                        <span className={`${styles.special2} rounded-pill f12-400 white`}>
                                            <svg className="" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            مميز
                                        </span>
                                    </div>
                                </div>
                                <div className={`${styles.part2} d-flex flex-column justify-content-center position-relative pt-3`}>

                                    <div className="d-flex align-items-center mb-3">
                                        <span className={`${styles.category} f12-600 orangeRed rounded-pill`}>بورتريه</span>
                                        <span className={`${styles.time} f14-400 gray1 `}><svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            6 دقائق للقراءة
                                        </span>
                                    </div>

                                    <h2 className="f24-700 white mb-3">أسرار تصوير البورتريه: كيف تلتقط روح الشخصية</h2>
                                    <p className="f16-400 gray">اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.</p>

                                    <div className="d-flex align-items-center justify-content-between ">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="position-relative">
                                                <img src={mohamed} alt="" className={`${styles.imageStyle}`} />
                                                <div className={`${styles.dot}`}>

                                                </div>
                                            </div>
                                            <div>
                                                <p className="f14-600 white mb-0"> محمد علي</p>
                                                <p className="f12-400 gray1 mb-0">  ١٢ يناير ٢٠٢٦</p>
                                            </div>
                                        </div>
                                        <span className={`${styles.read} orangeRed f14-600 d-flex align-items-center `}> <span>اقرأ المقال</span>
                                            <svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </span>
                                    </div>

                                </div>

                            </div>
                        </Link>
                    </article>
                    <article className="position-relative">
                        <Link to={`/blog/landscape-photography-guide`} className={` text-decoration-none `}>
                            <div className={`${styles.article1} d-flex flex-column flex-md-row`}>
                                <div className=" position-relative ">
                                    <img src={article2} alt="" className={`${styles.articleImage} img-fluid w-100 h-100`} />
                                    <div className={`${styles.articleStyle} position-absolute`}></div>
                                    <div className={`${styles.special}`}>
                                        <span className={`${styles.special2} rounded-pill f12-400 white`}>
                                            <svg className="" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            مميز
                                        </span>
                                    </div>
                                </div>
                                <div className={`${styles.part2} d-flex flex-column justify-content-center position-relative pt-3`}>

                                    <div className="d-flex align-items-center mb-3">
                                        <span className={`${styles.category} f12-600 orangeRed rounded-pill`}>مناظر طبيعية</span>
                                        <span className={`${styles.time} f14-400 gray1 `}><svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            10 دقائق للقراءة
                                        </span>
                                    </div>

                                    <h2 className="f24-700 white mb-3">دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف</h2>
                                    <p className="f16-400 gray">  استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.</p>

                                    <div className="d-flex align-items-center justify-content-between ">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="position-relative">
                                                <img src={ibrahim} alt="" className={`${styles.imageStyle}`} />
                                                <div className={`${styles.dot}`}>

                                                </div>
                                            </div>
                                            <div>
                                                <p className="f14-600 white mb-0"> إبراهيم حسن</p>
                                                <p className="f12-400 gray1 mb-0">  ١٠ يناير ٢٠٢٦</p>
                                            </div>
                                        </div>
                                        <span className={`${styles.read} orangeRed f14-600 d-flex align-items-center `}> <span>اقرأ المقال</span>
                                            <svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </span>
                                    </div>

                                </div>

                            </div>
                        </Link>
                    </article>






                </div>
            </section>


            <section className={`${styles.sectionCategory}  `}>
                <div className="container ">
                    <div className="d-flex flex-column align-items-center justify-content-center mb-4 text-center">
                        <div className={`${styles.sectionLabel2} rounded-pill d-flex gap-2 align-items-center`}>
                            <span className="position-relative d-flex align-items-center ">
                                <span className={`${styles.cricle1} `}></span>
                                <span className={`${styles.cricle2} `}></span>
                            </span>
                            <span className={`orange f14-500 pe-2`}>  التصنيفات </span>
                        </div>
                        <h2 className="f36-700 white">استكشف حسب الموضوع</h2>
                        <p className="f18-400 gray">اعثر على محتوى مصمم حسب اهتماماتك</p>
                    </div>

                    <div className="row gy-4">
                        <div className="col-6 col-md-3">
                            <Link to={"/blog?category=إضاءة"} className="text-decoration-none">
                                <div className={`${styles.anchorCat} ${styles.anchorCatGradient} position-relative`}>
                                    <div className={`${styles.anchorIcon} d-flex justify-content-center align-items-center mb-3`}><i className="fa-solid fa-sun orangeRed"></i></div>
                                    <h3 className="white f18-700 mb-1">إضاءة</h3>
                                    <p className="gray f14-400 mb-0">3

                                        مقالة
                                    </p>
                                    <div className={`${styles.anchorArrow} d-flex justify-content-center align-items-center`}><svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div>
                                </div>
                            </Link>

                        </div>


                        <div className="col-6 col-md-3">
                            <Link to={"/blog?category=بورتريه"} className="text-decoration-none">
                                <div className={`${styles.anchorCat} ${styles.anchorCatGradient2} position-relative`}>
                                    <div className={`${styles.anchorIcon} d-flex justify-content-center align-items-center mb-3`}><i className="fa-solid fa-user orangeRed"></i></div>
                                    <h3 className="white f18-700 mb-1">بورتريه</h3>
                                    <p className="gray f14-400 mb-0">3

                                        مقالة
                                    </p>
                                    <div className={`${styles.anchorArrow} d-flex justify-content-center align-items-center`}><svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div>
                                </div>
                            </Link>

                        </div>



                        <div className="col-6 col-md-3">
                            <Link to={"/blog?category=مناظر طبيعية"} className="text-decoration-none">
                                <div className={`${styles.anchorCat} ${styles.anchorCatGradient} position-relative`}>
                                    <div className={`${styles.anchorIcon} d-flex justify-content-center align-items-center mb-3`}><i className="fa-solid fa-mountain-sun orangeRed"></i></div>
                                    <h3 className="white f18-700 mb-1">مناظر طبيعية</h3>
                                    <p className="gray f14-400 mb-0">2

                                        مقالة
                                    </p>
                                    <div className={`${styles.anchorArrow} d-flex justify-content-center align-items-center`}><svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div>
                                </div>
                            </Link>

                        </div>



                        <div className="col-6 col-md-3">
                            <Link to={"/blog?category=تقنيات"} className="text-decoration-none">
                                <div className={`${styles.anchorCat} ${styles.anchorCatGradient} position-relative`}>
                                    <div className={`${styles.anchorIcon} d-flex justify-content-center align-items-center mb-3`}><i className="fa-solid fa-sliders orangeRed"></i></div>
                                    <h3 className="white f18-700 mb-1">تقنيات</h3>
                                    <p className="gray f14-400 mb-0">5

                                        مقالة
                                    </p>
                                    <div className={`${styles.anchorArrow} d-flex justify-content-center align-items-center`}><svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div>
                                </div>
                            </Link>

                        </div>



                        <div className="col-6 col-md-3">
                            <Link to={"/blog?category=معدات"} className="text-decoration-none">
                                <div className={`${styles.anchorCat} ${styles.anchorCatGradient} position-relative`}>
                                    <div className={`${styles.anchorIcon} d-flex justify-content-center align-items-center mb-3`}><i className="fa-solid fa-sun orangeRed"></i></div>
                                    <h3 className="white f18-700 mb-1">معدات</h3>
                                    <p className="gray f14-400 mb-0">3

                                        مقالة
                                    </p>
                                    <div className={`${styles.anchorArrow} d-flex justify-content-center align-items-center`}><svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div>
                                </div>
                            </Link>

                        </div>

                    </div>
                </div>
            </section>

            <section className={`${styles.recentArticle} position-relative overflow-hidden `}>
                <div className={`${styles.glowSection}  `}></div>
                <div className="container">
                    <div className={`${styles.sectionLabel2} rounded-pill d-flex gap-2 align-items-center mb-3`}>
                        <span className="position-relative d-flex align-items-center ">
                            <span className={`${styles.cricle1} `}></span>
                            <span className={`${styles.cricle2} `}></span>
                        </span>
                        <span className={`white1 f14-500 pe-2`}>
                            الأحدث </span>
                    </div>
                    <h2 className="f36-700 white">أحدث المقالات</h2>
                    <p className="f18-400 gray mb-2">محتوى جديد طازج من المطبعة</p>
                    <Link to={"/blog"} className={`${styles.hoverAnchor} text-decoration-none orangeRed d-flex gap-2 align-items-center mb-4`}>
                        عرض جميع المقالات
                        <svg className={`${styles.arrow} orangeRed`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </Link>

                    <div className="row gy-4">
                        <div className="col-md-6 col-lg-4">
                            <article className={`${styles.recentArt1}  position-relative overflow-hidden`}>
                                <Link to={"/blog/camera-settings-basics"} className="text-decoration-none">
                                    <div className=" position-relative overflow-hidden">
                                        <img src={recArt} alt="" className={`${styles.articleRecentImage} img-fluid w-100 h-100`} />
                                        <div className={`${styles.articleStyle} position-absolute`}></div>
                                        <div className={`${styles.special}`}>
                                            <span className={`${styles.special4} rounded-pill f12-400 white`}>
                                                تقنيات
                                            </span>
                                        </div>
                                    </div>

                                    <div className={`${styles.partRecent}`}>
                                        <div className="mb-3 d-flex gap-2 align-items-center">
                                            <span className="f14-400 gray1">
                                                <svg className={`${styles.clock}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                7 دقائق للقراءة
                                            </span>
                                            <span className={`${styles.dot0}`}></span>
                                            <span className="f14-400 gray1">٨ يناير ٢٠٢٦</span>
                                        </div>
                                        <h3 className="f20-700 white mb-3">أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي</h3>
                                        <p className="f14-400 gray">افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.</p>
                                        <div className={`${styles.borderTop} d-flex justify-content-between align-items-center`}>
                                            <div className="d-flex align-items-center gap-2 mt-3">
                                                <img src={dawoud} alt="" className={`${styles.dawoudImage}`} />
                                                <div>
                                                    <p className="f14-500 white mb-0">داود خالد</p>
                                                    <p className="f12-400 gray1 mb-0">مدرب تصوير</p>
                                                </div>
                                            </div>
                                            <div className={`${styles.arrowArt} d-flex justify-content-center align-items-center`}><svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div>
                                        </div>
                                    </div>


                                </Link>

                            </article>

                        </div>



                        <div className="col-md-6 col-lg-4">
                            <article className={`${styles.recentArt1}  position-relative overflow-hidden`}>
                                <Link to={"/blog/photo-composition-rules"} className="text-decoration-none">
                                    <div className=" position-relative overflow-hidden">
                                        <img src={photo1} alt="" className={`${styles.articleRecentImage} img-fluid w-100 h-100`} />
                                        <div className={`${styles.articleStyle} position-absolute`}></div>
                                        <div className={`${styles.special}`}>
                                            <span className={`${styles.special4} rounded-pill f12-400 white`}>
                                                تقنيات
                                            </span>
                                        </div>
                                    </div>

                                    <div className={`${styles.partRecent}`}>
                                        <div className="mb-3 d-flex gap-2 align-items-center">
                                            <span className="f14-400 gray1">
                                                <svg className={`${styles.clock}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                9 دقائق للقراءة
                                            </span>
                                            <span className={`${styles.dot0}`}></span>
                                            <span className="f14-400 gray1">٥ يناير ٢٠٢٦</span>
                                        </div>
                                        <h3 className="f20-700 white mb-3">قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية</h3>
                                        <p className="f14-400 gray">تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.</p>
                                        <div className={`${styles.borderTop} d-flex justify-content-between align-items-center`}>
                                            <div className="d-flex align-items-center gap-2 mt-3">
                                                <img src={lith} alt="" className={`${styles.dawoudImage}`} />
                                                <div>
                                                    <p className="f14-500 white mb-0"> ليث محمود</p>
                                                    <p className="f12-400 gray1 mb-0"> فنان بصري</p>
                                                </div>
                                            </div>
                                            <div className={`${styles.arrowArt} d-flex justify-content-center align-items-center`}><svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div>
                                        </div>
                                    </div>


                                </Link>

                            </article>

                        </div>




                        <div className="col-md-6 col-lg-4">
                            <article className={`${styles.recentArt1}  position-relative overflow-hidden`}>
                                <Link to={"/blog/mobile-photography-tips"} className="text-decoration-none">
                                    <div className=" position-relative overflow-hidden">
                                        <img src={tech} alt="" className={`${styles.articleRecentImage} img-fluid w-100 h-100`} />
                                        <div className={`${styles.articleStyle} position-absolute`}></div>
                                        <div className={`${styles.special}`}>
                                            <span className={`${styles.special4} rounded-pill f12-400 white`}>
                                                معدات
                                            </span>
                                        </div>
                                    </div>

                                    <div className={`${styles.partRecent}`}>
                                        <div className="mb-3 d-flex gap-2 align-items-center">
                                            <span className="f14-400 gray1">
                                                <svg className={`${styles.clock}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                7 دقائق للقراءة
                                            </span>
                                            <span className={`${styles.dot0}`}></span>
                                            <span className="f14-400 gray1">٨ يناير ٢٠٢٦</span>
                                        </div>
                                        <h3 className="f20-700 white mb-3">تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك</h3>
                                        <p className="f14-400 gray">اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.</p>
                                        <div className={`${styles.borderTop} d-flex justify-content-between align-items-center`}>
                                            <div className="d-flex align-items-center gap-2 mt-3">
                                                <img src={gaml} alt="" className={`${styles.dawoudImage}`} />
                                                <div>
                                                    <p className="f14-500 white mb-0"> جمال عبدالله</p>
                                                    <p className="f12-400 gray1 mb-0"> مصور ومراجع تقني</p>
                                                </div>
                                            </div>
                                            <div className={`${styles.arrowArt} d-flex justify-content-center align-items-center`}><svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div>
                                        </div>
                                    </div>


                                </Link>

                            </article>

                        </div>




                    </div>

                </div>
            </section>


            <section className={`${styles.sectionSub} position-relative px-150`}>
                <div className={`${styles.glowSub}`}></div>
                <div className="container">
                    <div className={`${styles.form} text-center d-flex flex-column align-items-center justify-content-center`}>
                        <div className={`${styles.iconEmail} d-flex align-items-center justify-content-center mb-4`}><svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
                        <h2 className="white f30-700">اشترك في <span>نشرتنا الإخبارية</span></h2>
                        <p className="f18-400 gray">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
                        <form action="" className="w-100 d-flex flex-column gap-2 flex-sm-row justify-content-center mb-3">
                            <input type="email" placeholder="أدخل بريدك الإلكتروني" className={`${styles.inputForm}  f16-400  col-sm-6  col-lg-5`} />
                            <button type="submit" className={`${styles.btnForm} f16-600`} >اشترك الآن</button>
                        </form>
                        <div className="d-flex justify-content-between align-items-center gap-2">
                            <div className="d-flex gap-2 align-items-center">
                                <div className="d-flex ">
                                    <img src={salPic} alt="" className={`${styles.imageForm} ${styles.margin} z-0`} />
                                    <img src={mohamed} alt="" className={`${styles.imageForm} z-1 `} />
                                    <img src={ibrahim} alt="" className={`${styles.imageForm}`} />
                                </div>
                                <span className="gray1 f14-400">
                                    انضم لـ
                                    <span className="white">+10,000</span>
                                    مصور
                                </span>
                            </div>
                            <span className="d-none d-md-block">•</span>
                            <span className="gray1 f14-400">بدون إزعاج</span>
                            <span className="d-none d-md-block">•</span>
                            <span className="gray1 f14-400">إلغاء الاشتراك في أي وقت</span>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home