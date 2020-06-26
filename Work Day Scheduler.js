$(document).ready(function(){

    //This function is to set todays day and time
    $("#todayIs").text(moment().format('LLLL'));
    var currentTime = moment().format('LTS');
    
    
    

    //Function to write chores to the box 9 am
    $("#button9").on("click", function(event){
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();

        var InputText = $("#chores09").val().trim();

       var Text9am = $("<p>").text(InputText);
        $("#text9am").append(Text9am);
        console.log(InputText);
    });
    //Change text color with the time 9 am
   if (currentTime === 9){
       $("#text9am").toggleClass("bg-success");
   }else if(currentTime < 9){
    $("#text9am").toggleClass("bg-danger");
   }else{
    $("#text9am").toggleClass("bg-light");
   }
   
   //Function to write chores to the box 10 am
   $("#button10").on("click", function(event){
    // event.preventDefault() prevents the form from trying to submit itself.
    event.preventDefault();

    var InputText = $("#chores10").val().trim();

   var Text10am = $("<p>").text(InputText);
    $("#text10am").append(Text10am);
    console.log(InputText);
});
//Change text color with the time 10 am
if (currentTime === 10){
   $("#text10am").toggleClass("bg-success");
}else if(currentTime < 10){
$("#text10am").toggleClass("bg-danger");
}else{
$("#text10am").toggleClass("bg-light");
}






});

