import React from "react";

const COVERS = (id, size = "M") => `https://covers.openlibrary.org/b/id/${id}-${size}.jpg`;
const WORK_URL = (key) => `https://openlibrary.org${key}`;
const safeJoin = (arr, sep = ", ") => (arr && arr.length ? arr.join(sep) : "—");

const BookCard = ({ doc }) => {
  const cover = doc.cover_i ? COVERS(doc.cover_i, "M") : null;
  const title = doc.title || "Untitled";
  const authors = doc.author_name || [];
  const year = doc.first_publish_year ?? doc.publish_year?.[0];

  return (
    <article className="rounded-2xl bg-white border border-slate-200 shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      {cover ? (
        <img src={cover} alt="Book cover" className="h-64 w-full object-cover" />
      ) : (
        <div className="h-64 w-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-400">
          No Cover
        </div>
      )}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-lg text-indigo-700 line-clamp-2">{title}</h3>
        <p className="text-sm text-slate-600 mt-1">{safeJoin(authors)}</p>
        <span className="text-xs text-slate-500 mt-auto">
          {year ? `First published ${year}` : "Year unknown"}
        </span>
        <a
          href={WORK_URL(doc.key)}
          target="_blank"
          rel="noreferrer"
          className="mt-3 px-4 py-2 rounded-lg bg-indigo-500 text-white text-center text-sm font-medium hover:bg-indigo-600 transition"
        >
          View More
        </a>
      </div>
    </article>
  );
};

export default BookCard;
