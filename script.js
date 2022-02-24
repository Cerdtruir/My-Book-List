let bookCollection = {};
let booksArray = Object.keys(bookCollection);

function storeBooks() {
  window.localStorage.setItem('books', JSON.stringify(bookCollection));
}

function createList() {
  booksArray = Object.keys(bookCollection);
  booksArray.forEach((book) => {
    const removeButton = document.createElement('button');
    const dividerLine = document.createElement('hr');

    removeButton.innerHTML = 'Remove';
    removeButton.id = book;

    const bookSection = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');

    title.innerHTML = book;
    author.innerHTML = bookCollection[book];

    bookSection.append(title, author, removeButton, dividerLine);
    document.body.querySelector('#list-of-books').append(bookSection);

    document.body.querySelector(`#${book}`).addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      removeBook(book);
    });
  });
}

function updateHTML() {
  document.body.querySelector('#list-of-books').innerHTML = '';
  createList();
}

function removeBook(title) {
  delete bookCollection[title];
  storeBooks();
  updateHTML();
}

if (window.localStorage.getItem('books')) {
  const storedBooks = window.localStorage.getItem('books');
  bookCollection = JSON.parse(storedBooks);
  document.body.querySelector('#list-of-books').innerHTML = '';
  createList();
}

// eslint-disable-next-line no-unused-vars
function addBook() {
  const addTitle = document.getElementById('title').value;
  const addAuthor = document.getElementById('author').value;
  document.getElementById('form').reset();
  bookCollection[addTitle] = addAuthor;
  storeBooks();
  document.body.querySelector('#list-of-books').innerHTML = '';
  createList();
}
