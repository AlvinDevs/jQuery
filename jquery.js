
$(function() {

    console.log("Let's get ready to party with jQuery!");
});

$(function() {

    // Centers the img
    $('article img').addClass('image-center')});

$(function(){

    // Removes the last paragraph
    $('article p:last').remove();
})

$(function(){

    let randomSize = Math.floor(Math.random() * 101);
    $('#title').css('font-size', randomSize + 'px');
})

$(function(){
    // Adds a new item to the list
    let newItem = $('<li>New item added by jQuery!</li>');
    $('#taskList').append(newItem);
})

$(function(){

    // Empty the aside and add an apology paragraph
  var apologyText = "We apologize for the existence of the list.";
  $('aside').empty().append('<p>' + apologyText + '</p>');
})

$(function(){

    // Set the background color based on the input values

    $('input[type="number"]').on('input', function() {
        var redValue = $('#redInput').val();
        var blueValue = $('#blueInput').val();
        var greenValue = $('#greenInput').val();
        
        var bgColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
        console.log(bgColor);
        $('body').css('background-color', bgColor);
      });
})

$(function(){

    // Removes the img when clicked on
    $('img').on('click', function(removeImg){
        $(removeImg.target).remove();
    })
})