"use strict";

require("../scss/style.scss")
let {books} = require("../json/books.json")
let listBooks = require("./listBooks.js")
let bookList = listBooks(books)

document.getElementsByClassName("books-page-content")[0].appendChild(bookList)