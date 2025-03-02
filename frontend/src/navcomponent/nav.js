


import { Link } from "react-router-dom";
import React from "react";
function Nav(){
    return(
        <div>
<div>
{/* nav section */}

<section className="nav_section">
  <div className="container">
    <div className="custom_nav2">
      <nav className="navbar navbar-expand custom_nav-container ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex  flex-column flex-lg-row align-items-center">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link">About </Link>
              </li>
              <li className="nav-item">
                <Link to="fruits" className="nav-link">Our Fruit </Link>
              </li>
              <li className="nav-item">
                <Link to="testimonial" className="nav-link" >Testimonial</Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link" >Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to="login"className="nav-link" >Login</Link>
              </li>
              <li className="nav-item">
                <Link to="registration"className="nav-link" >New User</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  </div>
</section>

{/* end nav section */}
        </div>
        </div>
    )
};
export default Nav;