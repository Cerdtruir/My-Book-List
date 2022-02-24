let bookCollection = {};

let booksArray = Object.keys(bookCollection);
if (window.localStorage.getItem('books')) {
  storedBooks = window.localStorage.getItem('books');
  bookCollection = JSON.parse(storedBooks);
  document.body.querySelector('#list-of-books').innerHTML = '';
  createList();
}

function storeBooks() {
  window.localStorage.setItem('books', JSON.stringify(bookCollection));
}

function addBook() {
  let addTitle = document.getElementById('title').value;
  let addAuthor = document.getElementById('author').value;
  bookCollection[addTitle] = addAuthor;
  storeBooks();
  document.body.querySelector('#list-of-books').innerHTML = '';
  createList();
}

function removeBook(title) {
  delete bookCollection[title];
  storeBooks();
  document.body.querySelector('#list-of-books').innerHTML = '';
  createList();
}

function createList() {
  booksArray = Object.keys(bookCollection);
  booksArray.forEach((book) => {
    removeButton = document.createElement('button');
    dividerLine = document.createElement('hr');

    removeButton.innerHTML = 'Remove';
    removeButton.id = book;

    bookSection = document.createElement('div');
    title = document.createElement('p');
    author = document.createElement('p');

    title.innerHTML = book;
    author.innerHTML = bookCollection[book];

    bookSection.append(title, author, removeButton, dividerLine);
    document.body.querySelector('#list-of-books').append(bookSection);

    document.body
      .querySelector('#' + book)
      .addEventListener('click', function () {
        removeBook(book);
      });
  });
}
