import GlobalStyle from "./components/GlobalStyle";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Project from "./components/portfolio/Project";
import Qualification from "./components/qualification/Qualification";
import ScrollUp from "./components/scrollup/ScrollUp";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
// import Cmd from "./components/terminal/Terminal";
import Testimonials from "./components/testimonials/Testimonials";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <>
    <Header />
    <GlobalStyle />
    <Home />
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
    <About />
    <Skills />
    <Services />
    <ScrollUp />
    <Qualification />
    <Project />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}