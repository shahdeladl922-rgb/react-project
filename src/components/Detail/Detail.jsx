
import styles from './Detail.module.css'
import basem from '../../assets/images/basem.jpeg'
import maged from '../../assets/images/maged.jpeg'
import khaled from '../../assets/images/khaled.jpeg'
import picture1 from '../../assets/images/picture1 (1).jpeg'
import picture2 from '../../assets/images/picture1 (2).jpeg'
import picture3 from '../../assets/images/picture1 (3).jpeg'
import { Link, useParams } from 'react-router'
import posts from '../../../src/data/posts'

function Detail() {

    const { slug } = useParams();
    const post = posts.find(p => p.slug === slug);
    const paragraph = post.content.split("\n\n")
    console.log(paragraph);


    return (
        <>


            <article>

                <div className={`${styles.imageArticle} position-relative`}>

                    <img src={post.image} alt="" className='w-100 h-100 position-absolute object-fit-cover inset-0 pt-100' />
                    <div className={`${styles.bgGragient1} position-absolute inset-0 bg-transparent`}></div>
                    <div className={`${styles.bgGragient2} position-absolute inset-0 bg-transparent`}></div>

                    <div className={`${styles.position1} position-absolute`}>
                        <nav className={`${styles.navArticle} rounded-pill d-flex align-items-center gap-2`}>
                            <Link to={"/"} className={`${styles.anchor1} text-decoration-none d-flex align-items-center justify-content-center`}> <i className='fa-solid fa-home'></i></Link>
                            <i className={`${styles.arrow} fa-solid fa-chevron-left`}></i>
                            <Link to={'/blog'} className={`${styles.anchor2} text-decoration-none f14-400 grayWhite`}>المدونة</Link>
                            <i className={`${styles.arrow} fa-solid fa-chevron-left`}></i>
                            <span className='white f14-400 orange'>{post.category}</span>
                        </nav>
                    </div>

                    <div className={`${styles.position2} position-absolute`}>
                        <div>
                            <div className='mb-3'>
                                <Link to={`/blog/${post.slug}`} className={`${styles.ancCategory} text-decoration-none rounded-pill f14-700 white`}>{post.category}</Link>
                                <div className='d-flex align-items-center gap-2 mt-3'>
                                    <span className='f14-400 grayWhite d-flex align-items-center gap-2'>
                                        <i className='fa-regular fa-calendar'></i>
                                        {post.date}
                                    </span>
                                    <span className='f14-400 grayWhite d-flex align-items-center gap-2'>
                                        <i className='fa-regular fa-clock'></i>
                                        {post.readTime}
                                    </span>
                                </div>
                            </div>


                            <h1 className='f30-700 white'> {post.title}</h1>

                            <div className={`${styles.writerName} d-flex align-items-center gap-2 mt-2`}>
                                <img src={post.author.avatar} alt={post.author.name} />
                                <div className=''>
                                    <p className='f16-700 white mb-0'>{post.author.name} </p>
                                    <p className='f14-400 gray mb-0'>{post.author.role} </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='container'>
                    <div className='row gy-4'>
                        <div className={` mt-4 order-2 order-lg-1 col-lg-9`}>
                            <div className={`${styles.desription} mb-4 mt-4`}>
                                <p className='f18-400 grayWhite font-italic'> {post.excerpt}</p>
                            </div>



                            {paragraph.map((item, idx) => {
                                if (item.startsWith("## ")) {

                                    return (
                                        <h2
                                            key={idx}
                                            className='f24-700 d-flex gap-2 align-items-center white mb-3'
                                            id={`section${idx}`}
                                        >
                                            <span className={`${styles.camera} d-flex align-items-center justify-content-center`}>
                                                <i className='fa-solid fa-camera orangeRed'></i>
                                            </span>
                                            {item.replace("## ", "")}
                                        </h2>
                                    );
                                } else {

                                    return (
                                        <p key={idx} className='f18-400 gray mb-5'>
                                            {item}
                                        </p>
                                    );
                                }
                            }
                            )
                            }

                            <div className={`${styles.dash} mt-5`}>
                                <div className='d-flex align-items-center gap-2 mb-4'>
                                    <div className={`${styles.wesam} d-flex justify-content-center align-items-center`}>
                                        <i className='fa-solid fa-tags orangeRed'></i>
                                    </div>
                                    <h3 className='f16-700 white mb-0'>الوسوم</h3>
                                </div>
                                <div className='d-flex flex-wrap gap-2'>
                                    <span className={`${styles.light} rounded-pill gray f14-400`}>#{post.tags[2]}</span>
                                    <span className={`${styles.light} rounded-pill gray f14-400`}>#{post.tags[1]} </span>
                                    <span className={`${styles.light} rounded-pill gray f14-400`}>#{post.tags[0]} </span>
                                </div>
                            </div>


                            <div className={`${styles.dash} mt-4`}>
                                <div className='d-flex flex-column gap-3 flex-sm-row justify-content-sm-between align-items-sm-center'>
                                    <div className='d-flex align-items-center gap-2 '>
                                        <div className={`${styles.wesam} d-flex justify-content-center align-items-center`}>
                                            <i className='fa-solid fa-share-nodes orangeRed'></i>
                                        </div>
                                        <h3 className='f16-700 white mb-0 '>شارك المقال</h3>
                                    </div>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <button className={`${styles.btnSocial} ${styles.btnHover1}`}><i className={`${styles.icon} fa-brands fa-x-twitter gray`}></i></button>
                                        <button className={`${styles.btnSocial} ${styles.btnHover2}`}><i className={`${styles.icon} fa-brands fa-linkedin-in gray`}></i></button>
                                        <button className={`${styles.btnSocial} ${styles.btnHover3}`}><i className={`${styles.icon} fa-brands fa-whatsapp gray`}></i></button>
                                        <button className={`${styles.btnSocial} ${styles.btnHover4}`}><i className={`${styles.icon} fa-solid fa-link gray`}></i></button>
                                    </div>
                                </div>
                            </div>


                            <div className={`${styles.writer} mt-4`}>
                                <div className='d-flex flex-column align-items-center justify-content-center flex-md-row gap-2 justify-content-md-start gap-md-3 align-items-md-center'>
                                    <img src={post.author.avatar} alt="" className={`${styles.imageWriter} mb-3`} />
                                    <div className='text-center text-md-end'>
                                        <span className='f12-600 orangeRed '>كاتب المقال</span>
                                        <h3 className='f20-700 white mt-2'>{post.author.name}</h3>
                                        <p className='f14-400 gray1 mb-2'>{post.author.name} </p>
                                        <p className='f14-400 gray mb-0'>مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>
                                    </div>
                                </div>
                            </div>

                        </div>




                        <aside className='order-1 order-lg-2 col-lg-3 '>
                            <div className={`${styles.sticky} mt-4`}>



                                <div className={`${styles.include} mb-4`}>
                                    <div className='d-flex align-items-center gap-2 mb-3'>
                                        <div className={`${styles.wesam} d-flex align-items-center justify-content-center`}>
                                            <i className='fa-solid fa-list orangeRed'></i>
                                        </div>
                                        <h3 className='f16-700 white'>محتويات المقال</h3>
                                    </div>

                                    <nav>
                                        {paragraph
                                            .map((item, idx) => ({ text: item, index: idx }))
                                            .filter(item => item.text.startsWith("## "))
                                            .map((item, i) => (
                                                <a
                                                    key={i}
                                                    href={`#section${item.index}`}
                                                    className={`${styles.anchorSection} text-decoration-none d-flex align-items-center gap-2`}
                                                >
                                                    <span className={`${styles.bg1} d-flex align-items-center justify-content-center f12-700 gray`}>
                                                        {i + 1} { }
                                                    </span>
                                                    <p className='f14-400 gray mb-0'>
                                                        {item.text.replace("## ", "")} { }
                                                    </p>
                                                </a>
                                            ))}
                                    </nav>
                                </div>
                                <div className={`${styles.time} mb-4`}>
                                    <div className='row'>
                                        <div className='text-center col-6'>
                                            <div className={`${styles.timeRead} h-100`}>
                                                <i className='fa-regular fa-clock orangeRed mb-2'></i>
                                                <p className='mb-0 f16-700 white'>{post.readTime}  </p>
                                                <p className='mb-0 f12-400 gray'>وقت القراءة</p>
                                            </div>
                                        </div>
                                        <div className='text-center col-6'>
                                            <div className={`${styles.timeRead} h-100`}>
                                                <i className='fa-regular fa-calendar orangeRed'></i>
                                                <p className='mb-0 f16-700 white'>{post.date}   </p>
                                                <p className='mb-0 f12-400 gray'> تاريخ النشر</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className={`${styles.watchMore}`}>
                                    <div className='text-center d-flex flex-column justify-content-center align-items-center'>
                                        <div className={`${styles.mail} mb-3 d-flex align-items-center justify-content-center`}>
                                            <i className='fa-solid fa-envelope'></i>
                                        </div>
                                        <h3 className='f16-700 white mb-2'>لا تفوّت جديدنا</h3>
                                        <p className='f14-400 gray mb-3'>اشترك للحصول على أحدث المقالات</p>
                                        <Link to={"/blog"} className={`${styles.more} text-decoration-none f16-600  white w-100`}>
                                            تصفح المزيد
                                        </Link>

                                    </div>

                                </div>

                            </div>


                        </aside>


                    </div>


                    <div className={`${styles.articleLike} mt-5`}>

                        <div className='mt-4 mb-4'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center gap-2'>
                                    <span className={`${styles.picture} d-flex align-items-center justify-content-center`}>
                                        <i className='fa-solid fa-images orangeRed'></i>
                                    </span>
                                    <div>
                                        <h2 className='mb-0 f24-700 white'>مقالات قد تعجبك</h2>
                                        <p className='mb-0 f14-400 gray'>استكشف المزيد من المحتوى المميز</p>
                                    </div>
                                </div>
                                <Link to={"/blog"} className='f16-400 orangeRed text-decoration-none d-flex align-items-center  d-none d-md-block'>
                                    عرض الكل
                                    <i className='fa-solid fa-arrow-left orangeRed pe-2'></i>
                                </Link>
                            </div>
                        </div>

                        <div className='row gy-4'>
                            <div className='col-md-6 col-lg-4'>

                                <Link to={"/blog/night-photography-techniques"} className={`text-decoration-none position-relative `}>
                                    <div className={`${styles.anchorFirst} overflow-hidden h-100`}>
                                        <div className='position-relative overflow-hidden'>
                                            <img src={picture1} alt="" className={`${styles.imgFirst} img-fluid`} />
                                            <div className={`${styles.darkBg} position-absolute inset-0`}></div>
                                            <span className={`${styles.one} rounded-pill white f12-600 position-absolute`}>إضاءة</span>
                                        </div>

                                        <div className={`${styles.down}`}>
                                            <h3 className='f16-700 white mb-3'>تصوير الليل والنجوم: دليلك لالتقاط سماء الليل</h3>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <span className='f14-400 gray d-flex align-items-center gap-2'>
                                                    <img src={khaled} alt="" className={`${styles.khaled}`} />
                                                    خالد الفيصل
                                                </span>
                                                <span className='f14-400 gray'>11 دقائق للقراءة</span>
                                            </div>

                                        </div>
                                    </div>
                                </Link>

                            </div>
                            <div className='col-md-6 col-lg-4'>

                                <Link to={"/blog/long-exposure-photography"} className={` text-decoration-none position-relative`}>
                                    <div className={`${styles.anchorFirst} overflow-hidden h-100`}>
                                        <div className='position-relative overflow-hidden'>
                                            <img src={picture2} alt="" className={`${styles.imgFirst} img-fluid`} />
                                            <div className={`${styles.darkBg} position-absolute inset-0`}></div>
                                            <span className={`${styles.one} rounded-pill white f12-600 position-absolute`}>إضاءة</span>
                                        </div>

                                        <div className={`${styles.down}`}>
                                            <h3 className='f16-700 white mb-3'>التعريض الطويل: كيف تصور الحركة والزمن</h3>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <span className='f14-400 gray d-flex align-items-center gap-2'>
                                                    <img src={basem} alt="" className={`${styles.khaled}`} />
                                                    باسم المصري
                                                </span>
                                                <span className='f14-400 gray'>8 دقائق للقراءة  </span>
                                            </div>

                                        </div>
                                    </div>
                                </Link>

                            </div>
                            <div className='col-md-6 col-lg-4'>

                                <Link to={"/blog/flash-photography-basics"} className={` text-decoration-none position-relative`}>
                                    <div className={`${styles.anchorFirst} overflow-hidden h-100`}>
                                        <div className='position-relative overflow-hidden'>
                                            <img src={picture3} alt="" className={`${styles.imgFirst} img-fluid`} />
                                            <div className={`${styles.darkBg} position-absolute inset-0`}></div>
                                            <span className={`${styles.one} rounded-pill white f12-600 position-absolute`}>إضاءة</span>
                                        </div>

                                        <div className={`${styles.down} `}>
                                            <h3 className='f16-700 white mb-3'>  أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة </h3>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <span className='f14-400 gray d-flex align-items-center gap-2'>
                                                    <img src={maged} alt="" className={`${styles.khaled}`} />
                                                    ماجد القحطاني
                                                </span>
                                                <span className='f14-400 gray'>8 دقائق للقراءة  </span>
                                            </div>

                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>

                    </div>


                </div>



            </article>



        </>
    )
}

export default Detail