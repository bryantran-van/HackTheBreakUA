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
                window.location.href = "./requests.html";
            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}

function getRequestList() {
    var cardTemplate = document.getElementById("request-card");

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
                        var volunteer = requestDoc.data().volunteer;
                        var id = requestDoc.id;
                        console.log("Retrieved request " + id);

                        db.collection("users").doc(owner).get().then(ownerDoc => {
                            let newcard = cardTemplate.content.cloneNode(true);

                            newcard.querySelector('.card-owner').innerHTML = ownerDoc.data().username;
                            newcard.querySelector('.card-supply').innerHTML = supply;
                            newcard.querySelector('.card-location').innerHTML = location;
                            newcard.querySelector('.card-notes').innerHTML = notes;


                            newcard.querySelector('a').onclick = () => {
                                storeRequestData(id);
                            }

                            // requests are only shown if they are unclaimed or accepted by signed-in user
                            if (requestDoc.data().accepted == false && owner != user.uid) {
                                document.getElementById("requests-container").appendChild(newcard);
                            }
                            else if (volunteer == user.uid) {
                                document.getElementById("accepted-container").appendChild(newcard);
                            }
                            else if (owner == user.uid) {
                                document.getElementById("pending-container").appendChild(newcard);
                            }
                        })

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
                volunteerVal = requestDoc.data().volunteer;
                notesVal = requestDoc.data().notes;
                acceptedVal = requestDoc.data().accepted;

                db.collection("users").doc(ownerVal).get().then(ownerDoc => {
                    $('#supply').html(supplyVal);
                    $('#location').html(locationVal);
                    $('#owner').html(`Posted by ${ownerDoc.data().username}`);
                    if (acceptedVal == false && ownerVal == user.uid) {
                        $('#volunteer').html("Please wait warmly for a response.");
                    }
                    else if (acceptedVal == false && ownerVal != user.uid) {
                        $('#volunteer').html('Ready to help? Press "Accept" to take on the request.');
                    }
                    else {
                        db.collection("users").doc(volunteerVal).get().then(volunteerDoc => {
                            $('#volunteer').html(`Accepted by ${volunteerDoc.data().username}`);
                        })
                    }
                    $('#notes').html(notesVal);

                    if (acceptedVal == true && user.uid != ownerVal) {
                        $('#accept').html("Withdraw");
                        $('#accept').attr('onclick', 'cancelRequest()');
                    }
                    else if (user.uid == ownerVal) {
                        $('#accept').html("Revoke");
                        $('#accept').attr('onclick', 'deleteRequest()');
                    }
                })

            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}

function acceptRequest() {
    requestID = localStorage.getItem("requestID");

    $('#accept').html("Accepting");

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            db.collection("requests").doc(requestID).update({
                accepted: true,
                volunteer: user.uid
            }).then(() => {
                $('#accept').html("Accepted");
                alert("You have accepted this request. Thank you for helping out!");
                window.location.href = "./requests.html";
            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}


function cancelRequest() {
    requestID = localStorage.getItem("requestID");

    $('#accept').html("Withdrawing");

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            db.collection("requests").doc(requestID).update({
                accepted: false,
                volunteer: ""
            }).then(() => {
                $('#accept').html("Withdrew");
                alert("You have cancelled this request.");
                window.location.href = "./requests.html";
            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}

function deleteRequest() {
    requestID = localStorage.getItem("requestID");

    $('#accept').html("Revoking");

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            db.collection("requests").doc(requestID).delete().then(() => {
                $('#accept').html("Revoked");
                alert("You have revoked this request.");
                window.location.href = "./requests.html";
            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}