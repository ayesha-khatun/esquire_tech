import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Landing/partials/Header";
import Footer from "./components/Landing/partials/Footer";

import Home from "./components/Landing/Home";
import About from "./components/Landing/About";
import Contact from "./components/Landing/Contact";
import Products from "./components/Landing/Products";
import Services from "./components/Landing/Services";
import { Switch, Route } from "react-router-dom";


// const Contact = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical Contact Page</h1>
//       </section>
//     </>
//   );
// };

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Home />
        <Footer/>
      </Route>
     
      <Route path="/about">
        <Header />
        <About />
        <Footer/>
      </Route>
      {/* <Route path="/header">
        <Header />
   
      </Route> */}
      <Route path="/products">
        <Header />
        <Products />
        <Footer/>
      </Route>

      <Route path="/services">
        <Header />
        <Services />
        <Footer/>
      </Route>

      <Route path="/contact">
        <Header />
        <Contact />
        <Footer/>
      </Route>
    
    </Switch>
  
  );
};

export default App;
