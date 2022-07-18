import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./dashboard.scss";

import Header from "../../components/Header";
import { SelectedBook } from "../../reduxConfig/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [bookList, setBookList] = useState([]);
  const [filteredList, setFilteredList] = useState(null);
  const [textSearch, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep")
      .then((res) => res.json())
      .then((response) => {
        setBookList(response.items || []);
      });
  }, []);

  const handleOnChange = (txt) => {
    setSearchText(txt);
    if (txt) {
      const filteredList = bookList.filter((book) =>
        `${book?.volumeInfo?.authors || ""}-${book?.volumeInfo?.title || ""}-${
          book?.volumeInfo?.publisher || ""
        }`
          .toLowerCase()
          .includes(txt.toLowerCase())
      );

      setFilteredList(filteredList);
    } else {
      setFilteredList(null);
    }
  };

  const handleOnClickBook = (book) => {
    dispatch(SelectedBook(book || {}));
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-body">
        <h1>Books</h1>
        <div className="search">
          <i className="bi bi-search icon"></i>
          <input
            type="text"
            placeholder="Search..."
            className="inputBox"
            onChange={(e) => handleOnChange(e.target.value)}
            value={textSearch}
          />
        </div>
        <h2>All Books</h2>
        <div className="bookCardsContainer">
          {(filteredList || bookList || []).map((book) => (
            <NavLink to={`/${book.id}`} key={book.id} className="nav-link">
              <div
                key={book.id}
                className="bookCard"
                onClick={() => handleOnClickBook(book)}
              >
                <h1 className="bookTitle">{book?.volumeInfo?.title || ""}</h1>
                <p className="bookDetails">{`Authors: ${
                  book?.volumeInfo?.authors || ""
                }`}</p>
                <p className="bookDetails">{`Publisher: ${
                  book?.volumeInfo?.publisher || ""
                }`}</p>
                <p className="bookDetails">{`Published Date: ${
                  book?.volumeInfo?.publishedDate || ""
                }`}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
