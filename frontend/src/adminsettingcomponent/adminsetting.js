
import React, { useState } from 'react';
import axios from 'axios';
import { Box, Input, Button, FormLabel, FormControl, Text,useToast } from '@chakra-ui/react';

function Adminsetting () {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();
  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      //const response = await axios.put('http://localhost:8000/user/changepassword', {
        const response = await axios.put('https://project-37ge.onrender.com/user/changepassword', {
        email,
        oldPassword,
        newPassword,
      });
      toast({
        title: "Password Change Successfully.",
        description: " updated ",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Clear the input fields
      setEmail('');
      setOldPassword('');
      setNewPassword('');

      setMessage(response.data.message);
    } 
    catch (err) {
      console.error('Error changing password:', err.response?.data || err.message);
      setMessage(err.response?.data?.message || 'Failed to change password.');
    }
  };

  return (
    <div>
      
<Box p={5}>

       <section className="contact_section layout_padding" align="left">
    <div className="container-fluid">
      <div className="row">
        <div className="offset-lg-2 col-md-10 offset-md-1">
          <div className="heading_container">
            <hr/>
            <h1>
           Settings
            </h1>
          </div>
        </div>
      </div>
      </div>
      </section>
      <form onSubmit={handleChangePassword}>
        <FormControl mb={3}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email} placeholder='Enter your Email'
            onChange={(e) => setEmail(e.target.value)}
            required maxW="500px" 
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Old Password</FormLabel>
          <Input
            type="password"
            value={oldPassword} placeholder='Enter Current Password'
            onChange={(e) => setOldPassword(e.target.value)}
            required maxW="500px" 
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>New Password</FormLabel>
          <Input
            type="password"
            value={newPassword} placeholder='Enter New Password'
            onChange={(e) => setNewPassword(e.target.value)}
            required maxW="500px" 
          />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Change Password
        </Button>
      </form>
      {message && <Text mt={3}>{message}</Text>}
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
};

export default Adminsetting;
