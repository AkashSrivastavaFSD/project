import React from 'react';
import {Link} from 'react-router-dom';
function Index (){

  return(
    <div>
    

{/* shop section */}

<section className="shop_section layout_padding">
<div className="container">
  <div className="box">
    <div className="detail-box">
      <h2>
        Fruit shop
      </h2>
      <p>
        There are many variations of passages of Lorem Ipsum available
      </p>
    </div>
    <div className="img-box">
      <img src="images/shop-img.jpg" alt=""/>
    </div>
    <div className="btn-box">
      <Link to="/login">
        Buy Now
      </Link>
    </div>
  </div>
</div>
</section>

{/* end shop section */}

{/* about section */}

<section className="about_section">
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

{/* fruit section */}

<section className="fruit_section layout_padding">
<div className="container">
  <div className="heading_container">
    <hr/>
    <h2>
      Fresh Fruit
    </h2>
  </div>
</div>
<div className="container-fluid">

  <div className="fruit_container">
    <div className="box">
      <img src="images/f-1.jpg" alt=""/>
      <div className="link_box">
        <h5>
          Orange
        </h5>
        <a href="">
          Buy Now
        </a>
      </div>
    </div>
    <div className="box">
      <img src="images/f-2.jpg" alt=""/>
      <div className="link_box">
        <h5>
          Blueberry
        </h5>
        <a href="">
          Buy Now
        </a>
      </div>
    </div>
    <div className="box">
      <img src="images/f-3.jpg" alt=""/>
      <div className="link_box">
        <h5>
          Banana
        </h5>
        <a href="">
          Buy Now
        </a>
      </div>
    </div>
    <div className="box">
      <img src="images/f-4.jpg" alt=""/>
      <div className="link_box">
        <h5>
          Apple
        </h5>
        <a href="">
          Buy Now
        </a>
      </div>
    </div>
    <div className="box">
      <img src="images/f-5.jpg" alt=""/>
      <div className="link_box">
        <h5>
          Mango
        </h5>
        <a href="">
          Buy Now
        </a>
      </div>
    </div>
    <div className="box">
      <img src="images/f-6.jpg" alt=""/>
      <div className="link_box">
        <h5>
          Strawberry
        </h5>
        <a href="">
          Buy Now
        </a>
      </div>
    </div>
  </div>
</div>
</section>

{/* end fruit section */}


{/* client section */}

<section className="client_section layout_padding-bottom">
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


{/* contact section */}
<section className="contact_section layout_padding-bottom">
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
            <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="300" frameborder="0" style={{border:'0', width: '100%', height:'100%'}} allowfullscreen></iframe>
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

export default Index;
    