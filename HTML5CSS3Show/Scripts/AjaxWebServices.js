//---Poster from MovieDb
function searchForMovies() {
    var textMovieDb = $("#textMovieDb");
    var resultMovieDb = $("#resultMovieDb");

    var movie = textMovieDb.val();
    if (movie == "") {
        resultMovieDb.html("You're funny - you should enter the name of the movie! Try again");
    }
    else {
        resultMovieDb.append("Great, your movie poster is being loaded...");

        //build url
        var url = 'http://api.themoviedb.org/3/',
        mode = 'search/movie',
        input,        
        key = '?api_key=b7f6dc809a59b7ac0786a1a234510c52',
        query = '&query=',
        movieName = textMovieDb.val();
        var completeUrl = url + mode + key + query + encodeURIComponent(movieName);

        //query
        $.getJSON(completeUrl, function (json) {
            console.log(json);
            
            if (json.results.length == 0) {
                resultMovieDb.text("Sorry, your movie couldn't be found...");
            }
            else {
                resultMovieDb.empty();
                displayResult(json.results);
            }
        });


        function displayResult(json) {
            //get image base url and image format
            var imageBaseUrl;
            var imageFormat;
            var imageFormatBig;
            $.ajax({
                async: false,
                url: 'http://private-33c0-themoviedb.apiary.io/3/configuration' + key,
                success: function (json) {
                    console.log(json);
                    imageBaseUrl = json.images.base_url;
                    imageFormat = json.images.poster_sizes[0];
                    imageFormatBig = json.images.poster_sizes[imageFormatBig = json.images.poster_sizes.length - 1];
                }
            });
        
            //display each movie
            $.each(json, function (k, v) {
                resultMovieDb.append(v.title + "<br />");
                var image = v.poster_path;
                if (image != "" && image != null) {
                    var fullImageUrl = imageBaseUrl + imageFormat + image;
                    resultMovieDb.append("<img id='" + v.id + "' src='" + fullImageUrl + "' /><br />");
                    
                    $("#" + v.id).click(function () {showBigImage(v.id, image); }); //without anonymous functions the function call is done immediately
                }
            });

            function showBigImage(imageId, image){
                var fullImageUrl = imageBaseUrl + imageFormatBig + image;
                var dialog = $("#dialog-modal");
                dialog.empty();
                dialog.append("<img id='" + imageId + "' src='" + fullImageUrl + "' /><br />");
                dialog.dialog("open");
            }
        }    

    }
}
//---Poster from MovieDb



//---Yahoo Weather Service with JavaScript
function showYahooWeatherServiceWithJavaScript() {    
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
    else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");

    }

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var wsText = xmlHttp.responseText;

            var desc = $(wsText).find("description");

            $("#resultWeatherJavaScript").html(desc);
        }
    }

    xmlHttp.open("GET", "/AjaxWebServices/YahooWeatherLocalProxy.ashx");
    xmlHttp.send();
}
//---Yahoo Weather Service with JavaScript


//---jQuery jsonp
function showTextFromServiceJQuery() {
    $.ajax({
        url: "http://api.twitter.com/1/statuses/user_timeline.json?id=Encosia",
        dataType: 'jsonp',
        timeout: 5000, //5 sec
        success: printTweet
    });
}

function printTweet(result) {
    $.each(result, function (k, v) {
        $("#resultTwitter").append("<li>" + v.created_at + ": ");
        $("#resultTwitter").append(v.text + "</li>");
    })    
}
//---jQuery jsonp



//---jQuery xml response yahoo pipes
function showTextFromServiceJQueryAndYahooPipes() {
    $.ajax({
        url: "http://pipes.yahoo.com/pipes/9oyONQzA2xGOkM4FqGIyXQ/run?&_render=json&_callback=printYourPipeResult&feed=http://weather.yahooapis.com/forecastrss?w=545801",
        dataType: 'jsonp',
        timeout: 5000, //5 sec
    });
}

function printYourPipeResult(feed) {
    var tmp = '';
    for (var i = 0; i < feed.value.items.length; i++) {
        tmp += '<a href="' + feed.value.items[i].link + '">';
        tmp += feed.value.items[i].title + '</a><br>';
        if (feed.value.items[i].description) {
            tmp += feed.value.items[i].description;
        }
        tmp += '<hr>';
    }
    document.getElementById('resultWeather').innerHTML = tmp;
}
//---jQuery xml response yahoo pipes



//---local textual WebService
function showTextFromServiceJavaScript() {
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
    else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");

    }

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var wsText = xmlHttp.responseText;
            $("#textBoxTextService").val(wsText);
        }
    }

    xmlHttp.open("GET", "/AjaxWebServices/TextualWebService.ashx");
    xmlHttp.send();
}
//---local textual WebService


$(function () {    
    $("#buttonTextService").click(showTextFromServiceJavaScript);
    $("#buttonWeather").click(showTextFromServiceJQueryAndYahooPipes);
    $("#buttonTwitter").click(showTextFromServiceJQuery);
    $("#buttonWeatherJavaScript").click(showYahooWeatherServiceWithJavaScript);

    //MovieDb: Button click and enter press
    $("#buttonMovieDb").click(searchForMovies);
    $("#textMovieDb").keyup(function (event) {
        if (event.keyCode == 13) {
            searchForMovies();
        }
    });
    //MovieDb: Remove text when field is entered
    $("#textMovieDb").focus(function () {
        var full = $("#resultMovieDb").has("img").length == 0 ? false : true;
        if (!full) {
            $("#resultMovieDb").empty();
        }
    });
    $("#dialog-modal").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
        width: 1000
    });
});