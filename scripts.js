const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.changeStatus = function () {
  this.read = !this.read;
};

function addBookToLibrary() {
  const book = new Book(title.value, author.value, pages.value, read.checked);

  myLibrary.push(book);
}

function displayBooks() {
  const content = document.querySelector(".content");
  const lastListing = myLibrary[myLibrary.length - 1];

  const bookTitle = document.getElementById("title");
  const title = document.createElement("p");
  if (bookTitle.value === "") {
    title.textContent = "Unknown";
  } else title.textContent = `${lastListing.title}`;

  const bookAuthor = document.getElementById("author");
  const author = document.createElement("p");
  if (bookAuthor.value === "") {
    author.textContent = "Unknown";
  } else author.textContent = `${lastListing.author}`;

  const bookPages = document.getElementById("pages");
  const pages = document.createElement("p");
  if (bookPages.value === "") {
    pages.textContent = "Unknown";
  } else pages.textContent = `${lastListing.pages}`;

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

  deleteBtn.addEventListener("click", () => {
    myLibrary.splice(lastListing);
    title.remove();
    author.remove();
    pages.remove();
    readBtn.remove();
    deleteBtn.remove();
  });

  content.appendChild(title);
  content.appendChild(author);
  content.appendChild(pages);
  content.appendChild(readBtn);
  content.appendChild(deleteBtn);
}

const addBookBtn = document.querySelector(".addBook");
addBookBtn.addEventListener("click", (e) => {
  const form = document.querySelector("form");

  e.preventDefault();
  addBookToLibrary();
  displayBooks();
  form.reset();
});
