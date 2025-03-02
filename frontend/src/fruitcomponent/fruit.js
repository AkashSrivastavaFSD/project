import React from'react';
import {Link} from'react-router-dom';
function Fruit(){
  return(
    <div>
{/* fruit section */}

<section className="fruit_section layout_padding">
  <div className="container">
    <div className="heading_container">
      <hr/>
      <h2>
        Fresh Fruits
      </h2>
    </div>
  </div>
  <div className="container-fluid">

    <div className="fruit_container">
      <div className="box">
        <img src="images/f-1.jpg" alt=""/>
        <div className="link_box">
          <h5> 
            Orange ₹ 180/kg  {/*Orange*/}
          </h5>
          <Link to="/login">
            Add to Cart   {/*Buy Now*/}
          </Link>
        </div>
      </div>
      <div className="box">
        <img src="images/f-2.jpg" alt=""/>
        <div className="link_box">
          <h5>
            Blueberry ₹ 950/kg
          </h5>
          <Link to="/login">
            Add to Cart
          </Link>
        </div>
      </div>
      <div className="box">
        <img src="images/f-3.jpg" alt=""/>
        <div className="link_box">
          <h5>
            Banana ₹ 60/Dozen
          </h5>
          <Link to="/login">
           Add to Cart
          </Link>
        </div>
      </div>
      <div className="box">
        <img src="images/f-4.jpg" alt=""/>
        <div className="link_box">
          <h5>
            Apple ₹ 200/kg
          </h5>
          <Link to="/login">
           Add to cart
          </Link>
        </div>
      </div>
      <div className="box">
        <img src="images/f-5.jpg" alt=""/>
        <div className="link_box">
          <h5>
            Mango ₹ 80/kg
          </h5>
          <Link to="/login">
            Add to Cart
          </Link>
        </div>
      </div>
      <div className="box">
        <img src="images/f-6.jpg" alt=""/>
        <div className="link_box">
          <h5>
            Strawberry ₹ 410/kg
          </h5>
          <Link to="/login">
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

{/* end fruit section */}


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

export default Fruit;