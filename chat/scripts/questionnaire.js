function getUserAnswerListValues() {
    console.log("other function called");

    let values = [];
    var checkBoxes = document.querySelectorAll('input[name="listGroupCheckableRadios"]:checked');
    checkBoxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });

    console.log(values)
    return `${values}`;
}

function getUserAnswerList() {

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    db.collection("users").add({
                        answerList: getUserAnswerListValues()
                    }).then(() => {
                        // window.location.href = "main.html";
                        console.log("then() performed")
                    })
                })

        } else {
            // No user is signed in.
        }
    });

}






function setup() {
    $("#get-profile").click(getUserAnswerList);
}

$(document).ready(setup);