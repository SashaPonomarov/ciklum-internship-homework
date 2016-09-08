"use strict";

require("../scss/style.scss")
let {books} = require("../json/books.json")
const listBooks = require("./listBooks.js")
const findBooks = require("./findBooks.js")

let bookList = listBooks(books)
let pageContent = document.getElementsByClassName("books-page-content")[0]
pageContent.appendChild(bookList)

document.getElementById('search-button').onclick = () => {
    findBooks(books)
}