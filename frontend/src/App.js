import './App.css';
import Header from './headercomponent/header.js';
import Footer from './footercomponent/footer.js';
import Nav from './navcomponent/nav.js';
import Index from './indexcomponent/index.js';
import Contact from './contactcomponent/contact.js';
import About from './aboutcomponent/about.js';
import Fruit from './fruitcomponent/fruit.js';
import Login from './logincomponent/login.js';
import Registration from './registrationcomponent/registration.js';
import Userabout from './useraboutcomponent/userabout.js';
import Usercontact from './usercontactcomponent/usercontact.js';
import Userfruit from './userfruitcomponent/userfruits.js';
import Usercart from './usercartcomponent/cart.js';
import Usernav from './usernavcomponent/usernav.js';
import Userindex from './userindexcomponent/userindex.js';
import Adminindex from './adminindexcomponent/adminindex.js';
import Adminnav from'./adminnavcomponent/adminnav.js';
import Manageuser from'./manageusercomponent/manageuser.js';
import Testimonial from'./testimonialcomponent/testimonial.js';
import Adminsetting from'./adminsettingcomponent/adminsetting.js';
import Usersetting from './usersettingcomponent/usernsetting.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CartProvider } from './contextcomponent/CartContext.js';

function UserRoutes({ setRole }) {
  return (
    <>
      <Usernav setRole={setRole} />
      <Routes>
        <Route path="/user" element={<Userindex />} />
        <Route path="/user/about" element={<Userabout />} />
        <Route path="/user/contact" element={<Usercontact />} />
        <Route path="/user/fruits" element={<Userfruit />} />
        <Route path="/user/cart" element={<Usercart />} />
        <Route path="/user/settings" element={<Usersetting />} />
        <Route path="*" element={<Navigate to="/user" />} />
      </Routes>
    </>
  );
}

function AdminRoutes({ setRole }) {
  return (
    <>
      <Adminnav setRole={setRole} />
      <Routes>
        <Route path="/admin" element={<Adminindex />} />
        <Route path="/admin/settings" element={<Adminsetting />} />
        <Route path="/admin/manageusers" element={<Manageuser />} />
        <Route path="*" element={<Navigate to="/admin" />} />
      </Routes>
    </>
  );
}
function App() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('authToken') ? 'user' : null;
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    setRole(null); 
  };

  return (
    <CartProvider>
    <div>
      <BrowserRouter>
        <Header />
        {!role && <Nav />}
        {role === 'user' ? (
          <UserRoutes setRole={setRole} />
        ) : role === 'admin' ? (
          <AdminRoutes setRole={setRole} />
        ): (
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login setRole={setRole} />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fruits" element={<Fruit />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
        <Footer />
      </BrowserRouter>
    </div>
    </CartProvider>
      );
}

export default App;
