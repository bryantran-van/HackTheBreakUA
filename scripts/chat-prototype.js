function postMessage(message) {
    // Post message content to messages collection in firebase. 
    var usernameVal = $('#username').val();

    // check if user is signed in
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("Retrieving data from " + user.uid);

            db.collection("messages").add({
                messageSender: user.uid,
                messageContent: message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}

// Loads chat messages history and listens for upcoming ones.
function loadMessages() {
    // listen for incoming messages
    firebase.database().ref("messages").on("child_added", function (snapshot) {
        var html = "";
        // show delete button if message is sent by me
        if (snapshot.val().sender == myName) {
            console.log("new message")
        }
        // html += snapshot.val().sender + ": " + snapshot.val().message;
        // html += "</li>";

        // document.getElementById("messages").innerHTML += html;
    });
}


function sendMessage() {
    var messageText = $("#message-text").val();
    console.log(`messageText = ${messageText}`);
    oldMessages = $("#text-container").html();

    newMessage = `<li><div class="alert alert-primary" role="alert" style="float: right; clear: both">${messageText}</div></ls>`

    $("#text-container").html(oldMessages + newMessage)

    // return oldMessages + newMessage

    // post the message content to messages collection in firebase
    postMessage(messageText);
}

function setup() {
    loadMessages();
    $("#send-button").click(sendMessage);
}

$(document).ready(setup);