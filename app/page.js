"use client";
import BookCard from "@/components/BookCard";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);

  const fetchBooks = async (e) => {
    e.preventDefault();
    setSearching(true);

    const fetchPromise = axios.get(
      `https://openlibrary.org/search.json?q=${search}&limit=10&page=1`,
    );

    toast.promise(fetchPromise, {
      pending: "Fetching books",
      success: "Books loaded successfully!",
      error: "There was an error loading the books",
    });

    try {
      const res = await fetchPromise;
      if (res.data) {
        const newBooks = res.data.docs.map((book) => ({
          key: book._version_,
          title: book.title,
          editionCount: book.edition_count,
          bool: false,
        }));
        setBooks(newBooks);
      }
      console.log(res.data.docs);
    } catch (error) {
      console.log(error);
    } finally {
      setSearching(false);
    }
  };

  const addFavorite = (index,key) => {
    try {
      const prevBooks = localStorage.getItem("favoriteBooks")
      const favoriteBooks =JSON.parse(prevBooks)
      const isFavorite = favoriteBooks.some((book)=>book.key === key) 
      console.log(isFavorite)
      if (!isFavorite) {
        favoriteBooks.push(books[index])
        localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
        toast.success("Book added to favourites");
      } else {
        toast.error("Book already added to favourites");
      }
    } catch (error) {
      console.log(error);
      console.log("There was an error adding the book to the favorites");
    }
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
            Discover a vast collection of books from various genres and authors.
            Use our intuitive search feature to find your next read quickly and
            easily. Add your favorite books to a personalized list for easy
            access and future reference.
          </p>
          <form
            onSubmit={fetchBooks}
            className="abg-white relative mt-8 w-full max-w-sm space-y-2 overflow-hidden rounded-lg px-4 sm:mx-auto sm:space-y-0"
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
              disabled={searching}
              className={`right-0 w-full rounded-md ${searching ? "bg-gray-400" : "bg-black"} px-8 py-2 text-white sm:absolute sm:w-auto sm:rounded-none`}
            >
              Search
            </button>
          </form>
        </div>
        <div className="mx-auto mt-16 flex w-full max-w-screen-lg flex-wrap items-center justify-center gap-6 rounded-xl">
          {books.map((book,index) => (
            <BookCard
              key={book.key}
              title={book.title}
              editionCount={book.editionCount}
              btnName="Add to Favourites"
              onClick={() => addFavorite(index,book.key)}
              heart={true}
            />
          ))}
        </div>
      </div>
    </>
  );
}
