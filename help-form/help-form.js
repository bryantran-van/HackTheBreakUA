function storeRequestData(id) {
    localStorage.setItem("requestID", id);
}

function postRequest() {
    var supplyVal = $('#supply').val();
    var locationVal = $('#location').val();
    var notesVal = $('#notes').val();

    // check if user is signed in
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("Retrieving data from " + user.uid);

            $('#form-submit').attr("value", "Please wait warmly");

            db.collection("requests").add({
                owner: user.uid,
                supply: supplyVal,
                location: locationVal,
                notes: notesVal,
                accepted: false
            }).then(() => {
                alert("Request was posted. Help is on the way.");
                window.location.href = "../main-page/main.html";
            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}

function getRequestList() {
    let cardTemplate = document.getElementById("request-card");

    // check if user is signed in
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("Retrieving data from " + user.uid);

            db.collection("requests").get().then(snap => {
                var i = 1;
                snap.forEach(requestDoc => {
                    var owner = requestDoc.data().owner;
                    var supply = requestDoc.data().supply;
                    var location = requestDoc.data().location;
                    var notes = requestDoc.data().notes;
                    var id = requestDoc.id;
                    console.log("Retrieved request " + id);

                    let newcard = cardTemplate.content.cloneNode(true);

                    newcard.querySelector('.card-owner').innerHTML = owner;
                    newcard.querySelector('.card-supply').innerHTML = supply;
                    newcard.querySelector('.card-location').innerHTML = location;
                    newcard.querySelector('.card-notes').innerHTML = notes;


                    newcard.querySelector('a').onclick = () => {
                        storeRequestData(id);
                    }

                    document.getElementById("requests-container").appendChild(newcard);
                    i++;
                })
            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}

function getRequestDetails() {
    requestID = localStorage.getItem("requestID");

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("Retrieving data from " + user.uid);

            db.collection("requests").doc(requestID).get().then(requestDoc => {
                supplyVal = requestDoc.data().supply;
                locationVal = requestDoc.data().location;
                ownerVal = requestDoc.data().owner;
                notesVal = requestDoc.data().notes;
                acceptedVal = requestDoc.data().accepted;

                $('#supply').html(supplyVal);
                $('#location').html(locationVal);
                $('#owner').html(ownerVal);
                $('#notes').html(notesVal);
            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}

function acceptRequest() {
    requestID = localStorage.getItem("requestID");

    $('accept').html("Please wait");

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            db.collection("requests").doc(requestID).update({
                accepted: true,
                volunteer: user.uid
            }).then(() => {
                $('accept').html("Accepted");
                alert("You have accepted this request. Thank you for helping out!");
                window.location.href = "../main-page/main.html";
            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}