import React from "react";

const Header = () => (
  <header className="sticky top-0 z-30 backdrop-blur bg-white/70 shadow-md">
    <div className="mx-auto max-w-7xl px-6 py-4 flex items-center gap-3">
      <div className="size-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 text-white grid place-content-center font-bold shadow-md">
        BF
      </div>
      <div>
        <h1 className="text-2xl font-bold leading-tight text-indigo-700">Book Finder</h1>
        <p className="text-sm text-slate-500 -mt-0.5">Powered by Open Library</p>
      </div>
    </div>
  </header>
);

export default Header;
