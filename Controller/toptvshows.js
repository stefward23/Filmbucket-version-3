$("#submit").click(function () {
  var selected_value = $("#Selection").find(":selected").text();
  if (selected_value == "Spotlight") {
    window.location.href = "/views/Movie-Tv-show-2.html";
  }
  if (selected_value == "The Fabelmans") {
    window.location.href = "/views/Movie-Tv-show-4.html";
  }
  if (selected_value == "The Spiderman: No way home") {
    window.location.href = "/views/Movie-Tv-show-5.html";
  }
  if (selected_value == "Top Gun: Maverick") {
    window.location.href = "/views/Movie-Tv-show-6.html";
  }
  if (selected_value == "Deadpool 2") {
    window.location.href = "/views/Movie-Tv-show-7.html";
  }
  if (selected_value == "Hamilton") {
    window.location.href = "/views/Movie-Tv-show-8.html";
  }
  if (selected_value == "Joker") {
    window.location.href = "/views/Movie-Tv-show-9.html";
  }
  if (selected_value == "Parasite") {
    window.location.href = "/views/Movie-Tv-show-10.html";
  }
  if (selected_value == "Wolf of Wall Street") {
    window.location.href = "/views/Movie-Tv-show-11.html";
  }
  if (selected_value == "Top Story 3") {
    window.location.href = "/views/Movie-Tv-show-12.html";
  }
  if (selected_value == "Interstellar") {
    window.location.href = "/views/Movie-Tv-show-13.html";
  }
  if (selected_value == "Lee Jung-jae") {
    window.location.href = "/views/actor-2.html";
  }
  if (selected_value == "Jason Sudeikis") {
    window.location.href = "/views/actor-3.html";
  }
  if (selected_value == "Jean Smart") {
    window.location.href = "/views/actor-4.html";
  }
  if (selected_value == "Michael Keaton") {
    window.location.href = "/views/actor-5.html";
  }
  if (selected_value == "Amanda Seyfried") {
    window.location.href = "/views/actor-6.html";
  }
  if (selected_value == "Debbie Allen") {
    window.location.href = "/views/actor-7.html";
  }
  if (selected_value == "Bradd Pitt") {
    window.location.href = "/views/actor.html";
  }
  if (selected_value == "The Last of Us") {
    window.location.href = "/views/Movie-Tv-show-14.html";
  }
  if (selected_value == "House of the Dragon") {
    window.location.href = "/views/Movie-Tv-show-15.html";
  }
  if (selected_value == "Better Call Saul") {
    window.location.href = "/views/Movie-Tv-show-16.html";
  }
  if (selected_value == "Breaking Bad") {
    window.location.href = "/views/Movie-Tv-show-17.html";
  }
  if (selected_value == "Avatar: The last Airbender") {
    window.location.href = "/views/Movie-Tv-show-18.html";
  }
  if (selected_value == "Chernobyl") {
    window.location.href = "/views/Movie-Tv-show-19.html";
  }
  if (selected_value == "Mandalorian") {
    window.location.href = "/views/Movie-Tv-show-20.html";
  }
  if (selected_value == "The Boys") {
    window.location.href = "/views/Movie-Tv-show-21.html";
  }
  if (selected_value == "Stranger Things 4") {
    window.location.href = "/views/Movie-Tv-show-22.html";
  }
  if (selected_value == "Argo") {
    window.location.href = "/views/Movie-Tv-show-3.html";
  }
  if (selected_value == "Game of Thrones") {
    window.location.href = "/views/Movie-Tv-show.html";
  }
});
const title1 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt3581920",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const title2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt11198330",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const title3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt3032476",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const trailer1 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-video-playback?viconst=vi2796405785",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const trailer2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-video-playback?viconst=vi3634742553",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const trailer3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-video-playback?viconst=vi4211258649",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const details1 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=tt3581920&currentCountry=US",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const details2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=tt11198330&currentCountry=US",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const details3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=tt3032476&currentCountry=US",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const thumbnails1 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-images?tconst=tt3581920&limit=25",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const thumbnails2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-images?tconst=tt11198330&limit=25",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const thumbnails3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-images?tconst=tt3032476&limit=25",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards1 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt0903747",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards2 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt0417299",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards3 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt7366338",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards4 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt8111088",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards5 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt1190634",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const topawards6 = {
  async: true,
  crossDomain: true,
  url: "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt4574334",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c55a514b43mshcdd92763e285f67p1ebd49jsnb94ebf61849f",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

/*$.ajax(settings).done(function (response) {
   //console.log(response);
});*/

//First 5 calls.
$.ajax(title1).done(function (response) {
  $("#name1").html(`<p>${response.title}</p>`);
});

