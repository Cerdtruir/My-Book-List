/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
class Books {
  addBook(title, author) {
    const id = title + author;
    if (!title || !author) {
      return;
    }
    this[id] = { title, author };
  }

  deleteBook(id) {
    delete this[id];
  }
}

const bookList = new Books();

function storeBooks() {
  window.localStorage.setItem('books', JSON.stringify(bookList));
}

function createList() {
  let i = 0;
  const booksArray = Object.keys(bookList);
  booksArray.forEach((book) => {
    const removeButton = document.createElement('button');
    const id = bookList[book].title + bookList[book].author;
    removeButton.innerText = 'Remove';
    removeButton.id = id;

    const bookSection = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');

    title.innerText = `"${bookList[book].title}" by ${bookList[book].author}`;

    bookSection.classList.add('book-section');
    title.classList.add('book-title');
    removeButton.classList.add('remove-button');
    if (i % 2 === 0) {
      bookSection.classList.add('grey-background');
    }

    bookSection.append(title, author, removeButton);
    document.body.querySelector('#books').append(bookSection);

    document.getElementById(id).addEventListener('click', () => {
      removeBook(book);
    });
    i += 1;
  });
}

function updateHTML() {
  document.body.querySelector('#books').innerText = '';
  createList();
}

function addBook() {
  const addTitle = document.getElementById('title').value;
  const addAuthor = document.getElementById('author').value;
  bookList.addBook(addTitle, addAuthor);
  document.getElementById('form').reset();
  storeBooks();
  updateHTML();
  listPage();
}

function removeBook(id) {
  bookList.deleteBook(id);
  storeBooks();
  updateHTML();
}

if (window.localStorage.getItem('books')) {
  const storedBooks = window.localStorage.getItem('books');
  const storage = JSON.parse(storedBooks);
  const storageArray = Object.keys(storage);
  storageArray.forEach((book) => {
    bookList.addBook(storage[book].title, storage[book].author);
  });
  updateHTML();
}

// Hide or dsiplay sections depending on page
const listOfBooks = document.getElementById('list-of-books');
const addNew = document.getElementById('form');
const contact = document.getElementById('contact');

addNew.classList.add('hide');
contact.classList.add('hide');

function listPage() {
  listOfBooks.classList.remove('hide');
  addNew.classList.add('hide');
  contact.classList.add('hide');
}

function addPage() {
  addNew.classList.remove('hide');
  listOfBooks.classList.add('hide');
  contact.classList.add('hide');
}

function contactPage() {
  contact.classList.remove('hide');
  listOfBooks.classList.add('hide');
  addNew.classList.add('hide');
}

// eslint-disable-next-line no-undef
const { DateTime } = luxon;
const now = DateTime.now();
const nowFormatted = now.toLocaleString(DateTime.DATETIME_MED);
document.body.querySelector('.time').append(nowFormatted);
