import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookFinder from "./components/BookFinder";

const App = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 text-slate-900">
    <Header />
    <BookFinder/>
    <Footer />
  </div>
);

export default App;
