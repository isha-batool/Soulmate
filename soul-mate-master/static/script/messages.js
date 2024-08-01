// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPpeQWNgmDUdc_nwcjbqZCe0xQDU0CUvo",
    authDomain: "learning-firebase-ce6c5.firebaseapp.com",
    databaseURL: "https://learning-firebase-ce6c5-default-rtdb.firebaseio.com",
    projectId: "learning-firebase-ce6c5",
    storageBucket: "learning-firebase-ce6c5.appspot.com",
    messagingSenderId: "998766906994",
    appId: "1:998766906994:web:57a17353a1ab60047dbceb",
    measurementId: "G-2F8CV6HEKW"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const username = prompt("Please Tell us your Name");

document.getElementById("message-form").addEventListener("submit", sendMessage);

function sendMessage(e) {
    e.preventDefault();

    // get values to be submitted
    const timestamp = Date.now();
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;

    // clear the input box
    messageInput.value = "";

    //auto scroll to bottom
    document
        .getElementById("messages")
        .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    // create db collection and send in the data
    db.ref("messages/" + timestamp).set({
        username,
        message,
    });
}

const fetchChat = db.ref("messages/");

// check for new messages using the onChildAdded event listener
fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    alert(message)
    const message = `<li class=${
        username === messages.username ? "sent" : "receive"
    }><span>${messages.username}: </span>${messages.message}</li>`;
    // append the message on the page
    document.getElementById("messages").innerHTML += message;
});