function listBooks(books) {
    let bookList = document.createElement('ul')
    bookList.className = "book-list"
    books.forEach(function(book) {
        let bookItem = document.createElement('li')
        let bookCover = document.createElement('div')
        let bookLink = document.createElement('a')
        let bookInfo = document.createElement('div')
        bookItem.className = "book-item"
        bookCover.className = "book-cover"
        bookCover.style["background-image"] = "url(" + book.cover + ")"
        bookLink.href = book.url
        bookCover.appendChild(bookLink)
        bookInfo.className = "book-info"
        bookInfo.innerHTML = "<h1><a href='" + book.url + "'>" + book.title + "</a></h1>" +
            "<a class='book-author' href='" + book.authorUrl + "'>" + book.author + "</a>" +
            "<p>" + book.level + "</p>" + 
            "<p>" + book.info.slice(0, 200) + "</p>"
        bookItem.appendChild(bookCover)
        bookItem.appendChild(bookInfo)
        bookList.appendChild(bookItem)
    })
    return bookList
}

module.exports = listBooks