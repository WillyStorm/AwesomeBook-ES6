import ourForm from './js/element.js';
import BookObject from './js/app.js';
import displayList from './js/list.js';
import displayAdd from './js/add.js';
import displayContact from './js/contact.js';
import { DateTime } from './js/luxon.js';

if (localStorage.getItem('bookContent')) {
  BookObject.setContent();
} else {
  BookObject.saveToLocal();
}

const removeButton = document.querySelectorAll('.removeButton');

removeButton.forEach((button, index) => {
  BookObject.remove(button, index);
});

ourForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = document.getElementById('bookTitle').value;
  const bookAuthor = document.getElementById('bookAuthor').value;

  const newBook = new BookObject(bookTitle, bookAuthor);
  newBook.add();
  ourForm.reset();
});

const booklist = document.getElementById('book-list');
const addbook = document.getElementById('add-book');
const contactinfo = document.getElementById('contact-info');
const list = document.getElementById('list');
const add = document.getElementById('add');
const contact = document.getElementById('contact');

list.addEventListener('click', () => {
  displayList(booklist, addbook, contactinfo, list, add, contact);
  window.location.reload();
});

add.addEventListener('click', () => {
  displayAdd(booklist, addbook, contactinfo, list, add, contact);
});

contact.addEventListener('click', () => {
  displayContact(booklist, addbook, contactinfo, list, add, contact);
});

const mydate = document.getElementById('mydate');
const now = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
mydate.innerHTML = now;