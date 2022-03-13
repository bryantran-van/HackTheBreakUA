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