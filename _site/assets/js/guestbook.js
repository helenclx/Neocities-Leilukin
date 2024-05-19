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
    timestamp: {},
    replies: [],
};

// Form submission event
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    addMessage();
    clearInputEl();
});

const formatDate = () => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
        dateStyle: "full",
        timeStyle: "full",
    });
    const now = new Date();
    const formattedDate = formatter.format(now);
    return formattedDate;
};

const addMessage = () => {
    messageObj = {
        ...messageObj,
        name: nameInputEl.value,
        email: emailInputEl.value,
        website: websiteInputEl.value,
        timestamp: formatDate(),
        message: msgInputEl.value
    }
    push(guestbookInDB, messageObj);
};

// Clear input fields
const clearInputEl = () => {
    nameInputEl.value = '';
    emailInputEl.value = '';
    websiteInputEl.value = '';
    msgInputEl.value = '';
};

// Load data from the Firebase database
onValue(guestbookInDB, (snapshot) => {
    if (snapshot.exists()) {
        let messagesArr = Object.entries(snapshot.val()).reverse();

        clearMessageListEl();

        messagesArr.forEach((item) => {
            renderMessage(item);
        });
    } else {
        messageListEl.textContent = 'No messages here... yet. Be the first!';
    }
});

// Prevent rendering any message more than once
const clearMessageListEl = () => {
    messageListEl.innerHTML = '';
};

// Render each message
const renderMessage = (item) => {
    const itemID = item[0];
    const itemValue = item[1];

    const newMessageDiv = document.createElement('div');
    newMessageDiv.classList.add('gb__message');

    const newMessageName = document.createElement('p');
    newMessageName.classList.add('gb__message--name');
    newMessageName.textContent = `${itemValue.name} said:`;

    if (itemValue.website !== null && itemValue.website !== '') {
        newMessageName.innerHTML = `
            <a href="${itemValue.website}">${itemValue.name}</a> said:
        `;
    }

    const newMessageMsg = document.createElement('p');
    newMessageMsg.classList.add('gb__message--msg');
    newMessageMsg.textContent = itemValue.message;

    const newMessageTime = document.createElement('time');
    newMessageTime.classList.add('gb__message--time');
    newMessageTime.textContent = itemValue.timestamp;

    messageListEl.append(newMessageDiv);
    newMessageDiv.append(newMessageName, newMessageMsg, newMessageTime);
};