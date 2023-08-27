import {Component} from 'react'
import './index.css'

class AircraftComponents extends Component {
  render() {
    return (
      <>
        <div
          className="navbar navbar-inverse navbar-inverse-start navbar-fixed-top"
          role="navigation"
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.qKLEYAtWd6GlrBtJkUm7vQHaF7&pid=Api&P=0&h=180"
                  alt="logo"
                  id="logo"
                />
              </span>
            </div>
            <div className="">
              <ul className="nav navbar-nav pull-right">
                <li className="dropdown twolines">
                  <a
                    href="about/features"
                    className="dropdown-toggle"
                    data-hover="dropdown"
                  >
                    About
                    <br />
                    <strong>Aircraft Components</strong>{' '}
                    <b className="caret">{}</b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="about/features">Features</a>
                    </li>
                    <li>
                      <a href="about/customers">Customers</a>
                    </li>
                    <li>
                      <a href="about/pricing">Plans & Pricing</a>
                    </li>
                    <li>
                      <a href="about/about">About</a>
                    </li>
                    <li>
                      <a href="about/faq-contact">FAQs & Contact</a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown twolines">
                  <a
                    href="cart"
                    className="dropdown-toggle"
                    data-hover="dropdown"
                  >
                    {}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="cart" className="btn btn-warning btn-rfq-cart">
                        View RFQ cart (0)
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown twolines">
                  <a
                    href="messages/messages"
                    className="dropdown-toggle"
                    data-hover="dropdown"
                  >
                    My
                    <br />
                    <strong>RFQs</strong> <b className="caret">{}</b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="messages/messages">RFQs Received</a>
                    </li>
                    <li>
                      <a href="messages/messages">RFQs Sent</a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown twolines">
                  <a
                    href="supplier-shops"
                    className="dropdown-toggle"
                    data-hover="dropdown"
                  >
                    <span className="supplier-icon">{}</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="supplier-shops">Supplier Shops</a>
                    </li>
                  </ul>
                </li>

                <li id="login" className="dropdown twolines">
                  <span className="dropdown-toggle" data-toggle="dropdown">
                    Hi! Login
                    <br />
                    <strong>My Account</strong> <b className="caret">{}</b>
                  </span>
                  <div className="dropdown-menu dropdown-menu-right">
                    <form method="post" action="signin">
                      <div className="form-group">
                        <label htmlFor="aiemail">
                          <strong>Email</strong>
                        </label>
                        <div className="controls">
                          <input
                            type="text"
                            className="form-control"
                            size="30"
                            placeholder="Email"
                            name="loginEmail"
                            id="aiemail"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="aipassword">
                          <strong>Password</strong>
                          <a href="signin?forgotPassword=reset">
                            Forgot password?
                          </a>
                        </label>
                        <div className="controls">
                          <input
                            type="password"
                            className="form-control"
                            size="30"
                            placeholder="Passwort"
                            name="loginPassword"
                            id="password"
                          />
                        </div>
                      </div>
                      <input
                        type="submit"
                        value="Login"
                        name="submit"
                        className="btn btn-primary"
                      />
                      New? <a href="signup">Register for free</a>
                      <br />
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="myModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body center">
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                  <span className="sr-only">Close</span>
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="start-jumbo">
          <div className="container">
            <div className="row">
              <div className="start-intro-box-imac hidden-md hidden-sm hidden-xs">
                <img
                  src="img/start-imac.png"
                  alt=""
                  className="img-responsive"
                />
              </div>
              <div className="start-intro-box-search">
                <div className="start-intro-box-search-inner">
                  <h1>Online Marketplace for Aircraft Parts</h1>
                  <form className="" method="GET" action="search">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Search for part number"
                        value=""
                        name="q"
                        id="form-control"
                        className="form-control"
                      />
                      <span className="input-group-btn">
                        <button
                          id="form-control1"
                          className="btn btn-warning"
                          type="submit"
                        >
                          <span className="fa fa-search">{}</span>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="start-blue-numbers">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="start-blue-numbers-box">
                  <h2 id="heading">For Buyers</h2>
                  <ul id="buyers-list">
                    <li id="points">
                      Search aircraft parts and overhaul capabilities
                    </li>
                    <li id="points">
                      Send RFQs and receive quotes from suppliers
                    </li>
                    <li id="points">
                      Improve quality - rate your business partners
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="start-blue-numbers-box">
                  <h2 id="heading">
                    1<sup>st</sup> Rating System
                  </h2>
                  <img src="img/cert.png" alt="" className="pull-left" />
                  <p id="points">
                    Discover the aviation industry’s first  quality rating
                    system that helps you make the right purchase decision.
                  </p>
                  <p>
                    <a href="/about/features" className="btn btn-warning">
                      Explore Features
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="start-blue-numbers-box">
                  <h2 id="heading">For Suppliers</h2>
                  <ul id="buyers-list">
                    <li id="points">
                      Create your own supplier shop - list inventory &
                      capabilities
                    </li>
                    <li id="points">Receive RFQs and send quotes to buyers</li>
                    <li id="points">
                      Improve quality - rate your business partners
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="white-bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 center">
                <br />
                <br />
                <h2>
                  Trusted by many of the world's most respected brands in the
                  aviation industry
                </h2>
                <br />
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div
                  id="carousel-fipart-start"
                  className="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="item active">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="quote">
                            <div className="quote-profile">
                              <img
                                className="img-responsive img-circle"
                                src="img/content/testimonial-leki.jpg"
                                alt=""
                              />
                            </div>
                            <div className="quote-content">
                              <blockquote>
                                <p>
                                  As an international supplier LEKI is more than
                                  satisfied with Aircraft as a sales channel.
                                  They do a really good job providing an up to
                                  date webservice that delivers scores of RFQs
                                  in a quality far above average.
                                </p>
                              </blockquote>
                              <p className="source">
                                Peter stergaard Mietke, Leki Aviation
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-6">
                          <img
                            src="img/content/clients/air-canada.gif"
                            alt=""
                            className="trust-logo"
                          />
                          <img
                            src="img/content/clients/amsafe.gif"
                            alt=""
                            className="trust-logo"
                          />
                          <img
                            src="img/content/clients/eurocopter.gif"
                            alt=""
                            className="trust-logo"
                          />
                          <img
                            src="img/content/clients/geiq.gif"
                            alt=""
                            className="trust-logo"
                          />
                          <img
                            src="img/content/clients/diehl.gif"
                            alt=""
                            className="trust-logo visible-xlarge"
                          />
                        </div>
                        <div className="col-sm-6">
                          <div className="quote">
                            <div className="quote-profile">
                              <img
                                className="img-responsive img-circle"
                                src="img/content/testimonial-mid.jpg"
                                alt=""
                              />
                            </div>

                            <div id="paragraph" className="quote-content">
                              <p>
                                <p>
                                  By using Aircraft's real-time information, it
                                  allows us to quickly respond to customer
                                  requirements and helps build stronger
                                  relationships with our customers. It is easy
                                  to use and the staff at Aircraft.com is great
                                  to work with.
                                </p>
                              </p>
                              <p className="source">
                                Tom Genovese, Mid-Continent Instruments
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-6">
                          <img
                            src="img/content/clients/british-airways.gif"
                            alt=""
                            className="trust-logo"
                          />
                          <img
                            src="img/content/clients/elite.gif"
                            alt=""
                            className="trust-logo"
                          />
                          <img
                            src="img/content/clients/aaxico.gif"
                            alt=""
                            className="trust-logo"
                          />
                          <img
                            src="img/content/clients/airberlin.gif"
                            alt=""
                            className="trust-logo"
                          />
                          <img
                            src="img/content/clients/gulfstreaml.gif"
                            alt=""
                            className="trust-logo visible-xlarge"
                          />
                        </div>
                        <div className="col-sm-6">
                          <div className="quote">
                            <div className="quote-profile">
                              <span
                                className="underline"
                                data-toggle="modal"
                                data-target="#myModal"
                              >
                                <img
                                  className="img-responsive img-circle"
                                  src="img/layout/video-link.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            <div className="quote-content">
                              <blockquote>
                                <p>
                                  <br />
                                  <span
                                    className="underline"
                                    data-toggle="modal"
                                    data-target="#myModal"
                                  >
                                    Customers about Aircraft - Start video
                                  </span>
                                  <br />
                                  <br />
                                </p>
                              </blockquote>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 center">
              <br />
              <br />
              <h2>
                Ready to kickstart your online business with Aircraft
                Components?
              </h2>
              <p className="subline">You can upgrade or downgrade any time</p>
              <br />
              <a href="signup" className="btn btn-lg btn-warning">
                Sign up for free
              </a>
              <p>{}</p>
              <span>Plans & Pricing</span>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="advancedSearch"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="advancedSearchLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                  <span className="sr-only">Close</span>
                </button>

                <ul className="nav nav-pills" role="tablist">
                  <li className="active">
                    <a href="#parts" role="tab" data-toggle="tab">
                      Flying Parts
                    </a>
                  </li>
                  <li>
                    <a href="#capabilities" role="tab" data-toggle="tab">
                      Repair Capabilities
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div className="tab-pane fade active in" id="parts">
                    <form method="GET" action="">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="partsmultiple">
                              Search multiple part numbers
                            </label>
                            <textarea
                              className="form-control"
                              rows="6"
                              id="partsmultiple"
                              name="q"
                            >
                              {}
                            </textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="partstitle">
                              Title / Description
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Title / Description"
                              id="partstitle"
                              name="desc"
                              value=""
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="partsvendor">Vendor</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Vendor"
                              id="partsvendor"
                              name="ven"
                              value=""
                            />
                          </div>
                          <div className="form-group">
                            <i className="fa fa-lock">{}</i>
                            <button
                              type="button"
                              disabled
                              className="btn btn-warning"
                            >
                              <span className="fa fa-search">{}</span> Search
                              Parts
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="tab-pane fade" id="capabilities">
                    <form method="GET" action="/search">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="capsmultiple">
                              Search multiple capabilities
                            </label>
                            <textarea
                              className="form-control"
                              rows="6"
                              id="capsmultiple"
                              name="q"
                            >
                              {}
                            </textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="capstitle">
                              Title / Description
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value="Title / Description"
                              id="capstitle"
                              name="desc"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="capsvendor">Vendor</label>
                            <input
                              type="text"
                              className="form-control"
                              value="Vendor"
                              id="capsvendor"
                              name="ven"
                            />
                          </div>
                          <div className="form-group">
                            <i className="fa fa-lock"> </i>
                            <button
                              type="button"
                              disabled
                              className="btn btn-warning"
                            >
                              <span className="fa fa-search">{}</span> Search
                              Capabilities
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row footer">
            <div className="col-sm-12 center">
              <p className="footer-features">
                <a href="about/features">Features</a> |
                <a href="about/customers">Customers</a> |
                <a href="about/pricing">Pricing</a> |{' '}
                <a href="about/about">About</a> |
                <a href="about/faq-contact">FAQs & Contact</a>
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AircraftComponents
