let bookCollection = {};

let booksArray = Object.keys(bookCollection);

function addBook() {
  let addTitle = document.getElementById('title').value;
  let addAuthor = document.getElementById('author').value;
  bookCollection[addTitle] = addAuthor;
  console.log(addTitle);
  console.log(bookCollection);
  document.body.querySelector('#list-of-books').innerHTML = '';
  createList();
}

function removeBook(title) {
  delete bookCollection[title];
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
