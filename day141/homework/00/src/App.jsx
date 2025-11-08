import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  // App კომპონენტი არის ჩვენი მთავარი კომპოზიციის ადგილი
  return (
    <div>
      {/* Home კომპონენტს ვასძახებთ */}
      <Home />
      {/* About კომპონენტს ვასძახებთ */}
      <About />
      {/* Contact კომპონენტს ვასძახებთ */}
      <Contact />
    </div>
  );
}