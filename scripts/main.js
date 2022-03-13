function insertName(){
    // check if logged in
    firebase.auth().onAuthStateChanged(user =>{
        if (user){
            currentUser = db.collection("users").doc(user.uid);
            currentUser.get().then(userDoc =>{
            console.log(currentUser)
                var user_Name = userDoc.data().name;
                console.log(user_Name);
                document.getElementById("name-main").innerHTML=user_Name;
                // $("#name-main").text(user_Name);
            })
            console.log(user.uid); // give id who user who logged in
        }
    })
}
insertName();

function changeRequestsLink() {
    // check if user is signed in
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("Retrieving data from " + user.uid);

            db.collection("users").doc(user.uid).get().then(userDoc => {
                role = userDoc.data().role;

                if (role == "Volunteer") {
                    console.log("Loaded volunteer request link");
                    $('#requests-title').html("View help requests");
                    $('#requests-desc').html("View the backlog of help requests by civilians and fighters.");
                    $('#requests-link').attr("href", "../help-form/requests.html");
                }
                else {
                    console.log("Loaded civilian/fighter request link");
                    $('#requests-title').html("Submit help request");
                    $('#requests-desc').html("Post a request for help. Friendly volunteers will be able to view and accept your requests.");
                    $('#requests-link').attr("href", "../help-form/help-form.html");
                }
            })
        }
        else {
            alert("Failed to retrieve data. Please check to make sure you are signed in.");
        }
    })
}

changeRequestsLink();