$.ajax(details1).done(function (response) {
  $("#details1").html(`<p>${response.plotOutline.text}</p>`);
});

$.ajax(trailer1).done(function (response) {
  $("#trailer").html(
    `<video controls autoplay loop muted src=${response.resource.encodings[1].playUrl} type="video/mp4"></video>`
  );
});

$.ajax(thumbnails1).done(function (response) {
  $("#thumbnail1").html(
    `<img class="topthumbnails" src=${response.images[0].url}></img>`
  );
  $("#thumbnail2").html(
    `<img class="topthumbnails" src=${response.images[9].url}></img>`
  );
});

$.ajax(title2).done(function (response) {
  $("#name2").html(`<p>${response.title}</p>`);
});

//Second 5 calls load in 2 seconds after the page has loaded.
setTimeout(() => {
  $.ajax(details2).done(function (response) {
    $("#details2").html(`<p>${response.plotOutline.text}</p>`);
  });

  $.ajax(trailer2).done(function (response) {
    $("#trailer2").html(
      `<video controls autoplay loop muted src=${response.resource.encodings[1].playUrl} type="video/mp4"></video>`
    );
  });

  $.ajax(thumbnails2).done(function (response) {
    $("#thumbnail3").html(
      `<img class="topthumbnails" src=${response.images[7].url}></img>`
    );
    $("#thumbnail4").html(
      `<img class="topthumbnails" src=${response.images[9].url}></img>`
    );
  });

  $.ajax(title3).done(function (response) {
    $("#name3").html(`<p>${response.title}</p>`);
  });

  $.ajax(details3).done(function (response) {
    $("#details3").html(`<p>${response.plotOutline.text}</p>`);
  });
}, 2000);

//Second 5 calls load in 4 seconds after the page has loaded.
setTimeout(() => {
  $.ajax(trailer3).done(function (response) {
    $("#trailer3").html(
      `<video controls autoplay loop muted src=${response.resource.encodings[1].playUrl} type="video/mp4"></video>`
    );
  });

  $.ajax(thumbnails3).done(function (response) {
    $("#thumbnail5").html(
      `<img class="topthumbnails" src=${response.images[20].url}></img>`
    );
    $("#thumbnail6").html(
      `<img class="topthumbnails" src=${response.images[12].url}></img>`
    );
  });

  $.ajax(topawards1).done(function (response) {
    $("#thumbnail7").html(
      `<img class="topawardsthumbnails" src=${response.image.url}></img>`
    );
  });

  $.ajax(topawards2).done(function (response) {
    $("#thumbnail8").html(
      `<img class="topawardsthumbnails" src=${response.image.url}></img>`
    );
  });

  $.ajax(topawards3).done(function (response) {
    $("#thumbnail9").html(
      `<img class="topawardsthumbnails" src=${response.image.url}></img>`
    );
  });
}, 4000);

//Second 5 calls load in 6 seconds after the page has loaded.
setTimeout(() => {
  $.ajax(topawards4).done(function (response) {
    $("#thumbnail10").html(
      `<img class="topawardsthumbnails" src=${response.image.url}></img>`
    );
  });

  $.ajax(topawards5).done(function (response) {
    $("#thumbnail11").html(
      `<img class="topawardsthumbnails" src=${response.image.url}></img>`
    );
  });

  $.ajax(topawards6).done(function (response) {
    $("#thumbnail12").html(
      `<img class="topawardsthumbnails" src=${response.image.url}></img>`
    );
  });
}, 6000);

$("#thumbnail1").click(function () {
  window.location.href = "/views/Movie-Tv-show-14.html";
});

$("#thumbnail2").click(function () {
  window.location.href = "/views/Movie-Tv-show-14.html";
});
$("#thumbnail3").click(function () {
  window.location.href = "/views/Movie-Tv-show-15.html";
});
$("#thumbnail4").click(function () {
  window.location.href = "/views/Movie-Tv-show-15.html";
});
$("#thumbnail5").click(function () {
  window.location.href = "/views/Movie-Tv-show-16.html";
});
$("#thumbnail6").click(function () {
  window.location.href = "/views/Movie-Tv-show-16.html";
});
$("#thumbnail7").click(function () {
  window.location.href = "/views/Movie-Tv-show-17.html";
});
$("#thumbnail8").click(function () {
  window.location.href = "/views/Movie-Tv-show-18.html";
});
$("#thumbnail9").click(function () {
  window.location.href = "/views/Movie-Tv-show-19.html";
});
$("#thumbnail10").click(function () {
  window.location.href = "/views/Movie-Tv-show-20.html";
});
$("#thumbnail11").click(function () {
  window.location.href = "/views/Movie-Tv-show-21.html";
});
$("#thumbnail12").click(function () {
  window.location.href = "/views/Movie-Tv-show-22.html";
});

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
