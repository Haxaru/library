const myLibrary = [];
const container = document.querySelector(".container");

console.log(myLibrary);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(new Book("title1", "author1", 101, true));
addBookToLibrary(new Book("title2", "author2", 102, true));
addBookToLibrary(new Book("title3", "author3", 103, true));

console.log(myLibrary);

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const list = document.createElement("div");
    list.classList.add("list");
    list.textContent = `${myLibrary[i].title} ${myLibrary[i].author} ${myLibrary[i].pages}`;
    container.appendChild(list);
  }
}

displayBooks();

function newBook() {}
