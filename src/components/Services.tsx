import React from 'react';

const Services = () => {
    return (
        <section id="service">
            <div className="service mx-auto">
                <div className="">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 ">
                            <div className="service-cards">
                                <div className="service-cards-one card-same-relative  d-flex position-relative ps-4 py-4 mb-5">
                                    <div className="service-cards-one-icon pe-4">
                                        <i className="bi bi-clipboard-data-fill display-6" />
                                    </div>
                                    <div className="service-cards-one-body  ">
                                        <h5 className="fw-bold fs-5 ">PPC Advertising</h5>
                                        <p>
                                            Create and manage top-performing social campaigns and start.
                                        </p>
                                    </div>
                                    <div className="service-cards-one-number position-absolute">
                                        <h3 className="display-3 fw-bold">01</h3>
                                    </div>
                                </div>
                                <div className="service-cards-one d-flex position-relative ps-4 py-4 mb-5 ">
                                    <div className="service-cards-one-icon pe-4">
                                        <i className="bi bi-chat-heart-fill display-6" />
                                    </div>
                                    <div className="service-cards-one-body  ">
                                        <h5 className="fw-bold fs-5 ">Social Media Marketing</h5>
                                        <p>
                                            Create and manage top-performing social campaigns and start.
                                        </p>
                                    </div>
                                    <div className="service-cards-one-number position-absolute">
                                        <h3 className="display-3 fw-bold">02</h3>
                                    </div>
                                </div>
                                <div className="service-cards-one card-same-relative d-flex position-relative ps-4 py-4 ">
                                    <div className="service-cards-one-icon pe-4">
                                        <i className="bi bi-calendar-range-fill display-6" />
                                    </div>
                                    <div className="service-cards-one-body  ">
                                        <h5 className="fw-bold fs-5 ">Web Development</h5>
                                        <p>
                                            Create and manage top-performing social campaigns and start.
                                        </p>
                                    </div>
                                    <div className="service-cards-one-number position-absolute">
                                        <h3 className="display-3 fw-bold">03</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 d-flex align-self-center justify-content-end">
                            <img
                                src="/images/cards/service-man.png"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="service-cards">
                                <div className="service-cards-one card-same-relative-left  d-flex position-relative ps-4 py-4 mb-5">
                                    <div className="service-cards-one-icon pe-4">
                                        <i className="bi bi-cloud-moon-fill display-6" />
                                    </div>
                                    <div className="service-cards-one-body  ">
                                        <h5 className="fw-bold fs-5 ">Content Marketing</h5>
                                        <p>
                                            Create and manage top-performing social campaigns and start.
                                        </p>
                                    </div>
                                    <div className="service-cards-one-number position-absolute">
                                        <h3 className="display-3 fw-bold">04</h3>
                                    </div>
                                </div>
                                <div className="service-cards-one d-flex position-relative ps-4 py-4 mb-5 ">
                                    <div className="service-cards-one-icon pe-4">
                                        <i className="bi bi-database-fill-gear display-6" />
                                    </div>
                                    <div className="service-cards-one-body  ">
                                        <h5 className="fw-bold fs-5 ">SEO Optimization</h5>
                                        <p>
                                            Create and manage top-performing social campaigns and start.
                                        </p>
                                    </div>
                                    <div className="service-cards-one-number position-absolute">
                                        <h3 className="display-3 fw-bold">05</h3>
                                    </div>
                                </div>
                                <div className="service-cards-one card-same-relative-left d-flex position-relative ps-4 py-4 ">
                                    <div className="service-cards-one-icon pe-4">
                                        <i className="bi bi-file-earmark-easel-fill display-6" />
                                    </div>
                                    <div className="service-cards-one-body  ">
                                        <h5 className="fw-bold fs-5 ">App Development</h5>
                                        <p>
                                            Create and manage top-performing social campaigns and start.
                                        </p>
                                    </div>
                                    <div className="service-cards-one-number position-absolute">
                                        <h3 className="display-3 fw-bold">06</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Services;