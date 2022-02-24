let bookCollection = {};

function addBook(title, author) {
  bookCollection[title] = author;
}

addBook('title', 'author');
addBook('ban', 'ban author');
addBook('apple', 'apple author');
