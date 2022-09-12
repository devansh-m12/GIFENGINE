document.querySelector(".js-go").addEventListener('click', function () {
    var input = document.querySelector("input").value;
    search(input);
});

document.querySelector(".js-userinput").addEventListener('keyup', function (e) {
    var input = document.querySelector("input").value;

    if (e.which === 13) {
        search(input)
    }
});


var apikey = "LIVDSRZULELA";
var lmt = 20;
var search_term = "welcome";

function search(input) {
    search_term = input;
    console.log(search_term);
    var search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" + apikey + "&limit=" + lmt;

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", search_url, true);
    xmlHttp.send();
    var container = document.querySelector(".js-container");
    container.innerHTML = "";


    xmlHttp.addEventListener('load', function (e) {
        var data = e.currentTarget.response;
        pushdom(data);
    });

}

function pushdom(input) {
    var res = JSON.parse(input);
    var imgg = res.results;
    imgg.forEach(function (images) {
        var src = images.media[0].gif.url;
        var container = document.querySelector(".js-container");
        container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
    });
}

