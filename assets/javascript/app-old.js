$(document).ready(function () {

    var vehicles = [
        "pinzgauer", "Lagonda", "porsche", "GTO",
    ];

    function displayVehicleInfo() {

        var vehicle = "porsche";
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=IyX0EUSGUI6Aoqm2qN3tJz2Ep7uhfaMf&q=" + vehicle + "&limit=5&offset=0&rating=G&lang=en";


        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var rating = results[i].rating;
                var title = results[i].title;

                // var rating = results[i].rating;
                console.log(rating)
                console.log(title)


                var vehiclesDiv = $("<div class='vehicles'>");

                // Creating an element to have the rating displayed
                var pOne = $("<p>").text("Rating: " + rating);

                // Displaying the rating
                vehiclesDiv.append(pOne);

                // Creating an element to hold the release year
                var pTwo = $("<p>").text("Title: " + title);

                // Displaying the release year
                vehiclesDiv.append(pTwo);


                // Appending the plot

                // Retrieving the URL for the image
                var imgURL = response.Poster;

                // Creating an element to hold the image
                var image = $("<img>").attr("src", imgURL);

                // Appending the image
                vehiclesDiv.append(image);

                // Putting the entire movie above the previous movies
                $("#buttons-view").prepend(movieDiv);
            };


        })

        console.log(response)









        // function renderButtons() {

        //     // Deleting the movies prior to adding new movies
        //     // (this is necessary otherwise you will have repeat buttons)
        //     // $("#buttons-view").empty();

        //     // Looping through the array of movies
        //     for (var i = 0; i < vehicles.length; i++) {

        //         // Then dynamicaly generating buttons for each movie in the array
        //         // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        //         var a = $("<button>");
        //         // Adding a class of movie-btn to our button
        //         a.addClass("vehicle-btn");
        //         // Adding a data-attribute
        //         a.attr("data-name", vehicles[i]);
        //         // Providing the initial button text
        //         a.text(vehicles[i]);
        //         // Adding the button to the buttons-view div
        //         $("#buttons-view").append(a);
        //     }
        // }


    }
});
// renderButtons();
// displayVehicleInfo();