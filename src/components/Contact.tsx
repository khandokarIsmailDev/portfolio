import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="contact my-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="contact-wrap wrapper">
                                <div className="row no-gutters">
                                    <div className="contact-wrap-right col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4">Get in touch</h3>
                                            <div id="form-message-warning" className="mb-4" />
                                            <div id="form-message-success" className="mb-4">
                                                Your message was sent, thank you!
                                            </div>
                                            <form
                                                method="POST"
                                                id="contactForm"
                                                name="contactForm"
                                                className="contactForm"
                                            >
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="name">
                                                                Full Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="name"
                                                                id="name"
                                                                placeholder="Name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="email">
                                                                Email Address
                                                            </label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="subject">
                                                                Subject
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="subject"
                                                                id="subject"
                                                                placeholder="Subject"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="#">
                                                                Message
                                                            </label>
                                                            <textarea
                                                                name="message"
                                                                className="form-control"
                                                                id="message"
                                                                cols={30}
                                                                rows={4}
                                                                placeholder="Message"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="submit"
                                                                defaultValue="Send Message"
                                                                className="btn btn-primary"
                                                            />
                                                            <div className="submitting" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="contact-wrap-left col-lg-4 col-md-5 d-flex align-items-center">
                                        <div className="info-wrap w-100 p-md-5 p-4">
                                            <h3 className="text-white">Let&amp;s get in touch</h3>
                                            <p className="mb-4 text-white opacity-75">
                                                We are open for any suggestion or just to have a chat
                                            </p>
                                            <div className="dbox w-100 d-flex align-items-start mb-3">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-geo-alt-fill mt-2" />
                                                </div>
                                                <div className="text ps-3">
                                                    <p className="text-white">
                                                        <span>Address:</span> 198 West 21th Street, Suite 721 New
                                                        York NY 10016
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center mb-3">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-telephone-fill mb-3" />
                                                </div>
                                                <div className="text ps-3">
                                                    <p>
                                                        <span>Phone:</span>{" "}
                                                        <a href="tel://1234567920">+ 1235 2355 98</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center mb-3">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-send-check-fill mb-3" />
                                                </div>
                                                <div className="text ps-3">
                                                    <p>
                                                        <span>Email:</span>{" "}
                                                        <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center ">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-globe mb-3" />
                                                </div>
                                                <div className="text ps-3">
                                                    <p>
                                                        <span>Website</span> <a href="#">yoursite.com</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="spacener"></div>
        </>

    );
};

export default Contact;