let bookCollection = {};

function addBook(title, author) {
  bookCollection[title] = author;
}

function removeBook(title) {
  delete bookCollection[title];
}

addBook('title', 'author');
addBook('ban', 'ban author');
addBook('apple', 'apple author');
removeBook('ban');

