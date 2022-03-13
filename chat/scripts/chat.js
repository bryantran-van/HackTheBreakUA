// send message function

function calculator() {
    result = $("#textmessage").val();
    console.log(result)
    styled_result = '<div class="message message-out">' + '<a href="#" data-bs-toggle="modal" data-bs-target="#modal-profile" class="avatar avatar-responsive">' + '<img class="avatar-img" src="assets/img/avatars/1.jpg" alt="">' + '</a>' + '<div class="message-inner">' + '<div class="message-body">' + '<div class="message-content">' + '<div class="message-text">' + '<p class="firebase_stored">' + result + '</p>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>'
    old_div_content = jQuery('#chatmain').html();
    new_div_content = old_div_content + styled_result;
    jQuery('#chatmain').html(new_div_content);


    function getUserName() {
        return getAuth().currentUser.displayName;
      }

    // Firebase
    
    // var sendmessages = db.collection("chattest").doc("chattest");
    
    // sendmessages.add({
    //     chattestlist: text});
    
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    db.collection("chattest").add({
                        chattestlist: result,
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

// send message function








// Firebase data base
function setup() {
    console.log("document was called")
    $("body").on("click", "#sendmessage", calculator)

}

$(document).ready(setup)



