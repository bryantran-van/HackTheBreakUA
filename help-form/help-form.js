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
                notes: notesVal
            }).then(() => {
                alert("Request was posted. Help is on the way.");
                window.location.href = "../mainpage/main.html";
            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}