import React from 'react';

const Advisor = () => {
    return (
        <section id="advisor" className="mt-5">
            <div className="advisor">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 advisor-one">
                            <img src="/images/ismail.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 ps-5 py-5 align-self-center advisor-two">
                            <div className="real-number same-color pb-3">
                                <i className="bi bi-circle-fill" />{" "}
                                <span className="px-2 fs-6 fw-bold">Who We Are</span>
                            </div>
                            <div className="advisor-heading">
                                <h1 className="pb-3 display-6 fw-bold ">
                                    We are on a Mission to Change Your View of SEO
                                </h1>
                                <p className="fs-4 fw-medium">
                                    Ismail is a values-driven SEO agency dedicated to empowering our
                                    customers.
                                </p>
                                <span className="fs-5 fw-medium">
              Over the years, we have worked with Fortune 500s and brand-new
              startups. We help ambitious businesses like yours generate more
              profits by building awareness, driving web traffic, connecting
              with customers, and growing overall sales. Give us a call.
            </span>
                            </div>
                            <div className="space" />
                            <div className="advisor-buttons d-flex d-block">
                                {/* <a href="#" id="animContainer"></a> */}
                                <a href="#" id="animContainerrr">
                                    <iframe src="https://lottie.host/embed/a197074e-8c5a-4392-ab32-7a02fa062598/Y7Oit5ZmHe.json" />
                                </a>
                                <span className="fw-bold align-self-center">VIDEO SHOW CASE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Advisor;