<!DOCTYPE html>
<html>

<head>
    <!-- For Birthdate function -->
    <!-- <script type="text/javascript" src="http://code.jquery.com/jquery-1.12.4.min.js"></script> <select name="yy" id="year"></select>년 <select name="mm" id="month"></select>월 <select name="dd" id="day"></select>일 -->
    <!-- For ficture function -->
    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/dropdowns/">
    <meta charset="utf-8">
    <title>Team 10 Project Signup Page</title>
    <meta name="comp1800 boilerplate code" content="my bcit project">
    <meta name="author" content="BCIT">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/checkout/">


    <!-------------------------------------------------------->
    <!-- Firebase 8 Library related CSS, JS, JQuery go here -->
    <!-------------------------------------------------------->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.js"></script> 
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.css"/>
    <link rel="stylesheet" href="./styles/style.css"/>

    <style>
      *{box-sizing: border-box;

      }

      
      .main_container{
        width: 50%; 
        margin-right: 30%;
        margin-left: 30%;
        margin-top: 50px;

      }

      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
      

    </style>

</head>

<body>

    <!-- Navbar -->
   <nav id="navbarPlaceholder"></nav>

    <!-- Changwhi's Sign up page starts -->

<div class="main_container">

    <div class="col-md-7 col-lg-8">
      <h4 class="mb-3">Sign up</h4>
      <form class="needs-validation" novalidate>
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="firstName" class="form-label">First name</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div class="col-sm-6">
            <label for="lastName" class="form-label">Last name</label>
            <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
            <div class="invalid-feedback">
              Valid last name is required.
            </div>
          </div>

          <div class="col-12">
            <label for="username" class="form-label">Username</label>
            <div class="input-group has-validation">
              <button type="button">valid</button>
              <input type="text" class="form-control" id="username" placeholder="Username" required>
            <div class="invalid-feedback">
                Your username is required.
              </div>
            </div>
          </div>

          <div class="col-12">
            <label for="address" class="form-label">Password</label>
            <input type="text" class="form-control" id="address" placeholder="At least 8 characters" required>
            <div class="invalid-feedback">
              Please enter your password.
            </div>
          </div>

          <div class="col-12">
            <label for="address" class="form-label">Confirm Password</label>
            <input type="text" class="form-control" id="address" placeholder="Please re-enter your password" required>
            <div class="invalid-feedback">
              Please Confirm Password.
            </div>
          </div>


          <div class="col-12">
            <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
            <input type="email" class="form-control" id="email" placeholder="you@example.com">
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>



          <div class="col-md-5">
            <label for="country" class="form-label">Year</label>
            <select class="form-select" id="country" required>
              <option value="" disabled selected>Choose..</option>
              <option value="">A</option>

            </select>
            <div class="invalid-feedback">
              Please select a valid year.
            </div>
          </div>

          <div class="col-md-4">
            <label for="state" class="form-label">Month</label>
            <select class="form-select" id="state" required>
              <option value="" disabled selected>Choose..</option>
              <option value="">A</option>
              <option>Month</option>
            </select>
            <div class="invalid-feedback">
              Please provide a valid month.
            </div>
          </div>

          <div class="col-md-3">
            <label for="state" class="form-label">day</label>
            <select class="form-select" id="state" required>
              <option value="" disabled selected>Choose..</option>
            </select>
            <div class="invalid-feedback">
              Please provide a valid day.
            </div>
          </div>
        </div>

        <hr class="my-4">

        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="same-address">
          <label class="form-check-label" for="same-address"></label>
        </div>

        <hr class="my-4">

        <div class="col-12">
          <label for="country" class="form-label">Gender</label>
          <select class="form-select" id="country"  required>
            <option value="" disabled selected>Choose..</option>

            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Something</option>
            <option value="">N/A</option>

          </select>
        </div>

        <div id="make_block">
          <p style="margin: 50px;"></p>
        </div>

        <div class="row gy-3">
          <div class="col-md-6">
            <button class="w-100 btn btn-outline-secondary btn-lg" style="background-color: #fff;" onclick="location.href='login.html'" type="button">Cancel</button>


          </div>

          <div class="col-md-6">
            <button  class="w-100 btn btn-primary btn-lg" onclick="location.href='questionnaire.html'" type="button">Next</button>

          </div>

          </div>
        </div>
      </div>
    </div>
  </div>

    <!-- footer -->
    <nav id="footerPlaceholder"></nav>

    <script src="./scripts/firebaseAPI_TEAM10.js"></script>
    <script src="./scripts/authentication.js"></script>
    <script src="./scripts/skeleton.js"></script>
    <script src="./scripts/script.js"></script>

</body>

</html>