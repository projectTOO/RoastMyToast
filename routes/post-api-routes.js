require("dotenv").config
var keys = require("../keys.js");

function getPost() {
    var newPost = {
        name: $("#name").val().trim(),
        post: $("#message").val().trim(),
        img: imgObj.data.link
    }

    console.log(newPost);
}

$("document").ready(function () {

    $("#submit").on("click", function (e) {
        e.preventDefault();
        $('input[type=file]').on("change", function () {
            var $files = $(this).get(0).files;
            // console.log("Uploading file to Imgur..");
            var apiUrl = 'https://api.imgur.com/3/image';
            var apiKey = keys.id;
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
                imgObj = JSON.parse(response);

                return imgObj.data.link;

            });

        })
        getPost();
        $.post("/api/post", newPost, function (data) { });
        console.log("New post saved.")


    });

});
