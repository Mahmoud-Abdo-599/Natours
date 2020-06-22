import React, { Fragment } from 'react'

const AboutSection = () => {
    return (
        <Fragment>
            <main>
                <section className="section-about">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Exciting tours for adventurous people
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                You're going to fall in love with nature
                            </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            </p>

                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Live adventurous like you never have before
                            </h3>
                            <p className="paragraph">
                                Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Urna molestie at elementum eu facilisis sed odio morbi.
                            </p>

                            <a href="#" className="btn-text">Learn more &rarr;</a>
                        </div>
                        <div className="col-1-of-2">
                            <div className="composition">
                                <img src="../img/nat-1-large.jpg" alt="photo 1" className="composition__photo composition__photo--p1"/>
                                <img src="../img/nat-2-large.jpg" alt="photo 2" className="composition__photo composition__photo--p2"/>
                                <img src="../img/nat-3-large.jpg" alt="photo 3" className="composition__photo composition__photo--p3"/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default AboutSection;
