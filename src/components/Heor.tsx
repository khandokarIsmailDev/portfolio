import React from 'react';

const Hero = () => {
    return (
        <header className="  bg-middle-image">
            <div className="row">
                <div className="col-lg-2 d-none d-lg-block mt-5">
                    <img src="/images/shape-process2-1.png" alt="image" />
                </div>
                <div className="col-lg-5 col-md-12 ps-md-5 ps-sm-5 mt-5 pt-5 ">
                    <div className="row">
                        <div className="col">
                            <div className="float-start ps-2 pe-3 me-3 side-border ">
                                <p className="my-1 ps-2 fw-bold fs-5 same-color">2023</p>
                                <img src="/images/stars (1).png" alt="" />
                            </div>
                            <div className="mt-2 ps-2">
            <span className="fw-bold text-uppercase same-color">
              Website Agency
            </span>
                                <br />
                                <span className="fw-bold text-uppercase same-color">
              Of the year
            </span>
                            </div>
                        </div>
                    </div>
                    <div className=" ps-2 my-4 heading-header-style">
                        <h1 className="fw-bold pb-4 display-4">
                            I Am Full Stack Developer <br /> Featured Projects!
                        </h1>
                        <p className="fs-4  fw-light heading-header-p-color">
                            We bet you dont spend much time on the 2nd page of <br /> Google - so
                            why should you website?
                        </p>
                    </div>{" "}
                    <br />
                    <br />
                    <br />
                    {/* buttons  */}
                    <div className="ps-2">
                        <button className="btn header-custorm-btn me-4 ">
                            Start Now <i className="bi bi-arrow-right" />
                        </button>
                        <button className="btn header-custorm-btn-two ">
                            <i className="bi bi-telephone-outbound" />
                        </button>
                    </div>
                    <div className="spacener"></div>
                    {/* already worked company logo */}
                    <div className="d-none d-md-block mx-5">
                        <div className="d-flex justify-content-between worked-logo">
                            <img src="/images/icon/c-logo2-1.png" alt="" />
                            <img src="/images/icon/c-logo3-1.png" alt="" />
                            <img src="/images/icon/c-logo6-1.png" alt="" />
                            <img src="/images/icon/c-logo4-1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block col-md-4">
                    <img src="/images/slide1-01-01.png" className="img-fluid" alt="" />
                </div>
            </div>
            {/* ranking cards  */}
            <section id="rankingCards" className="mb-5 same-b">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#F0F6FF"
                        fillOpacity={1}
                        d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,229.3C672,192,768,128,864,133.3C960,139,1056,213,1152,240C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
                <div className="same-bg-color px-md-5">
                    <div className="container same-bg-color ">
                        {/* real numbers  */}
                        <div className="real-number text-center same-color ">
                            <i className="bi bi-circle-fill" />{" "}
                            <span className="px-4 fs-6 fw-bold">REAL NUMBERS</span>
                            <i className="bi bi-circle-fill" />
                        </div>
                        <div className="real-number-header text-center my-3">
                            <h1 className="display-6 fw-bold">
                                Expect Great Things from <br />
                                Your SEO Agency
                            </h1>
                        </div>
                        <div style={{ height: 80 }} />
                        {/* card  */}
                        <div className="card-ranking row ">
                            <div className=" col-md-6 col-lg-4 col-md-width col-md-width-one ">
                                <img
                                    src="/images/cards/woman-before.png"
                                    className="img-public-one d-none d-lg-block"
                                    alt=""
                                />
                                <div className="rank-card mb-5">
                                    <div className="card-body ">
                                        <h5 className="card-title-one">45,895</h5>
                                        <p className="card-text">Ranking Keywords</p>
                                    </div>
                                    <img
                                        src="/images/cards/bg-chart1-1.png"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <div className=" col-md-6 col-lg-4 col-md-width ">
                                <div className="rank-card mb-5">
                                    <div className="card-body ">
                                        <h5 className="card-title-two">86,463</h5>
                                        <p className="card-text">Annual Organic Traffic</p>
                                    </div>
                                    <img
                                        src="/images/cards/bg-chart2-1.png"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <div className=" col-md-6 col-lg-4 col-md-width ">
                                <img
                                    src="/images/cards/man-after.png"
                                    className="img-public-two d-none d-lg-block"
                                    alt=""
                                />
                                <div className="rank-card mb-5" style={{}}>
                                    <div className="card-body card-body-three ">
                                        <h5 className="card-title-three">998%</h5>
                                        <p className="card-text">Ranking Keywords</p>
                                    </div>
                                    <img
                                        src="/images/cards/bg-chart3-1.png"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#F0F6FF"
                        fillOpacity={1}
                        d="M0,96L60,117.3C120,139,240,181,360,213.3C480,245,600,267,720,240C840,213,960,139,1080,101.3C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    />
                </svg>
            </section>
        </header>

    );
};

export default Hero;