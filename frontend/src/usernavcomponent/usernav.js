
  import { Link , useNavigate } from "react-router-dom";
import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Usernav({ setRole }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setRole(null); // Reset role to null
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      <div>
     
        <section className="nav_section">
          <div className="container">
            <div className="custom_nav2">
              <nav className="navbar navbar-expand custom_nav-container">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div className="d-flex flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <Link to="/user" className="nav-link">
                          Home <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/user/about" className="nav-link">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/user/fruits" className="nav-link">
                          Our Fruit
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/user/contact" className="nav-link">
                          Contact Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/user/settings" className="nav-link">
                          Settings
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/user/cart" className="nav-link">
                          My Cart
                        </Link>
                      </li>
                      <Link
                        to="/login"
                        className="nav-item nav-link"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                                          </ul>
                   
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </section>
       
      </div>
    </div>
  );
}

export default Usernav;
