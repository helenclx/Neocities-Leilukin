console.log("Guestbook script successfully loaded");

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
const publishBtn = document.querySelector('.gb__form--submit');
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