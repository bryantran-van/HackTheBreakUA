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


function sendMessage() {
    var messageText = $("#message-text").val();
    console.log(`messageText = ${messageText}`);
    oldMessages = $("#text-container").html();
    
    newMessage = `<div><div class="alert alert-primary" role="alert" style="float: right; clear: both">${messageText}</div></div>`

    $("#text-container").html(oldMessages + newMessage)

    // post the message content to messages collection in firebase
    postMessage(messageText);
}

function setup() {
    $("#send-button").click(sendMessage);
}

$(document).ready(setup);