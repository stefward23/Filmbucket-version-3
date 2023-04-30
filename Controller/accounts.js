const topawards2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt15679400",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt11813216",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards4 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt9114286",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards5 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt6710474",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards6 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt7798604",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

$.ajax(topawards2).done(function (response) {
  $(".pic1").html(`<img id="pic1" src=${response.image.url}></img>`);
});

$.ajax(topawards3).done(function (response) {
  $(".pic2").html(`<img id="pic2" src=${response.image.url}></img>`);
});

$.ajax(topawards4).done(function (response) {
  $(".pic3").html(`<img id="pic3" src=${response.image.url}></img>`);
});

$.ajax(topawards5).done(function (response) {
  $(".pic4").html(`<img id="pic4" src=${response.image.url}></img>`);
});

$.ajax(topawards6).done(function (response) {
  $(".pic5").html(`<img id="pic5" src=${response.image.url}></img>`);
});

var slider = document.getElementById("agerange");
var output = document.getElementById("agespan");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

//Click requirement for emphasis on menu
var click = 0;
$("#icon-menu").click(function () {
  click++;
  if (click == 1) {
    $(".overlay").css("opacity", "40%");
    $(".overlay").css("transition", "0.4s");
    $(".overlay").css("z-index", "-1");
  } else {
    $(".overlay").css("opacity", "100%");
    $(".overlay").css("transition", "1s");
    $(".overlay").css("z-index", "2");

    click = 0;
  }
});

// setting up firebase with our website

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYdPisfkCcLxPuzy-jM2UQRvORxPq5olk",
  authDomain: "film-bucket-v3.firebaseapp.com",
  databaseURL: "https://film-bucket-v3-default-rtdb.firebaseio.com",
  projectId: "film-bucket-v3",
  storageBucket: "film-bucket-v3.appspot.com",
  messagingSenderId: "717415814149",
  appId: "1:717415814149:web:992815ffeae3bca17e386c",
});

var SignUpFormDB = firebase.database().ref("SignUpForm");

function submitForm(event) {
  //Get ref for fields inside the form
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var agerange = document.getElementById("agerange").value;
  var occupation = document.getElementById("occupation").value;
  var dateofbirth = document.getElementById("dateofbirth").value;

  saveData(
    firstname,
    lastname,
    email,
    password,
    agerange,
    occupation,
    dateofbirth
  );
  console.log(firstname);
}

const saveData = (
  firstname,
  lastname,
  email,
  password,
  agerange,
  occupation,
  dateofbirth
) => {
  //Push this array onto our database
  var newContactForm = SignUpFormDB.push();

  //Set the values of the array
  //to name, email, and message content
  newContactForm.set({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    agerange: agerange,
    occupation: occupation,
    dateofbirth: dateofbirth,
  });
};

const auth = firebaseApp.auth();

//google
const SignInWithGoogleButton = document.getElementById("google-btn");
const SignInWithHithubButton = document.getElementById("github-btn");

const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(googleProvider)
    .then((result) => {
      window.location.href = "http://localhost:3000/register";
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
    });
};

SignInWithGoogleButton.addEventListener("click", signInWithGoogle);

//github
const signInWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  auth
    .signInWithPopup(githubProvider)
    .then((result) => {
      window.location.href = "http://localhost:3000/register";
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
    });
};

SignInWithHithubButton.addEventListener("click", signInWithGithub);

// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  // firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("You are Signed Up");
      console.log(result);
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
    });
};

// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("You are Signed In");
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}; //Creating db location reference
