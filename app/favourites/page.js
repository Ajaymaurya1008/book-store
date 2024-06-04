'use client';
import React, { useEffect, useState } from "react";
import BookCard from "@/components/BookCard";

const favouritePage = () => {
  const [books, setBooks] = useState([]);

  const removeFavorite = (index) => {
    const newBooks = books.filter((book, i) => i !== index);
    setBooks(newBooks);
    localStorage.setItem("favoriteBooks", JSON.stringify(newBooks));
    toast.success("Book removed from favourites");
  };

  useEffect(() => {
    const books = localStorage.getItem("favoriteBooks");
    if (books) {
      setBooks(JSON.parse(books));
    }
  }, []);

  return (
    <div className="relative h-full min-h-screen bg-gradient-to-br from-blue-800 to-violet-600">
      <div className="absolute inset-0 bottom-32 -z-10" />
      <div className="mx-auto flex max-w-screen-md flex-col">
        <h1 className="mt-10 text-center text-3xl font-bold text-white sm:mt-20 sm:text-5xl">
          Your favourite books
        </h1>
        <p className="mt-6 text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut
          hic, deserunt recusandae dolorem minus quaerat suscipit excepturi
          doloribus nam labore? Voluptatem modi maxime iste.
        </p>
      </div>
      <div className="mx-auto mt-16 flex w-full max-w-screen-lg flex-wrap items-center justify-center gap-6 rounded-xl">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            editionCount={book.edition_count}
            btnName="Remove"
            onClick={() => removeFavorite(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default favouritePage;
