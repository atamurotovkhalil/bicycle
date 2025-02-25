import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Books } from "../types/books";

interface BookStore {
  books: Books[];
  currentBook: Books;
  getCurrentBook: (id: string) => Promise<void>;
  addBook: (book: Books) => Promise<void>;
  removeBook: (id: string) => Promise<void>;
  fetchAllBooksData: (searchType: string, searchTerm?: any) => Promise<void>;
}

export const useBookStore = create<BookStore>()(
  devtools((set) => ({
    books: null,
    currentBook: [],

    // ✅ Set current book
    getCurrentBook: async (id: string) => {
        try {
          const response = await fetch(`http://localhost:3000/api/books/${id}`,{
            method: "GET",
          });

          if (!response.ok) {
            throw new Error(`Failed to get book: ${response.statusText}`);
          }

          const bookData = await response.json();
          set({currentBook: bookData });
        } catch (error) {
          console.error("Error getting book:", error);
        }
  
    },

    // ✅ Remove a book from the store
    removeBook: async (id: string) => {
      try {
        const response = await fetch(`http://localhost:3000/api/books/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to remove book: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Error removing book:", error);
      }
    },
    // ✅ Add a new book to the store
    addBook: async (book) => {
      try {
        const response = await fetch("http://localhost:3000/api/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(book),
        });

        if (!response.ok) {
          throw new Error(`Failed to add book: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Error adding book:", error);
      }
    },
    // ✅ Fetch all books from the API
    fetchAllBooksData: async (searchType: any, searchTerm: any) => {
      try {
        let url = "http://localhost:3000/api/books";

        if (searchTerm) {
          url += `?${searchType}=${encodeURIComponent(searchTerm)}`;
        }

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch books: ${response.statusText}`);
        }

        const data = await response.json();
        set({ books: data });
      } catch (error) {
        console.error("Error fetching books data:", error);
      }
    },
  }))
);
