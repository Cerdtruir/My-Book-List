class Books {
  addBook(title, author) {
    const id = title + author;
    if (!title || !author) {
      return;
    }
    this[id] = { title, author };
  }

  remveBook(id) {
    delete this[id];
  }
}

const bookList = new Books();

function storeBooks() {
  window.localStorage.setItem('books', JSON.stringify(bookList));
}
let i = 0;
function createList() {
  i = 0;
  const booksArray = Object.keys(bookList);
  booksArray.forEach((book) => {
    const removeButton = document.createElement('button');
    const id = bookList[book].title + bookList[book].author;
    removeButton.innerHTML = 'Remove';
    removeButton.id = id;

    const bookSection = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');

    title.innerHTML = `"${bookList[book].title}" by ${bookList[book].author}`;

    bookSection.classList.add('book-section');
    title.classList.add('book-title');
    removeButton.classList.add('remove-button');
    if (i % 2 === 0) {
      bookSection.classList.add('grey-background');
    }

    bookSection.append(title, author, removeButton);
    document.body.querySelector('#list-of-books').append(bookSection);

    document.getElementById(id).addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      removeBook(book);
    });
    i += 1;
  });
}

function updateHTML() {
  document.body.querySelector('#list-of-books').innerHTML = '';
  createList();
}

// eslint-disable-next-line no-unused-vars
function addBook() {
  const addTitle = document.getElementById('title').value;
  const addAuthor = document.getElementById('author').value;
  bookList.addBook(addTitle, addAuthor);
  document.getElementById('form').reset();
  storeBooks();
  updateHTML();
}

function removeBook(id) {
  delete bookList[id];
  storeBooks();
  updateHTML();
}

const storedBooks = window.localStorage.getItem('books');
const storage = JSON.parse(storedBooks);
const storageArray = Object.keys(storage);
storageArray.forEach((book) => {
  bookList.addBook(storage[book].title, storage[book].author);
});
updateHTML();
