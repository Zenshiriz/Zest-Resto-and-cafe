import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { useState } from "react";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [scrolling , setScrolling] = useState(false)

  window.addEventListener("scroll", () => {
    if (
      window.scrollY > "10"
    
    ) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout scrolling={scrolling}/>}>
            <Route path='/' element={<Home  />} />
            <Route path='menu' element={<Menu  />} />
            <Route path='gallery' element={<Gallery  />} />
            <Route path='about' element={<About  />} />
            <Route path='contact' element={<Contact  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
