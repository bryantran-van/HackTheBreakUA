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

// need to fix this code. Doesn't work yet.
function loadMessages() {
    // Create the query to load the last 12 messages and listen for new ones.
    const recentMessagesQuery = query(collection(getFirestore(), 'chattest'), limit(12));
    
    // Start listening to the query.
    onSnapshot(recentMessagesQuery, function(snapshot) {
      snapshot.docChanges().forEach(function(change){
        var message = change.doc.data();

        styled_result = '<div class="message message-out">' + '<a href="#" data-bs-toggle="modal" data-bs-target="#modal-profile" class="avatar avatar-responsive">' + '<img class="avatar-img" src="assets/img/avatars/1.jpg" alt="">' + '</a>' + '<div class="message-inner">' + '<div class="message-body">' + '<div class="message-content">' + '<div class="message-text">' + '<p class="firebase_stored">' + message + "something erro?" + '</p>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>'
        old_div_content = jQuery('#chatmain').html();
        new_div_content = old_div_content + styled_result;
        jQuery('#chatmain').html(new_div_content);})} )}


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