import React, { useState } from "react";
import axios from "axios";
import { useToast } from '@chakra-ui/react';
import {Link} from'react-router-dom';

function Registration(){

const [ename,setEname] = useState("");
const [email,setEmail] = useState("");
const [mno,setMno] = useState("");
const [unm,setUnm] = useState("");
const [pw,setPw] = useState("");

const toast = useToast()
const addUser = (e) => {
    e.preventDefault();
    //alert("Working");
    axios
      .post("http://localhost:8000/user/create", {
        ename: ename,
        email: email,
        mno: mno,
        unm: unm,
        pw: pw,
      })
      .then((response) => {
        //console.log(response.data);
        //alert("resigtration successfull");
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        setEname("");
        setEmail("");
        setMno("");
        setUnm("");
        setPw("");
      })

      .catch((error) => {
        console.error("Error response:", error.response);
        alert("Registration failed");
    });

  };
    return(
        <div>
            <div>
 {/* contact section */}
 <section className="contact_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="offset-lg-2 col-md-10 offset-md-1">
          <div className="heading_container">
            <hr/>
            <h2>
              Registration New User
            </h2>
          </div>
        </div>
      </div>

      <div className="layout_padding2-top">
        <div className="row">
          <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-1">
            <form onSubmit={addUser}>
              <div className="contact_form-container">
                <div>
                  <div>
                  <label for="name">Your Name</label>
                    <input type="text" onChange={(event)=>{
                        setEname(event.target.value)
                    }} value={ename} class="form-control" placeholder="Full Name" />
                                    </div>

                  <div>
                  <label for="email">Email</label>
                   <input type="email" onChange={(event)=>{
                        setEmail(event.target.value)
                    }} value={email} class="form-control" placeholder="Enter Your Email" />
                 
                  </div>

                  <div>
                  <label for="mno">Contact</label>
                   <input type="text" onChange={(event)=>{
                        setMno(event.target.value)
                    }} value={mno} class="form-control" placeholder="Mobile Number" />
                 
                  </div>
                  
                  <div>
                  <label for="unm">UserName</label>
                  <input type="text" onChange={(event)=>{
                        setUnm(event.target.value)
                    }} value={unm} class="form-control" placeholder="Username" />
                  
                  </div>

                  <div>
                  <label for="pw">Password</label>
                  <input type="password" onChange={(event)=>{
                        setPw(event.target.value)
                    }} value={pw} class="form-control" placeholder="Enter your Paasword" />
                 
                  </div>
                  
                  <div>
                    <button type="submit">Register</button>
                   </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                 <Link to ="/login">Already ! have an account? Login Now</Link>
                  </div>
            </form>
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
        </div>
    );
}
export default Registration;