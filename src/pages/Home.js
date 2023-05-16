import React from 'react';
function Home(props) {
    
    return (
        <React.Fragment>
            <main>
                <section className="hero">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-5 col-12 m-auto">
                                <div className="heroText">

                                    <h1 className="text-white mb-lg-5 mb-3">Delicious Steaks</h1>

                                    <div className="c-reviews my-3 d-flex flex-wrap align-items-center">
                                        <div className="d-flex flex-wrap align-items-center">
                                            <h4 className="text-white mb-0 me-3">4.4/5</h4>

                                            <div className="reviews-stars">
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star reviews-icon"></i>
                                            </div>
                                        </div>

                                        <p className="text-white w-100">From <strong>1,206+</strong> Customer Reviews</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-12">
                                <div id="carouselExampleCaptions" className="carousel carousel-fade hero-carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="carousel-image-wrap">
                                                <img src="images/slide/jay-wennington-N_Y88TWmGwA-unsplash.jpg" className="img-fluid carousel-image" alt="" />
                                            </div>

                                            <div className="carousel-caption">
                                                <span className="text-white">
                                                    <i className="bi-geo-alt me-2"></i>
                                                    Manhattan, New York
                                                </span>

                                                <h4 className="hero-text">Fine Dining Restaurant</h4>
                                            </div>
                                        </div>                                       
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="video-wrap">
                        <video autoPlay="" loop="" muted="" className="custom-video" poster="">
                            <source src="video/production_ID_3769033.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="overlay"></div>
                </section>

                <section className="menu section-padding">
                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                <h2 className="text-center mb-lg-5 mb-4">Special Menus</h2>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="menu-thumb">
                                    <div className="menu-image-wrap">
                                        <img src="images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg" className="img-fluid menu-image" alt="" />

                                        <span className="menu-tag bg-warning">Breakfast</span>
                                    </div>

                                    <div className="menu-info d-flex flex-wrap align-items-center">
                                        <h4 className="mb-0">Morning Fresh</h4>

                                        <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>12.50</span>

                                        <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                            <h6 className="reviews-text mb-0 me-3">4.3/5</h6>

                                            <div className="reviews-stars">
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star reviews-icon"></i>
                                            </div>

                                            <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="menu-thumb">
                                    <div className="menu-image-wrap">
                                        <img src="images/lunch/farhad-ibrahimzade-MGKqxm6u2bc-unsplash.jpg" className="img-fluid menu-image" alt="" />

                                        <span className="menu-tag bg-warning">Lunch</span>
                                    </div>

                                    <div className="menu-info d-flex flex-wrap align-items-center">
                                        <h4 className="mb-0">Tooplate Soup</h4>

                                        <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>24.50</span>

                                        <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                            <h6 className="reviews-text mb-0 me-3">3/5</h6>

                                            <div className="reviews-stars">
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star reviews-icon"></i>
                                                <i className="bi-star reviews-icon"></i>
                                            </div>

                                            <p className="reviews-text mb-0 ms-4">50 Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="menu-thumb">
                                    <div className="menu-image-wrap">
                                        <img src="images/dinner/keriliwi-c3mFafsFz2w-unsplash.jpg" className="img-fluid menu-image" alt="" />

                                        <span className="menu-tag bg-warning">Dinner</span>
                                    </div>

                                    <div className="menu-info d-flex flex-wrap align-items-center">
                                        <h4 className="mb-0">Premium Steak</h4>

                                        <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>45</span>

                                        <del className="ms-4"><small>$</small>150</del>

                                        <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                            <h6 className="reviews-text mb-0 me-3">3/5</h6>

                                            <div className="reviews-stars">
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star reviews-icon"></i>
                                                <i className="bi-star reviews-icon"></i>
                                            </div>

                                            <p className="reviews-text mb-0 ms-4">86 Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="menu-thumb">
                                    <div className="menu-image-wrap">
                                        <img src="images/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.jpg" className="img-fluid menu-image" alt="" />

                                        <span className="menu-tag bg-warning">Dinner</span>
                                    </div>

                                    <div className="menu-info d-flex flex-wrap align-items-center">
                                        <h4 className="mb-0">Seafood Set</h4>

                                        <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>86</span>

                                        <del className="ms-4"><small>$</small>124</del>

                                        <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                            <h6 className="reviews-text mb-0 me-3">3/5</h6>

                                            <div className="reviews-stars">
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star reviews-icon"></i>
                                                <i className="bi-star reviews-icon"></i>
                                            </div>

                                            <p className="reviews-text mb-0 ms-4">44 Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="menu-thumb">
                                    <div className="menu-image-wrap">
                                        <img src="images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg" className="img-fluid menu-image" alt="" />

                                        <span className="menu-tag bg-warning">Breakfast</span>
                                    </div>

                                    <div className="menu-info d-flex flex-wrap align-items-center">
                                        <h4 className="mb-0">Burger Set</h4>

                                        <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>20.50</span>

                                        <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                            <h6 className="reviews-text mb-0 me-3">4.3/5</h6>

                                            <div className="reviews-stars">
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star reviews-icon"></i>
                                            </div>

                                            <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="menu-thumb">
                                    <div className="menu-image-wrap">
                                        <img src="images/lunch/farhad-ibrahimzade-D5c9ZciQy_I-unsplash.jpg" className="img-fluid menu-image" alt="" />

                                        <span className="menu-tag bg-warning">Lunch</span>
                                    </div>

                                    <div className="menu-info d-flex flex-wrap align-items-center">
                                        <h4 className="mb-0">Healthy Soup</h4>

                                        <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>34.20</span>

                                        <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                            <h6 className="reviews-text mb-0 me-3">3/5</h6>

                                            <div className="reviews-stars">
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star-fill reviews-icon"></i>
                                                <i className="bi-star reviews-icon"></i>
                                                <i className="bi-star reviews-icon"></i>
                                            </div>

                                            <p className="reviews-text mb-0 ms-4">64 Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="BgImage"></section>

                <section className="news section-padding">
                    <div className="container">
                        <div className="row">

                            <h2 className="text-center mb-lg-5 mb-4">News &amp; Events</h2>

                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="news-thumb mb-4">
                                    <a href="news-detail.html">
                                        <img src="images/news/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg" className="img-fluid news-image" alt="" />
                                    </a>

                                    <div className="news-text-info news-text-info-large">
                                        <span className="category-tag bg-danger">Featured</span>

                                        <h5 className="news-title mt-2">
                                            <a href="news-detail.html" className="news-title-link">Healthy Lifestyle and happy living tips</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="news-thumb mb-4">
                                    <a href="news-detail.html">
                                        <img src="images/news/stefan-johnson-xIFbDeGcy44-unsplash.jpg" className="img-fluid news-image" alt="" />
                                    </a>

                                    <div className="news-text-info news-text-info-large">
                                        <span className="category-tag bg-danger">Featured</span>

                                        <h5 className="news-title mt-2">
                                            <a href="news-detail.html" className="news-title-link">How to make a healthy meal</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="news-thumb mb-lg-0 mb-lg-4 mb-0">
                                    <a href="news-detail.html">
                                        <img src="images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg" className="img-fluid news-image" alt="" />
                                    </a>

                                    <div className="news-text-info">
                                        <span className="category-tag me-3 bg-info">Promotions</span>

                                        <strong>8 April 2022</strong>

                                        <h5 className="news-title mt-2">
                                            <a href="news-detail.html" className="news-title-link">Is Coconut good for you?</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="news-thumb mb-lg-0 mb-lg-4 mb-2">
                                    <a href="news-detail.html">
                                        <img src="images/news/caroline-attwood-bpPTlXWTOvg-unsplash.jpg" className="img-fluid news-image" alt="" />
                                    </a>

                                    <div className="news-text-info">
                                        <span className="category-tag">News</span>

                                        <h5 className="news-title mt-2">
                                            <a href="news-detail.html" className="news-title-link">Salmon Steak Noodle</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="news-thumb mb-4">
                                    <a href="news-detail.html">
                                        <img src="images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg" className="img-fluid news-image" alt="" />
                                    </a>

                                    <div className="news-text-info">
                                        <span className="category-tag me-3 bg-info">Meeting</span>

                                        <strong>30 April 2022</strong>

                                        <h5 className="news-title mt-2">
                                            <a href="news-detail.html" className="news-title-link">Making a healthy salad</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>

            <footer className="site-footer section-padding">

                <div className="container">

                    <div className="row">

                        <div className="col-12">
                            <h4 className="text-white mb-4 me-5">Crispy Kitchen</h4>
                        </div>

                        <div className="col-lg-4 col-md-7 col-xs-12 tooplate-mt30">
                            <h6 className="text-white mb-lg-4 mb-3">Location</h6>

                            <p>121 Einstein Loop N, Bronx, NY 10475, United States</p>

                            <a href="https://goo.gl/maps/wZVGLA7q64uC1s886" className="custom-btn btn btn-dark mt-2">Directions</a>
                        </div>

                        <div className="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
                            <h6 className="text-white mb-lg-4 mb-3">Opening Hours</h6>

                            <p className="mb-2">Monday - Friday</p>

                            <p>10:00 AM - 08:00 PM</p>

                            <p>Tel: <a href="tel: 010-02-0340" className="tel-link">010-02-0340</a></p>
                        </div>

                        <div className="col-lg-4 col-md-6 col-xs-12 tooplate-mt30">
                            <h6 className="text-white mb-lg-4 mb-3">Social</h6>

                            <ul className="social-icon">
                                <li><a href="#" className="social-icon-link bi-facebook"></a></li>

                                <li><a href="#" className="social-icon-link bi-instagram"></a></li>

                                <li><a href="https://twitter.com/search?q=tooplate.com&src=typed_query&f=live" target="_blank"
                                    className="social-icon-link bi-twitter"></a></li>

                                <li><a href="#" className="social-icon-link bi-youtube"></a></li>
                            </ul>

                            <p className="copyright-text tooplate-mt60">Copyright © 2022 Crispy Kitchen Co., Ltd.
                                <br />Design: <a rel="nofollow" href="https://www.tooplate.com/" target="_blank">Tooplate</a></p>

                        </div>

                    </div>

                </div>

            </footer>

            
        </React.Fragment>
    );
}
export default Home;