const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  changeStatus = () => {
    this.read = !this.read;
  };
}

function addBookToLibrary() {
  const book = new Book(title.value, author.value, pages.value, read.checked);

  myLibrary.push(book);
}

function displayBooks() {
  const content = document.querySelector(".content");
  const lastListing = myLibrary[myLibrary.length - 1];

  const bookTitle = document.getElementById("title");
  const title = document.createElement("p");
  bookTitle.value === ""
    ? (title.textContent = "Unknown")
    : (title.textContent = `${lastListing.title}`);

  const bookAuthor = document.getElementById("author");
  const author = document.createElement("p");
  bookAuthor.value === ""
    ? (author.textContent = "Unknown")
    : (author.textContent = `${lastListing.author}`);

  const bookPages = document.getElementById("pages");
  const pages = document.createElement("p");
  bookPages.value === ""
    ? (pages.textContent = "Unknown")
    : (pages.textContent = `${lastListing.pages}`);

  const readBtn = document.createElement("button");
  readBtn.classList.add("status-btn");
  readBtn.textContent = lastListing.read ? "read" : "not read";

  readBtn.addEventListener("click", () => {
    lastListing.changeStatus();
    readBtn.textContent = lastListing.read ? "read" : "not read";
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.classList.add("status-btn");

  const deleteBook = () => {
    myLibrary.splice(lastListing);
    title.remove();
    author.remove();
    pages.remove();
    readBtn.remove();
    deleteBtn.remove();
  };

  deleteBtn.addEventListener("click", () => deleteBook());

  content.append(title, author, pages, readBtn, deleteBtn);
}

const addBookBtn = document.querySelector(".addBook");
addBookBtn.addEventListener("click", (e) => {
  const form = document.querySelector("form");

  e.preventDefault();
  addBookToLibrary();
  displayBooks();
  form.reset();
});
