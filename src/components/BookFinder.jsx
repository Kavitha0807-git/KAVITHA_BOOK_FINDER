import React, { useState } from "react";
import BookCard from "./BookCard";

const API_BASE = "https://openlibrary.org/search.json";

const BookFinder = () => {
  const [title, setTitle] = useState("");
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    if (!title.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}?title=${encodeURIComponent(title)}`);
      const data = await res.json();
      setDocs(data.docs || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const onSearch = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <form onSubmit={onSearch} className="flex gap-3 items-center justify-center mb-8">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Search books by title..."
          className="w-full max-w-lg px-4 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition"
        >
          Search
        </button>
      </form>

      {loading ? (
        <p className="text-center text-indigo-600 font-medium animate-pulse">Searching...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {docs.map((doc, idx) => (
            <BookCard key={idx} doc={doc} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BookFinder;
