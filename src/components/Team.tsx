import React from 'react';

const Team = () => {
    return (
        <section id="team">
            <div className="team">
                <div className="team-head mb-5">
                    <div className="team-head-icon pb-3 text-center">
                        <i className="bi bi-circle-fill" />{" "}
                        <span className="px-2 fs-6 fw-bold">PROFESSIONAL PEOPLE</span>
                        <i className="bi bi-circle-fill" />
                    </div>
                    <div className="team-head-body text-center">
                        <h2 className="display-6 fw-bold pb-3">Our Leadership Team</h2>
                        <p>
                            We have experience working with large and small businesses and are
                            ready to <br />
                            develop a targeted strategy and plan that’s just right for you.
                        </p>
                    </div>
                </div>
                {/* <div class="row"> */}
                <div className="team-body ">
                    <div className="row">
                        {/* item one  */}
                        <div className="item col-lg-3">
                            <div className="team-body-item mx-2">
                                <div className="team-body-item-img">
                                    <img
                                        src="/images/people/ismail.jpg"
                                        className="img-fluid teamIm"
                                        alt="image"
                                    />
                                </div>
                                <div className="team-body-item-box ">
                                    <h4 className="fw-bold fs-4">khandokar Ismail</h4>
                                    <p>CEO</p>
                                </div>
                            </div>
                        </div>
                        {/* item two  */}
                        <div className="item col-lg-3">
                            <div className="team-body-item mx-2">
                                <div className="team-body-item-img">
                                    <img
                                        src="/images/people/mem3-1.jpg"
                                        className="img-fluid teamIm"
                                        alt="image"
                                    />
                                </div>
                                <div className="team-body-item-box ">
                                    <h4 className="fw-bold fs-4">Christina Tores</h4>
                                    <p>General Manager</p>
                                </div>
                            </div>
                        </div>
                        {/* item three  */}
                        <div className="item col-lg-3">
                            <div className="team-body-item mx-2">
                                <div className="team-body-item-img">
                                    <img
                                        src="/images/people/mem4-1.jpg"
                                        className="img-fluid teamIm"
                                        alt="image"
                                    />
                                </div>
                                <div className="team-body-item-box ">
                                    <h4 className="fw-bold fs-4">Carolina Gol</h4>
                                    <p>CTO Manager</p>
                                </div>
                            </div>
                        </div>
                        {/* item four  */}
                        <div className="item col-lg-3">
                            <div className="team-body-item mx-2">
                                <div className="team-body-item-img">
                                    <img
                                        src="/images/people/mem6-1.jpg"
                                        className="img-fluid teamIm"
                                        alt="image"
                                    />
                                </div>
                                <div className="team-body-item-box ">
                                    <h4 className="fw-bold fs-4">Robert Dar</h4>
                                    <p>Graphic Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Team;