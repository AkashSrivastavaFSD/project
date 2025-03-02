import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setRole }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Clear existing data before login
      localStorage.removeItem("authToken");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("username");

     //const response = await axios.post("http://localhost:8000/user/login", {
        const response = await axios.post("https://project-37ge.onrender.com/user/login", {
        email,
        pw,
      });

      const userRole = response.data.role;
      setRole(userRole);

      // Store token and user information
      localStorage.setItem("authToken", response.data.token || ""); // Token might not exist
      localStorage.setItem("userEmail", email);
      localStorage.setItem("username", response.data.username);

      toast({
        title: "Login successful.",
        description: "Welcome back!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Navigate based on role
      if (userRole === "admin") {
        navigate("/admin/index");
      } else {
        navigate("/user/index");
      }
    } catch (error) {
      console.error("Login failed", error);
      toast({
        title: "Login failed.",
        description: error.response?.data?.message || "Invalid email or password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <section className="contact_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="offset-lg-2 col-md-10 offset-md-1">
              <div className="heading_container">
                <hr />
                <h2>Login</h2>
              </div>
            </div>
          </div>

          <div className="layout_padding2-top">
            <div className="row">
              <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-1">
                <form onSubmit={handleLogin}>
                  <div className="contact_form-container">
                    <div>
                      <label>Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Enter Your Email"
                        required
                      />
                    </div>
                    <div>
                      <label>Password</label>
                      <input
                        type="password"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                        className="form-control"
                        placeholder="Enter your Password"
                        required
                      />
                    </div>
                    <button type="submit">Login</button>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <Link to="/registration">Don't have an account? Register</Link>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <Link to="/">Back to Home</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
  {/* info section */}

  <section className="info_section layout_padding">
    <div className="container">
      <div className="info_logo">
        <h2>
        FRUIT BASKET        </h2>
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

export default Login;
