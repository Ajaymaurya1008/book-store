"use client";
import BookCard from "@/components/BookCard";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const fetchBooks = (e) => {
    e.preventDefault();
    const fetchPromise = async () => {
      const res = await axios.get(
        `https://openlibrary.org/search.json?q=${search}&limit=10&page=1`,
      );
      return res;
    };

    toast
      .promise(fetchPromise(), {
        pending: "Fetching books",
        success: "Books loaded successfully!",
        error: "There was an error loading the books",
      })
      .then((res) => {
        if (res.data) {
          setBooks(res.data.docs);
        }
        console.log(res.data.docs);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addFavorite = (index) => {
    const prevBooks = localStorage.getItem("favoriteBooks");
    const favoriteBooks = [
      ...(prevBooks ? JSON.parse(prevBooks) : []),
      books[index],
    ]
    localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
    toast.success("Book added to favourites");
  };

  return (
    <>
      <div className="relative h-full min-h-screen bg-gradient-to-br from-blue-800 to-violet-600">
        <div className="absolute inset-0 bottom-32 -z-10" />
        <div className="mx-auto flex max-w-screen-md flex-col">
          <h1 className="mt-10 text-center text-3xl font-bold text-white sm:mt-20 sm:text-5xl">
            Your goto Book Store
          </h1>
          <p className="mt-6 text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut
            hic, deserunt recusandae dolorem minus quaerat suscipit excepturi
            doloribus nam labore? Voluptatem modi maxime iste.
          </p>
          <form
            onSubmit={fetchBooks}
            className="abg-white relative px-4 sm:mx-auto mt-8 w-full max-w-sm space-y-2 overflow-hidden rounded-lg sm:space-y-0"
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md px-5 py-2 text-center text-black outline-none sm:text-left"
              type="text"
              placeholder="Search for a book"
              required
            />
            <button
              type="submit"
              className="right-0 w-full rounded-md sm:rounded-none bg-black px-8 py-2 text-white sm:absolute sm:w-auto"
            >
              Search
            </button>
          </form>
        </div>
        <div className="mx-auto mt-16 flex w-full max-w-screen-lg flex-wrap items-center justify-center gap-6 rounded-xl">
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              editionCount={book.edition_count}
              btnName="Add to Favourites"
              onClick={() => addFavorite(index)}
              heart={true}
            />
          ))}
        </div>
      </div>
    </>
  );
}
