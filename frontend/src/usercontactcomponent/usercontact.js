import React from 'react';

function Usercontact()
{
  return(
    <div>

  {/* contact section */}
  <section className="contact_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="offset-lg-2 col-md-10 offset-md-1">
          <div className="heading_container">
            <hr/>
            <h2>
              Request A call back
            </h2>
          </div>
        </div>
      </div>

      <div className="layout_padding2-top">
        <div className="row">
          <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-1">
            <form action="">
              <div className="contact_form-container">
                <div>
                  <div>
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="text" className="message_input" placeholder="Message" />
                  </div>
                  <div>
                    <button type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6 px-0">
            <div className="map_container">
              <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="300" frameborder="0" style={{border:0, width: '100%', height:'100%'}} allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end contact section */}


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
              <img src="/images/location.png" alt=""/>
              <span>
                Passages of Lorem Ipsum available
              </span>
            </a>
          </div>
          <div className="col-md-4">
            <a href="">
              <img src="/images/call.png" alt=""/>
              <span>
                Call : +012334567890
              </span>
            </a>
          </div>
          <div className="col-md-4">
            <a href="">
              <img src="/images/mail.png" alt=""/>
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
                <img src="/images/facebook-logo-button.png" alt=""/>
              </a>
            </div>
            <div>
              <a href="">
                <img src="/images/twitter-logo-button.png" alt=""/>
              </a>
            </div>
            <div>
              <a href="">
                <img src="/images/linkedin.png" alt=""/>
              </a>
            </div>
            <div>
              <a href="">
                <img src="/images/instagram.png" alt=""/>
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
export default Usercontact;