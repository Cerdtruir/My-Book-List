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

const booksArray = Object.keys(bookCollection);

document.getElementById('list-of-books');

booksArray.forEach((book) => {
  removeButton = document.createElement('button');
  dividerLine = document.createElement('hr');

  removeButton.innerHTML = 'Remove';

  bookSection = document.createElement('div');
  title = document.createElement('p');
  author = document.createElement('p');

  title.innerHTML = book;
  author.innerHTML = bookCollection[book];

  bookSection.append(title, author, removeButton, dividerLine);
  document.body.querySelector('#list-of-books').append(bookSection);
});
