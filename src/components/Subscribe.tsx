import React from 'react';

const Subscribe = () => {
    return (
        <section id="subscribe" className="my-5">
            <div className="container">
                <div className="subscribe">
                    <div className="row">
                        <div className="col-lg-1 col-sm-2 d-flex align-self-center justify-content-center">
                            <img src="/images/social/bg-sub-home5.png" alt="" />
                        </div>
                        <div className="subscribe-text col-lg-5 col-sm-8">
                            <h2 className="fw-bold">Subscribe for Newsletter</h2>
                            <p>Grow Your Business with Our SEO Agency</p>
                        </div>
                        <div className="subscribe-form col-lg-6 col-sm-12 d-flex align-self-center">
                            <div className="subscribe-form-one  ">
                                <form action="" className="">
                                    <input type="email" placeholder="Your Email" className="" />
                                    <button type="submit">Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Subscribe;