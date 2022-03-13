function sendMessage() {
    var messageText = $("#message-text").val();
    console.log(`messageText = ${messageText}`);
    oldMessages = $("#text-container").html();
    
    newMessage = `<div><div class="alert alert-primary" role="alert" style="float: right; clear: both">${messageText}</div></div>`

    $("#text-container").html(oldMessages + newMessage)
}

function setup() {
    $("#send-button").click(sendMessage);
}

$(document).ready(setup);