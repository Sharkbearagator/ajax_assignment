// Api with key and paramaters https://api.giphy.com/v1/gifs/search?api_key=v5udxlrA4xygbwK590k94UltZ3rV6ohA&q=cats&limit=10&offset=0&rating=PG&lang=en


//on click function
$("#find-gif").on("click", function(){
    //Grab the User input from the search bar
    var userInput = $("#gif-input").val();
//put that into our api request
var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=v5udxlrA4xygbwK590k94UltZ3rV6ohA&q="+ userInput + "&limit=10&offset=0&rating=PG&lang=en"
//ajax function
$.ajax({
    url: queryUrl,
    method: "GET"
})
//get the result and log it

// grab the gifs urls from the response

//print them in new image divs

//add rating to the gifs

//create buttons of the users past searches
    

    
});

