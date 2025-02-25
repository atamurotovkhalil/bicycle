import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import AllBooks from "./components/AllBooks";
import CreateBook from "./components/CreateBook";
import Book from "./components/Book";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/allbooks" element={<AllBooks />} />
          <Route path="/createbook" element={<CreateBook />} />
          <Route path='/book/:id' element={<Book/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
