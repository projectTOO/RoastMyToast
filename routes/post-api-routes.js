// function getPost() {
//     var newPost = {
//         name: $("#name").val().trim(),
//         post: $("#message").val().trim(),
//         img: imgObj.data.link
//     }

//     console.log(newPost);
// }

// $("document").ready(function () {

//     $("#submit1").on("click", function (e) {
//         e.preventDefault();
//         console.log("Submitted.")
//         var $files = $("#inputGroupFile04").get(0).files;
//         console.log($files);
//             // console.log("Uploading file to Imgur..");
//             var apiUrl = 'https://api.imgur.com/3/image';
//             var apiKey = "d9cdab915eca601";
//             var settings = {
//                 async: false,
//                 crossDomain: true,
//                 processData: false,
//                 contentType: false,
//                 type: 'POST',
//                 url: apiUrl,
//                 headers: {
//                     Authorization: 'Client-ID ' + apiKey,
//                     Accept: 'application/json'
//                 },
//                 mimeType: 'multipart/form-data'
//             };
//             var formData = new FormData();
//             formData.append("image", $files[0]);
//             settings.data = formData;

//             $.ajax(settings).done(function (response) {
//                 imgObj = JSON.parse(response);

//                 alert(imgObj.data.link);
//             });
//         })
//     });