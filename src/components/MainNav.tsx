
import React from 'react';
import Link from "next/link";


const MainNav = () => {
    return (
        <>
            <section id="topHeader" className=" d-none d-lg-block ">
                <div className="row mx-5  my-3">
                    {/* top left div  */}
                    <div className="col-5 d-flex justify-content-start">
                        <div className="fw-medium">
                            <Link href={'/about'}>
                                <span className="px-4 top-left-span">About</span>
                            </Link>
                            <a href="">
                                <span className="px-4 top-left-span">FAQ</span>
                            </a>
                        </div>
                        {/* social widget */}
                        <div className="socialWidget ms-2">
                            <a href="#">
            <span className="px-2">
              <i className="bi bi-facebook" />
            </span>
                            </a>
                            <a href="#">
            <span className="px-2">
              <i className="bi bi-github" />
            </span>
                            </a>
                            <a href="#">
            <span className="px-2">
              <i className="bi bi-twitter" />
            </span>
                            </a>
                            <a href="#">
            <span className="px-2">
              <i className="bi bi-instagram" />
            </span>
                            </a>
                        </div>
                    </div>
                    {/* top right div */}
                    <div className="col-7 d-flex justify-content-end" id="topRight">
                        <a href="#" className="px-2">
          <span>
            <i className="bi bi-geo-alt-fill px-1" />
            Poranthana, Kishorgonj, 2100
          </span>
                        </a>
                        <a href="mailto:ismailkhandokar0@gmail.com" className="px-2">
          <span>
            <i className="bi bi-envelope-at-fill px-1" />
            ismailkhandokar0@gmail.com
          </span>
                        </a>
                    </div>
                </div>
            </section>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-md-4 px-sm-4 px-sm-4 bg-danger">
                <div className="container-fluid">
                    <Link href={'/'} className="navbar-brand">
                        <img src="/images/circle_image.png" height={55} alt="" />
                    </Link>


                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-md-auto nav-link-hover">
                            <li className="nav-item px-md-3">

                                    <Link href={'/'} className="nav-link fs-5 fw-medium active">
                                        Home
                                    </Link>

                            </li>
                            <li className="nav-item px-md-3">
                                <Link href={'/about'} className="nav-link fs-5 fw-medium active">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item px-md-3">
                                <Link href={'/team'} className="nav-link fs-5 fw-medium active">
                                    Team
                                </Link>
                            </li>
                            <li className="nav-item px-md-3">
                                <Link href={'/contact'} className="nav-link fs-5 fw-medium active">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item px-md-3">
                                <Link href={'/services'} className="nav-link fs-5 fw-medium active">
                                    Services
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex" >
                            <Link href={'/login'} className="btn btn-primary fw-medium top-image-search-shadow me-3 text-white">Login</Link>
                            <Link href={'/signup'} className="btn btn-primary fw-medium top-image-search-shadow text-white">Register</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default MainNav;