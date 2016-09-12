let listBooks = require("./listBooks.js")

const findBooks = (books) => {
    let searchField = document.getElementById('search-field')
    if (searchField.value === "") {return}
    let found = books.filter((book) => {
        if (book.title.toLowerCase().indexOf(searchField.value.toLowerCase()) !== -1) {
            return true
        }
    })
    found = listBooks(found)
    let pageContent = document.getElementsByClassName("books-page-content")[0]
    pageContent.removeChild(document.getElementsByClassName("book-list")[0])
    pageContent.appendChild(found)
}

module.exports = findBooks