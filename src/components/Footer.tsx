import React from 'react';

const Footer = () => {
    return (
        <>

            <footer className="mt-5">
                <div className="container">
                    <div className="footer">
                        <div className="row">
                            <div className="footer-one col-lg-4 col-sm-12 px-5 ">
                                <img src="/images/logo.png" className="" alt="" />
                                <p className="my-4">
                                    Our approach to SEO is uniquely built around what we know works…and
                                    what we know doesn’t work. With over 200 verified factors in play.
                                </p>
                                <div className="footer-one-social d-flex ">
                                    <i className="bi bi-github" />
                                    <i className="bi bi-linkedin" />
                                    <i className="bi bi-instagram" />
                                    <i className="bi bi-facebook" />
                                </div>
                            </div>
                            <div className="footer-two col-lg-4 col-sm-12 d-none d-lg-block">
                                <h4 className="fw-bold mb-3">Contacts</h4>
                                <p>
                                    <span>Address: </span>Poranthana kishorgonj-sadar,Kishorgonj
                                </p>
                                <p>
                                    <span>Email: </span>ismailkhandokar0@gmail.com
                                </p>
                                <p>
                                    <span>Phone: </span>+88016-2490-4141
                                </p>
                                <p>
                                    <span>Open: </span> Mon 8:00 am – 18:00 pm
                                </p>
                            </div>
                            <div className="footer-three col-lg-4 col-sm-12 d-none d-lg-block">
                                <h4 className="fw-bold mb-3">Services</h4>
                                <ul>
                                    <li className="mb-3">
                                        <a href="#">SEO Small Business</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#">SEO for Local Service</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#">Enterprice SEO</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#">National SEO</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#">International SEO</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy mt-5 py-3 text-center border-top">
                    <p>@All right reserved by ISMAIL</p>
                </div>
            </footer>
        </>

    );
};

export default Footer;