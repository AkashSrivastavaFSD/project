import React from 'react';

function Testimonial(){
  return(
    <div>
{/* client section */}

<section className="client_section layout_padding">
  <div className="container ">
    <div className="heading_container">
      <h2>
        What Syas Cutomer
      </h2>
      <hr/>
    </div>
    <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="client_container layout_padding-top">
            <div className="img-box">
              <img src="images/client-img.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Jone Mark
              </h5>
              <p>
                <img src="images/left-quote.png" alt=""/>
                <span>
                  Lorem ipsum dolor sit amet,
                </span>
                <img src="images/right-quote.png" alt=""/> <b/>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="client_container layout_padding-top">
            <div className="img-box">
              <img src="images/client-img.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Jone Mark
              </h5>
              <p>
                <img src="images/left-quote.png" alt=""/>
                <span>
                  Lorem ipsum dolor sit amet,
                </span>
                <img src="images/right-quote.png" alt=""/> <br/>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="client_container layout_padding-top">
            <div className="img-box">
              <img src="images/client-img.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Jone Mark
              </h5>
              <p>
                <img src="images/left-quote.png" alt=""/>
                <span>
                  Lorem ipsum dolor sit amet,
                </span>
                <img src="images/right-quote.png" alt=""/> <br/>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              </p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
        <span className="sr-only">Next</span>
      </a>
    </div>

  </div>
</section>

{/* end client section */}

{/* info section */}

<section className="info_section layout_padding">
  <div className="container">
    <div className="info_logo">
      <h2>
      FRUIT BASKET
      </h2>
    </div>
    <div className="info_contact">
      <div className="row">
        <div className="col-md-4">
          <a href="">
            <img src="images/location.png" alt=""/>
            <span>
              Passages of Lorem Ipsum available
            </span>
          </a>
        </div>
        <div className="col-md-4">
          <a href="">
            <img src="images/call.png" alt=""/>
            <span>
              Call : +012334567890
            </span>
          </a>
        </div>
        <div className="col-md-4">
          <a href="">
            <img src="images/mail.png" alt=""/>
            <span>
              demo@gmail.com
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 col-lg-9">
        <div className="info_form">
          <form action="">
            <input type="text" placeholder="Enter your email"/>
            <button>
              subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="col-md-4 col-lg-3">
        <div className="info_social">
          <div>
            <a href="">
              <img src="images/facebook-logo-button.png" alt=""/>
            </a>
          </div>
          <div>
            <a href="">
              <img src="images/twitter-logo-button.png" alt=""/>
            </a>
          </div>
          <div>
            <a href="">
              <img src="images/linkedin.png" alt=""/>
            </a>
          </div>
          <div>
            <a href="">
              <img src="images/instagram.png" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

{/* end info section */}


    </div>
  );
}

export default Testimonial;