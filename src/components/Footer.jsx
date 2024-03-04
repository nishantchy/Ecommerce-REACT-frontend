import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
      <div>
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="footer-heading">Hamro Electronics</h4>
                        <div className="footer-underline"></div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-heading">Quick Links</h4>
                        <div className="footer-underline"></div>
                        <div className="mb-2"><Link to="" className="text-white">Home</Link></div>
                        <div className="mb-2"><Link to="" className="text-white">About Us</Link></div>

                        <div className="mb-2"><Link to="" className="text-white">Contact Us</Link></div>
                        <div className="mb-2"><Link to="" className="text-white">Blogs</Link></div>
                        <div className="mb-2"><Link to="" className="text-white">Sitemaps</Link></div>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-heading">Shop Now</h4>
                        <div className="footer-underline"></div>
                        <div className="mb-2"><Link to="" className="text-white">Collections</Link></div>
                        <div className="mb-2"><Link to="" className="text-white">Trending Products</Link></div>
                        <div className="mb-2"><Link to="" className="text-white">New Arrivals Products</Link></div>
                        <div className="mb-2"><Link to="" className="text-white">Featured Products</Link></div>
                        <div className="mb-2"><Link to="" className="text-white">Cart</Link></div>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-heading">Reach Us</h4>
                        <div className="footer-underline"></div>
                        <div className="mb-2">
                            <p>
                                <i className="fLinkfa-map-marker"></i> Kathmandu, Nepal
                            </p>
                        </div>
                        <div className="mb-2">
                            <Link to="" className="text-white">
                                <i className="fLinkfa-phone"></i> +91 888-XXX-XXXX
                            </Link>
                        </div>
                        <div className="mb-2">
                            <Link to="" className="text-white">
                                <i className="fLinkfa-envelope"></i> hamroelectronics@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <p className=""> &copy; 2022 - Hamro Electronics. All rights reserved.</p>
                    </div>
                    <div className="col-md-4">
                        <div className="social-media">
                            Get Connected:
                            <Link to=""><i className="fLinkfa-facebook"></i></Link>
                            <Link to=""><i className="fLinkfa-twitter"></i></Link>
                            <Link to=""><i className="fLinkfa-instagram"></i></Link>
                            <Link to=""><i className="fLinkfa-youtube"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
