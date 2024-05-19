// Import Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js'
import { getDatabase, ref, push, onValue, update } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js'

// Set up Firebase database
const appSettings = {
    databaseURL: 'https://leilukin-s-hub-guestbook-default-rtdb.asia-southeast1.firebasedatabase.app/'
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const guestbookInDB = ref(database, "guestbook");

// Get DOM elements
const formEl = document.querySelector('.gb__form');
const nameInputEl = document.querySelector('#name-input');
const emailInputEl = document.querySelector('#email-input');
const websiteInputEl = document.querySelector('#website-input');
const msgInputEl = document.querySelector('#message-input');
const messageListEl = document.querySelector('.gb__message--list');

// Initiate guestbook message object
let messageObj = {
    name: '',
    email: '',
    website: '',
    message: '',
    timestamp: '',
    replies: [],
};

// Form submission event
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    clearInputEl();
    console.log('Form submitted');
});

// Clear input fields
const clearInputEl = () => {
    nameInputEl.value = '';
    emailInputEl.value = '';
    websiteInputEl.value = '';
    msgInputEl.value = '';
};

// Load data from the Firebase database
onValue(endorsementsInDB, (snapshot) => {});

// Prevent rendering any message more than once
const clearMessageListEl = () => {
    messageListEl.innerHTML = '';
};

// Render each message
const renderMessage = (item) => {
    const itemID = item[0];
    const itemValue = item[1];
};