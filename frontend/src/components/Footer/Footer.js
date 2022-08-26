import React from "react";
import './Footer.css';
import { faFacebook, faGoogle, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {

    return (
        <div className="mt-4 h-100 d-flex flex-column">
            <footer
                className="text-center text-lg-start text-white"
                style={{'backgroundColor': '#45526e'}}
            >
                <div classNameName="container p-4 pb-0">
                    <section className="">

                        <div className="row">

                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="mb-4 font-weight-bold">
                                    devArticles
                                </h6>
                                <p>
                                We're passionate about development. 
                                Bringing all developers in Africa together through article writing. 
                                </p>
                            </div>


                            <hr className="w-100 clearfix d-md-none" />


                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Technologies</h6>
                                <p>
                                    <a className="text-white">React.Js</a>
                                </p>
                                <p>
                                    <a className="text-white">Node.Js</a>
                                </p>
                                <p>
                                    <a className="text-white">Express</a>
                                </p>
                                <p>
                                    <a className="text-white">Laravel</a>
                                </p>
                            </div>


                            <hr className="w-100 clearfix d-md-none" />


                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Useful links
                                </h6>
                                <p>
                                    <a className="text-white">Your Account</a>
                                </p>
                                <p>
                                    <a className="text-white">Write an Article</a>
                                </p>
                                <p>
                                    <a className="text-white">Donate</a>
                                </p>
                                <p>
                                    <a className="text-white">Help</a>
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />


                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> Nairobi, 60200, Kenya</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@devarticlesafrica.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 254 712 410 065</p>
                                {/* <p><i className="fas fa-print mr-3"></i></p> */}
                            </div>
                        </div>
                    </section>

                    <hr className="my-3" />

                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                {/* Copyright  */}
                                <div className="p-3">
                                    © 2022 Copyright: {" "}
                                    <a className="text-white" href="https://devarticlesafrica.com/"
                                    >www.devarticlesafrica.com</a
                                    >
                                </div>
                            </div>

                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">

                                <a
                                    className="btn btn-outline-light btn-floating m-1 text-white"
                                    role="button"
                                ><FontAwesomeIcon icon={faGoogle}/>
                                </a>

                                <a
                                    className="btn btn-outline-light btn-floating m-1 text-white"
                                    role="button"
                                ><FontAwesomeIcon icon={faTwitter} />
                                </a>


                                <a
                                    className="btn btn-outline-light btn-floating m-1 text-white"
                                    role="button"
                                ><FontAwesomeIcon icon={faInstagram}/>
                                </a>


                                <a
                                    className="btn btn-outline-light  m-1 text-white"
                                    role="button"
                                ><FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </div>

                        </div>
                    </section>
                    {/* Section: Copyright */}
                </div>
            </footer>
        </div>
    )
}