
import posts from '../../../../src/data/posts'







import { useState } from 'react'
import styles from './Blog.module.css'
import { Link, useLocation } from 'react-router'
function Blog() {


    const [page, setPage] = useState(1);
    const location = useLocation(); //    
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category") || "all";

    const [category, setCategory] = useState(categoryParam);


// State للبحث
    const [searchTerm, setSearchTerm] = useState("");

    // فلترة حسب الكاتيجوري + البحث
    const filteredPosts = posts.filter(post => {
        const matchesCategory = category === "all" || post.category === category;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              post.author.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });





    // const filteredPosts = category === "all"
    //     ? posts
    //     : posts.filter(post => post.category === category)


    const visiblePosts = filteredPosts.filter((post, index) => {
        if (page === 1) return index < 6
        if (page === 2) return index >= 6 && index < 12
        if (page === 3) return index >= 12 && index < 18
        if (page === 4) return index >= 18 && index < 24
        if (page === 5) return index >= 24 && index < 30
    })



    const [designType, setDesignType] = useState("design1");








    return (
        <>
            <header className={`${styles.headerBlog} positive-relative overflow-hidden`}>
                <div className={`${styles.glowTop} rounded-circle`}></div>

                <div className='text-center d-flex flex-column align-items-center justify-content-center'>
                    <div className={`${styles.sectionLabel2} rounded-pill d-flex gap-2 align-items-center`}>
                        <span className="position-relative d-flex align-items-center ">
                            <svg className={`${styles.iconHeader}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                        </span>
                        <span className={`orangeRed f14-500 `}>  مدونتنا </span>
                    </div>

                    <h1 className='f36-700 white'>استكشف
                        <span className='gradient-text'>  مقالاتنا </span>
                    </h1>
                    <p className='f20-400 gray'>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
                </div>
            </header>

            <div className='positive-relative'>
                <section className={`${styles.search}`}>
                    <div className='container'>
                        <div className="">
                            <div className='position-relative'>
                                <div className={`${styles.stick} d-flex flex-column gap-2 flex-lg-row justify-content-lg-between pt-lg-2`}>
                                    <div className='position-relative mb-2'>
                                        <input onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="ابحث في المقالات..." className={`${styles.inputSearch} w-100`} />
                                        <svg className={`${styles.iconSearch}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                    <div className='d-flex justify-content-center gap-2 flex-wrap'>
                                        <button onClick={() => setCategory("all")} className={category === "all" ? styles.btnArticalIsActive : styles.btnArtical} >جميع المقالات</button>
                                        <button onClick={() => setCategory("إضاءة")} className={category === "إضاءة" ? styles.btnArticalIsActive : styles.btnArtical}> إضاءة</button>
                                        <button onClick={() => setCategory("بورتريه")} className={category === "بورتريه" ? styles.btnArticalIsActive : styles.btnArtical}> بورتريه</button>
                                        <button onClick={() => setCategory("مناظر طبيعية")} className={category === "مناظر طبيعية" ? styles.btnArticalIsActive : styles.btnArtical}> مناظر طبيعية</button>
                                        <button onClick={() => setCategory("تقنيات")} className={category === "تقنيات" ? styles.btnArticalIsActive : styles.btnArtical}> تقنيات</button>
                                        <button onClick={() => setCategory("معدات")} className={category === "معدات" ? styles.btnArticalIsActive : styles.btnArtical}> معدات</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

                <section className={`${styles.allArticle}`}>
                    <div className='container'>
                        <div>
                            <div className='d-flex justify-content-between align-items-center mb-4'>
                                <p className='f16-400 gray mb-0'>عرض <span className='white'> {filteredPosts.length} </span>مقالات</p>
                                <div className={`${styles.num1} d-flex gap-2`}>
                                    <button onClick={() => setDesignType("design1")} className={`${styles.btnIcon1} ${designType === "design1" ? styles.active : ""} d-flex justify-content-center align-items-center`}><svg className={`${styles.icon1}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg></button>
                                    <button onClick={() => setDesignType("design2")} className={`${styles.btnIcon1} ${designType === "design2" ? styles.active : ''} d-flex justify-content-center align-items-center`}><svg className={`${styles.icon1}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
                                </div>
                            </div>


                            {designType === "design2" && (
                                <div className='d-flex flex-column gap-2'>
                                    {visiblePosts.map(post => (
                                        <article key={post.id} className={`${styles.recentArt1}  position-relative overflow-hidden h-100`}>
                                            <Link to={`/blog/${post.slug}`} className="text-decoration-none ">
                                                <div className='row'>
                                                    <div className='col-12 col-sm-4'>
                                                        <div className=" position-relative overflow-hidden h-100">
                                                            <img src={post.image} alt="" className={`${styles.articleRecentImage2} img-fluid w-100 h-100`} />
                                                            <div className={`${styles.articleStyle} position-absolute `}></div>
                                                            <div className={`${styles.special}`}>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='col-12 col-sm-8'>
                                                        <div className={`${styles.partRecent} `}>
                                                            <div className="mb-3 d-flex gap-2 align-items-center">
                                                                <span className={`${styles.special5} rounded-pill f12-400 orangeRed `}>
                                                                    {post.category}
                                                                </span>
                                                                <span className="f14-400 gray1">
                                                                    <svg className={`${styles.clock}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                                    9 دقائق للقراءة
                                                                </span>
                                                                <span className={`${styles.dot0}`}></span>
                                                                <span className="f14-400 gray1">٥ يناير ٢٠٢٦</span>
                                                            </div>
                                                            <h3 className="f20-700 white mb-3"> {post.title}   </h3>
                                                            <p className="f14-400 gray">{post.excerpt}</p>
                                                            <div className={` d-flex justify-content-between align-items-center`}>
                                                                <div className="d-flex align-items-center gap-2 mt-3">
                                                                    <img src={post.author.avatar} alt="" className={`${styles.dawoudImage}`} />
                                                                    <div>
                                                                        <p className="f14-500 white mb-0"> {post.author.name}</p>
                                                                        <p className="f12-400 gray1 mb-0"> {post.author.role} </p>
                                                                    </div>
                                                                </div>
                                                                <div className={`${styles.arrowArt} d-flex justify-content-center align-items-center`}><svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                        </article>
                                    )

                                    )

                                    }
                                </div>
                            )

                            }







                            {designType === "design1" && (
                                <div className='row gy-4'>
                                    {visiblePosts.map(post => (
                                        <div key={post.id} className='col-md-6 col-lg-4 '>
                                            <article className={`${styles.recentArt1}  position-relative overflow-hidden h-100`}>
                                                <Link to={`/blog/${post.slug}`} className="text-decoration-none">
                                                    <div className=" position-relative overflow-hidden">
                                                        <img src={post.image} alt="" className={`${styles.articleRecentImage} img-fluid w-100 h-100`} />
                                                        <div className={`${styles.articleStyle} position-absolute`}></div>
                                                        <div className={`${styles.special}`}>
                                                            <span className={`${styles.special4} rounded-pill f12-400 white`}>
                                                                {post.category}
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
                                                        <h3 className="f20-700 white mb-3"> {post.title}   </h3>
                                                        <p className="f14-400 gray">{post.excerpt}</p>
                                                        <div className={`${styles.borderTop} d-flex justify-content-between align-items-center`}>
                                                            <div className="d-flex align-items-center gap-2 mt-3">
                                                                <img src={post.author.avatar} alt="" className={`${styles.dawoudImage}`} />
                                                                <div>
                                                                    <p className="f14-500 white mb-0"> {post.author.name}</p>
                                                                    <p className="f12-400 gray1 mb-0"> {post.author.role} </p>
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.arrowArt} d-flex justify-content-center align-items-center`}><svg className="" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></div>
                                                        </div>
                                                    </div>


                                                </Link>

                                            </article>

                                        </div>
                                    ))

                                    }
                                </div>
                            )
                            }






                            <div className='d-flex justify-content-center align-items-center gap-1 mt-4'>
                                <button onClick={() => setPage(prev => prev - 1)}
                                    disabled={page === 1} className={`${styles.btnArrow}`}><svg className={`${styles.arrowRight}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
                                <div className='d-flex align-items-center gap-1'>
                                    <button onClick={() => setPage(1)} className={page === 1 ? styles.btnNunIsActive : styles.btnNun}>1</button>
                                    <button onClick={() => setPage(2)} className={page === 2 ? styles.btnNunIsActive : styles.btnNun}>2</button>
                                    <button onClick={() => setPage(3)} className={page === 3 ? styles.btnNunIsActive : styles.btnNun}>3</button>
                                    <button onClick={() => setPage(4)} className={page === 4 ? styles.btnNunIsActive : styles.btnNun}>4</button>
                                    <button onClick={() => setPage(5)} className={page === 5 ? styles.btnNunIsActive : styles.btnNun}>5</button>
                                </div>
                                <button onClick={() => setPage(prev => prev + 1)}
                                    disabled={page === 5} className={`${styles.btnArrow} `}><svg className={`${styles.arrowRight}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
                            </div>



                            <p className='gray f14-400 text-center mt-3 mb-0'>صفحة 1 من 5</p>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Blog