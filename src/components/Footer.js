import React, { Fragment } from 'react'

function Footer() {
  return (
    <Fragment>
      <div className="rts-footer-one  footer-bg-two" style={{zIndex: "1"}}>
        <div className="shape-image-f-2">
            <img src="assets/images/footer/07.png" alt="shape-footer"/>
        </div>
        <div className="container">
            <div className="row pt--90  pb--55 pb_sm--40">
                <div className="col-lg-12">
                    <div className="single-footer-one-wrapper two">
                        <div className="single-footer-component first">
                            <a href="/" className="logo-area-footer">
                                <img src="img/logo.png" alt="logo"/>
                            </a>
                            <div className="body mt--45">
                                <p className="disc">
                                    EcoSoch® was started with a vision to deliver sustainable energy
                                    solutions for all.
                                    In addition, we believe in conserving energy while generating power
                                    through
                                    alternate sources. EcoSoch® got incubated from Sunlit Future, Auroville
                                    in 2011 and
                                    emerged as a proprietorship solar company in Bangalore.
                                </p>
                                <div className="rts-social-style-one">
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa-brands fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="single-footer-component">
                            <div className="title-area">
                                <h5 className="title">Useful Links</h5>
                            </div>
                            <div className="body">
                                <div className="pages-footer">
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <i className="fa-regular fa-chevron-right"></i>
                                                <p>Home</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa-regular fa-chevron-right"></i>
                                                <p>Projects</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa-regular fa-chevron-right"></i>
                                                <p>Solar</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa-regular fa-chevron-right"></i>
                                                <p>Knowledge Center</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa-regular fa-chevron-right"></i>
                                                <p>Partner with Us</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa-regular fa-chevron-right"></i>
                                                <p>About Us</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="single-footer-component last">
                            <div className="title-area">
                                <h5 className="title">Contact Us</h5>
                            </div>
                            <div className="body">
                                <div className="footer-contact-wrapper-2">
                                    <div className="contact-single">
                                        <div className="icon">
                                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.5332 21.1589L12.5385 22.04C13.16 24.5227 14.4784 26.8062 16.3178 28.5859L18.0781 27.2989C18.8822 26.6994 19.987 26.7381 20.7603 27.3742L24.6985 30.4454C25.5518 31.103 25.7825 32.323 25.3143 33.2699L23.2386 37.1746C23.0513 37.5534 22.7254 37.8092 22.3702 38.0143C21.8628 38.3072 21.2674 38.448 20.6485 38.1963C15.3952 36.8316 11.0703 33.4423 8.375 28.7739C5.67969 24.1055 4.90689 18.6654 6.35167 13.4334C6.63048 12.3929 7.53602 11.7348 8.56085 11.752L12.9803 11.9068C14.0344 11.9747 14.9463 12.7338 15.1184 13.8523L15.8091 18.7985C15.9734 19.7862 15.4544 20.7624 14.5332 21.1589ZM15.5922 30.4933C12.9875 28.2083 11.2004 25.1129 10.5239 21.7146C10.471 21.2715 10.6583 20.8928 11.0643 20.6584L13.7479 19.4473C13.7479 19.4473 13.7479 19.4473 13.7987 19.418C13.9002 19.3594 14.0231 19.2207 13.986 19.0392L13.1645 14.1008C13.1781 13.89 12.9887 13.7963 12.8286 13.7534L8.43847 13.6494C8.35843 13.628 8.30769 13.6573 8.25695 13.6866C8.15546 13.7452 8.10472 13.7745 8.06182 13.9346C6.79646 18.657 7.48712 23.6032 9.94805 27.8657C12.409 32.1281 16.398 35.1701 21.1204 36.4355C21.3605 36.4998 21.5127 36.4119 21.5556 36.2518L23.6606 32.3978C23.7035 32.2377 23.6664 32.0562 23.5278 31.9333L19.6402 28.8327C19.5016 28.7098 19.24 28.7255 19.1679 28.8348L16.7772 30.5534C16.4512 30.8092 15.9496 30.7606 15.5922 30.4933ZM22.2779 5.86222C27.3534 6.45011 31.8069 9.35917 34.3558 13.7739C36.9339 18.2393 37.2264 23.5507 35.1978 28.2402C35.1042 28.4296 34.9813 28.5682 34.829 28.6561C34.5753 28.8026 34.263 28.8476 33.9936 28.7325C33.484 28.5531 33.2926 27.987 33.5013 27.5282C35.2704 23.3269 35.0171 18.6694 32.732 14.7114C30.4761 10.8041 26.5693 8.256 22.0462 7.68745C21.5445 7.63881 21.15 7.18997 21.2494 6.65898C21.2981 6.15729 21.7469 5.76284 22.2779 5.86222ZM20.673 11.0513C24.3664 11.3546 27.668 13.4403 29.4844 16.5864C31.3301 19.7832 31.4855 23.6853 29.9016 27.0355C29.8079 27.2249 29.6557 27.3128 29.5035 27.4007C29.2497 27.5472 28.9374 27.5922 28.6173 27.5064C28.1292 27.2469 27.9377 26.6809 28.1971 26.1928C29.5295 23.4614 29.4133 20.2133 27.8606 17.5239C26.3371 14.8852 23.5823 13.1605 20.5507 12.9487C19.9982 12.9293 19.6038 12.4805 19.6231 11.9281C19.6718 11.4264 20.1206 11.0319 20.673 11.0513ZM19.8921 16.8471C21.8031 16.7587 23.5954 17.7536 24.5622 19.4282C25.5583 21.1535 25.5238 23.2031 24.4917 24.8139C24.3688 24.9525 24.2673 25.0111 24.1151 25.099C23.8614 25.2455 23.469 25.269 23.1703 25.1032C22.7329 24.8144 22.5922 24.2191 22.881 23.7818C23.5814 22.7684 23.6337 21.4527 22.9892 20.3364C22.3739 19.2708 21.2084 18.6582 19.9806 18.7581C19.4574 18.7895 19.0122 18.37 18.9808 17.8469C18.9494 17.3237 19.369 16.8785 19.8921 16.8471Z" fill="#f69322"></path>
                                            </svg>
                                        </div>
                                        <div className="info-content ml-dec-5">
                                            <a href="tel:+4733378901">
                                                <h6 className="title">+91-8123410101 / 080-41677484</h6>
                                            </a>
                                            <span>Call us for support</span>
                                        </div>
                                    </div>
                                    <div className="contact-single">
                                        <div className="icon">

                                            <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M26.25 0.5C28.3008 0.5 30 2.19922 30 4.25V19.25C30 21.3594 28.3008 23 26.25 23H3.75C1.64063 23 0 21.3594 0 19.25L0 4.25C0 2.19922 1.64063 0.5 3.75 0.5L26.25 0.5ZM3.75 2.375C2.69531 2.375 1.875 3.25391 1.875 4.25V6.35938L13.3008 14.9727C14.2969 15.7344 15.6445 15.7344 16.6406 14.9727L28.125 6.41797V4.25C28.125 3.25391 27.2461 2.375 26.25 2.375L3.75 2.375ZM28.125 19.25V8.70312L17.8125 16.4375C16.9336 17.082 15.9375 17.4336 15 17.4336C14.0039 17.4336 13.0078 17.082 12.1875 16.4375L1.875 8.70312L1.875 19.25C1.875 20.3047 2.69531 21.125 3.75 21.125H26.25C27.2461 21.125 28.125 20.3047 28.125 19.25Z" fill="#f69322"></path>
                                            </svg>

                                        </div>
                                        <div className="info-content">
                                            <a href="mailto:someone@example.com">
                                                <h6 className="title">info@ecosoch.com</h6>
                                            </a>
                                            <span>Email us for query</span>
                                        </div>
                                    </div>
                                    <div className="contact-single">
                                        <div className="icon">

                                            <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.4688 7.3125C15.4688 6.55078 16.0547 5.90625 16.875 5.90625C17.6367 5.90625 18.2812 6.55078 18.2812 7.3125C18.2812 8.13281 17.6367 8.71875 16.875 8.71875C16.0547 8.71875 15.4688 8.13281 15.4688 7.3125ZM15.9961 19.0312C14.1211 16.6875 9.84375 11.0039 9.84375 7.78125C9.84375 3.91406 12.9492 0.75 16.875 0.75C20.7422 0.75 23.9062 3.91406 23.9062 7.78125C23.9062 11.0039 19.5703 16.6875 17.6953 19.0312C17.2852 19.6172 16.4062 19.6172 15.9961 19.0312ZM21.4453 9.83203C21.8555 8.89453 22.0312 8.25 22.0312 7.78125C22.0312 4.96875 19.6875 2.625 16.875 2.625C14.0039 2.625 11.7188 4.96875 11.7188 7.78125C11.7188 8.25 11.8359 8.89453 12.2461 9.83203C12.5977 10.7695 13.1836 11.7656 13.7695 12.7617C14.7656 14.4023 15.9375 15.9844 16.875 17.1562C17.7539 15.9844 18.9258 14.4023 19.9219 12.7617C20.5078 11.7656 21.0938 10.7695 21.4453 9.83203ZM23.7305 13.8164C23.7305 13.875 23.6719 13.875 23.6133 13.875C24.082 13.0547 24.5508 12.1758 24.9023 11.3555L31.8164 8.60156C32.6953 8.25 33.75 8.89453 33.75 9.89062V25.7695C33.75 26.3555 33.3984 26.8828 32.8125 27.0586L23.7305 30.6914C23.5547 30.8086 23.3789 30.8086 23.1445 30.75L10.3125 27.0586L1.875 30.457C0.996094 30.8086 0 30.1641 0 29.168L0 13.2891C0 12.7031 0.292969 12.1758 0.878906 12L8.08594 9.07031C8.20312 9.71484 8.37891 10.3008 8.61328 10.8867L1.875 13.582L1.875 28.4648L9.375 25.4766V18.5625C9.375 18.0938 9.78516 17.625 10.3125 17.625C10.7813 17.625 11.25 18.0938 11.25 18.5625V25.3594L22.5 28.582V18.5625C22.5 18.0938 22.9102 17.625 23.4375 17.625C23.9062 17.625 24.375 18.0938 24.375 18.5625V28.4648L31.875 25.4766V10.5937L23.7305 13.8164Z" fill="#f69322"></path>
                                            </svg>

                                        </div>
                                        <div className="info-content">
                                            <a href="/">
                                                <h6 className="title">
                                                    #940, “Sha Arcade”, 2nd phase, NTI layout, Rajiv
                                                    Gandhinagar</h6>
                                            </a>
                                            <span> Kodigehalli, Bengaluru 560097</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pb--20 pt--20 border-top-copyright">
                <div className="col-lg-8">
                    <div className="copyright-area-two">
                        <div className="left">
                            <p>Copyright © 2011-2024 EcoSoch | All Rights Reserved | Powered by <a href="index.html">EcoSoch</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="copyright-area-two">
                        <div className="right">
                            <p>Design by :<a href="/" target="_blank"> Routes Compute</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default Footer
