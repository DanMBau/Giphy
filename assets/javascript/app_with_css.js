window.onload = function() {
    createButtons(carArray, 'searchButton', '#buttonsArea');
    console.log('hallo');

}


var carArray = ["Porsche", "BMW", "Audi", "Ferrari",];


// create buttons from array, incl. class and data-type
function createButtons(carArray, classToAdd, areaToAddTo) {

    $(areaToAddTo).empty();
    for (var i = 0; i < carArray.length; i++) {
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', carArray[i]);
        a.text(carArray[i]);
        $(areaToAddTo).append(a)
    }
}


// on click perform ajax call, display GIFs with data-state=still
$(document).on('click', '.searchButton', function () {
    $("#searches").empty();
    var userInput = $(this).data('type');
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=IyX0EUSGUI6Aoqm2qN3tJz2Ep7uhfaMf&q=" + userInput + "&limit=5&offset=0&rating=G&lang=en";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            var searchDiv = $('<div class="search-item">');
            var rating = response.data[i].rating;
            var p = $('<p>').text('rating:' + rating);
            
            // URL for still and animated GIFs
            var animated = response.data[i].images.downsized.url;
            var still_img = response.data[i].images.downsized_still.url;
            
            var image = $('<img>');
            image.attr('src', still_img);
            image.attr('data-still', still_img);
            image.attr('data-animates', animated);
            image.attr('data-state', 'still');
            image.addClass('searchImage');
            searchDiv.append(p);
            searchDiv.append(image);
            $('#searches').append(searchDiv);
        }

        console.log(response)
    })
})
$(document).on('click', '.searchImage', function () {
    console.log("Inside gif click");
    var state = $(this).attr("data-state");
    if(state==="animates"){
        $(this).attr("src",$(this).data("still"));
        $(this).attr("data-state","still");
    }
    else{
        $(this).attr("src",$(this).data("animates"));
        $(this).attr("data-state","animates");
    }
});

// create new buttons from input

$(document).on('click', 'input', function () {
    event.preventDefault();
    var newCar = $('input').val().trim();

    carArray.push(newCar);
    createButtons(carArray, 'searchButton', '#buttonsArea');
    console.log(carArray)

});









