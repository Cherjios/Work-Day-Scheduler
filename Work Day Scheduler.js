$(document).ready(function(){

    //This function is to set todays day and time
    $("#todayIs").text(moment().format('LLLL'));

    
    

    //Function to write chores to the box
    $("#button9").on("click", function(event){
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();

        var InputText = $("#chores").val().trim();

       var Text9am = $("<p>").text(InputText);
        $("#text9am").append(Text9am);
        $("#chores").text("");

       

        console.log(InputText);


    });


});

