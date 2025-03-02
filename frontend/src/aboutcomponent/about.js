import React from 'react';
 function About()
{
  return (
    <div>

  {/* about section */}

  <section className="about_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 px-0">
          <div className="img-box">
            <img src="images/about-img.jpg" alt=""/>
          </div>
        </div>
        <div className="col-md-5">
          <div className="detail-box">
            <div className="heading_container">
              <hr/>
              <h2>
                About Our Fruit Shop
              </h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* end about section */}

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
 export default About;