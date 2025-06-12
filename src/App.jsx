import React from "react"
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import CaseStudy from "./components/CaseStudy/CaseStudy"
import Blog from "./components/Blog/Blog"
import Contact from "./components/Contact/Contact"
import Book from "./components/Products/Book"
import Ring from "./components/Products/Ring"
import Tea from "./components/Products/Tea"
import { Route, Routes } from "react-router-dom"

function App() {
 
  return (
    <>

      <Nav />
      <div className=" mt-0">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/case-study" element={<CaseStudy/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product/book" element={<Book/>} />
          <Route path="/product/tea" element={<Tea/>} />
          <Route path="/product/ring" element={<Ring/>} />
      </Routes>
      </div>
 
    </>
  )
}

export default App
