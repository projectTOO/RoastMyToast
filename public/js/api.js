
// require('dotenv').config();
// var keys = require("../../keys.js");

// get env help here from Dave/TA
// console.log(keys.imgur.id);

$("document").ready(function () {

    $('input[type=file]').on("change", function () {

        var $files = $(this).get(0).files;

        // console.log("Uploading file to Imgur..");

        var apiUrl = 'https://api.imgur.com/3/image';
        var apiKey = 'd9cdab915eca601';

        var settings = {
            async: false,
            crossDomain: true,
            processData: false,
            contentType: false,
            type: 'POST',
            url: apiUrl,
            headers: {
                Authorization: 'Client-ID ' + apiKey,
                Accept: 'application/json'
            },
            mimeType: 'multipart/form-data'
        };

        var formData = new FormData();
        formData.append("image", $files[0]);
        settings.data = formData;

        $.ajax(settings).done(function (response) {
            grab = response.slice(15,22);
            console.log(grab);
            window.open('https://i.imgur.com/' + grab, '_blank');

        });
    })
});



// var apiKey = "6c53f7c8d47541c30f1c1edba2d40154a9c3a1d4";
// var weatherAPI = "b0a53649e3b2f66244248de7fbda54bc";
// var cors = "https://cors-anywhere.herokuapp.com/";




// function bombAPI(gameTitle) {
//   var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": cors + "http://www.giantbomb.com/api/search/?limit=1&api_key=" + apiKey + "&format=JSON&query=" + gameTitle,

//   }
//   $.ajax(settings).done(function (response) {
//     console.log(response);

//     $("#dump").html("<img class='ui centered medium image' src=" + response.results[0].image.small_url + " alt='" + response.results[0].name + " box art'>");
//     $("#title").html("<h4>" + response.results[0].name + "</h4>");
//     $("#date").html(response.results[0].expected_release_year);
//     $("#desc").html(response.results[0].deck);
//     $("#lilTitle").html(response.results[0].name);
//     $("#info").html("<a target='_blank' href='" + response.results[0].site_detail_url + "'>More Info</a>");

//     //for loop to pull each platform game is on
//     $("#platform").html("Available on: ");
//     var p;
//     for (p = 0; p < response.results[0].platforms.length; p++) {
//       $("#platform").append(response.results[0].platforms[p].name + " ");
//     }
//     //change month # to name
//     var monthify = moment(response.results[0].expected_release_month).format('MMMM');
//     $("#release").html("Released on: " + monthify + " " + response.results[0].expected_release_day + ", " + response.results[0].expected_release_year);
//     //Displays ESRB rating image based on ...rating
//     if (response.results[0].original_game_rating[0].name == "ESRB: M") {
//       $("#esrb").html("<img src=images/M.svg></img>")
//     }
//     else if (response.results[0].original_game_rating[0].name == "ESRB: T") {
//       $("#esrb").html("<img src=images/T.svg></img>")
//     }
//     else {
//       $("#esrb").html("<img src=images/E.svg></img>")
//     }


//   })
// }