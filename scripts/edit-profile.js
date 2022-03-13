function postAdditionalInfo() {
    var usernameVal = $('#username').val();
    var roleVal = $('#role').val();
    var additionalInformationVal = $('#additional-information').val();

    // check if user is signed in
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("Retrieving data from " + user.uid);

            db.collection("users").add({
                username: usernameVal,
                role: roleVal,
                additionalInformation: additionalInformationVal
            }).then(() => {
                window.location = "../main-page/main.html";
            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}

function setup() {
    $("#next-button").click(postAdditionalInfo);
}

$(document).ready(setup);