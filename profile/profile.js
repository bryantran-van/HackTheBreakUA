function postAdditionalInfo() {
    var usernameVal = $('#username').val();
    var roleVal = $('#role').val();
    var additionalInformationVal = $('#additional-information').val();

    // check if user is signed in
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("Retrieving data from " + user.uid);

            db.collection("users").doc(user.uid).update({
                username: usernameVal,
                role: roleVal,
                additionalInformation: additionalInformationVal
            }).then(() => {
                window.location.href = "../main-page/main.html";
            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}

function getProfileList() {
    var cardTemplate = document.getElementById("volunteer-card");

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("Retrieving data from " + user.uid);

            db.collection("users").get().then(snap => {
                var i = 1;

                snap.forEach(userDoc => {
                    var username = userDoc.data().username;
                    var completed = userDoc.data().completed;
                    var notes = userDoc.data().additionalInformation;
                    console.log("Retrieved volunteer " + userDoc.id);

                    if (userDoc.data().role == "Volunteer") {
                        let newcard = cardTemplate.content.cloneNode(true);

                        newcard.querySelector('.card-username').innerHTML = username;
                        newcard.querySelector('.card-completed').innerHTML = `Requests Done: ${completed}`;
                        newcard.querySelector('.card-notes').innerHTML = notes;

                        document.getElementById("volunteers-container").appendChild(newcard);
                    }

                    i++;
                })
            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}