// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar"; // Assuming you have Navbar in components
import Footer from "./components/Footer";
import Services from "./components/Services";
import Session from "./components/Session";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Contact from "./components/Contact";
import Booksession from "./components/Booksession";
import Individualsection from "./components/Individualsection";
import Onlinecounseling from "./components/Onlinecounseling";
import Colors from "./components/Colors";
import Blogs from "./components/Blogs";
import Blogdetail from "./components/Blogdetail";
import Pyment from "./components/Pyment";
import UpiPayment from "./components/Upipayment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  console.log("App.js");

  return (
    <Router>
      {/* <Navbar  style={{backgroundColor:""}}/> */}

      <div>
        <Routes>
          {/* Routes for different pages */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route
            path="/about"
            element={
              <>
                <Navbar style={{ backgroundColor: Colors.gradient }} />
                <About />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navbar style={{ backgroundColor: Colors.gradient }} />
                <Services />
              </>
            }
          />
          <Route
            path="/session"
            element={
              <>
                <Navbar style={{ backgroundColor: Colors.gradient }} />
                <Session />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <LoginForm />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <SignupForm />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
              </>
            }
          />
          <Route
            path="/booksession"
            element={
              <>
                <Navbar style={{ backgroundColor: Colors.gradient }} />
                <Booksession />
              </>
            }
          />
          <Route
            path="/individual"
            element={
              <>
                <Navbar style={{ backgroundColor: Colors.gradient }} />
                <Individualsection />
              </>
            }
          />
          <Route
            path="/onlinecounseling"
            element={
              <>
                <Navbar style={{ backgroundColor: Colors.gradient }} />
                <Onlinecounseling />
              </>
            }
          />
          <Route
            path="/blogs"
            element={
              <>
                <Navbar style={{ backgroundColor: Colors.gradient }} />
                <Blogs />
              </>
            }
          />
          <Route
            path="/blogdetail"
            element={
              <>
                <Navbar style={{ backgroundColor: Colors.gradient }} />
                <Blogdetail />
              </>
            }
          />
          <Route
            path="/pyment"
            element={
              <>
                <Navbar style={{ backgroundColor: Colors.gradient }} />
                <Pyment />
              </>
            }
          />
          <Route
            path="/upipayment"
            element={
              <>
                <Navbar style={{ backgroundColor: Colors.gradient }} />
                <UpiPayment />
              </>
            }
          />
        </Routes>
      </div>

      {/* Footer will be shown on every route */}
      <Footer />
    </Router>
  );
}

export default App;
