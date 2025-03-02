import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

function Adminindex() {
  const location = useLocation();
  const username = localStorage.getItem("username") || "User";

  return (
    <div>


    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        {`Welcome, ${username}`}
      </Heading>
      <Text fontSize="xl">Admin Page</Text>
    </Box>

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

export default Adminindex;