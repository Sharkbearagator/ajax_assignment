// Api with key and paramaters https://api.giphy.com/v1/gifs/search?api_key=v5udxlrA4xygbwK590k94UltZ3rV6ohA&q=cats&limit=10&offset=0&rating=PG&lang=en
$(document).ready(function(){



//on click function
$("#find-gif").on("click", function(event){
    event.preventDefault();

//Grab the User input from the search bar
var userInput = $("#gif-input").val();
//put that into our api request
var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=v5udxlrA4xygbwK590k94UltZ3rV6ohA&q="+ userInput +"&limit=10&offset=0&rating=PG&lang=en"
//ajax function
$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function(response) {
    //get the result and log it
    console.log(response);
    // grab the gifs urls from the response
    for(var i = 0; i < response.data.length; i++){
    var gifUrl = response.data[i].images.fixed_height.url
    console.log(gifUrl);
    var gifDiv = $("<div>");
    var gifs = $("<img>");
    //add rating to the gifs
    var p = $("<p>").text("Rating: " + response.data[i].rating);
    console.log(p);
    gifs.attr("src" , gifUrl);
    console.log(gifs);
    gifDiv.prepend(gifs)
    console.log(gifDiv);
    gifDiv.prepend(p)
     //print them in new image divs
    $("#gifs").prepend(p);
    $("#gifs").prepend(gifDiv);
    } 
});
//create buttons of the users past searches
    

    
    });

});

