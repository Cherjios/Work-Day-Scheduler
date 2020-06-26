$(document).ready(function(){

    //This function is to set todays day and time
    $("#todayIs").text(moment().format('LLLL'));
    var currentTime = moment().format('LTS');
    
    var storage9 = []; 

    init9();

    //Function to write chores to the box 9 am
    $("#button9").on("click", function(event){
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();

        var InputText = $("#chores09").val().trim();

       var Text9am = $("<p>").text(InputText);
        $("#text9am").append(Text9am);
        
        console.log(InputText);
        console.log(localStorage);
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
   
    //Function to write chores to the box 11 am
    $("#button11").on("click", function(event){
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();

        var InputText = $("#chores11").val().trim();
        var Text11am = $("<p>").text(InputText);
        $("#text11am").append(Text11am);
        console.log(InputText);
        
    });
    //Change text color with the time 11 am
    if (currentTime === 11){
    $("#text11am").toggleClass("bg-success");
    }else if(currentTime < 11){
    $("#text11am").toggleClass("bg-danger");
    }else{
    $("#text11am").toggleClass("bg-light");
    }

    //Function to write chores to the box 12 pm
    $("#button12").on("click", function(event){
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();
    
        var InputText = $("#chores12").val().trim();
    
        var Text12pm = $("<p>").text(InputText);
        $("#text12pm").append(Text12pm);
        console.log(InputText);
        
    });

        //Change text color with the time 12 pm
        if (currentTime === 12){
        $("#text12pm").toggleClass("bg-success");
        }else if(currentTime < 12){
        $("#text12pm").toggleClass("bg-danger");
        }else{
        $("#text12pm").toggleClass("bg-light");
        }

    //Function to write chores to the box 1 pm
    $("#button1").on("click", function(event){
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();
    
        var InputText = $("#chores1").val().trim();
    
        var Text1pm = $("<p>").text(InputText);
        $("#text1pm").append(Text1pm);
        console.log(InputText);
    });

        //Change text color with the time 1pm
        if (currentTime === 1){
        $("#text1pm").toggleClass("bg-success");
        }else if(currentTime < 1){
        $("#text1pm").toggleClass("bg-danger");
        }else{
        $("#text1pm").toggleClass("bg-light");
        }

    //Function to write chores to the box 2 pm
    $("#button2").on("click", function(event){
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();
    
        var InputText = $("#chores2").val().trim();
    
        var Text2pm = $("<p>").text(InputText);
        $("#text2pm").append(Text2pm);
        console.log(InputText);
    });

        //Change text color with the time 2pm
        if (currentTime === 2){
        $("#text2pm").toggleClass("bg-success");
        }else if(currentTime < 2){
        $("#text2pm").toggleClass("bg-danger");
        }else{
        $("#text2pm").toggleClass("bg-light");
        }

    //Function to write chores to the box 3pm
    $("#button3").on("click", function(event){
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();
    
        var InputText = $("#chores3").val().trim();
    
        var Text3pm = $("<p>").text(InputText);
        $("#text3pm").append(Text3pm);
        console.log(InputText);
    });

        //Change text color with the time 3pm
        if (currentTime === 3){
        $("#text3pm").toggleClass("bg-success");
        }else if(currentTime < 3){
        $("#text3pm").toggleClass("bg-danger");
        }else{
        $("#text3pm").toggleClass("bg-light");
        }
    //Function to write chores to the box 4pm
    $("#button4").on("click", function(event){
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();
    
        var InputText = $("#chores4").val().trim();
    
        var Text4pm = $("<p>").text(InputText);
        $("#text4pm").append(Text4pm);
        console.log(InputText);
    });

        //Change text color with the time 4pm
        if (currentTime === 4){
        $("#text4pm").toggleClass("bg-success");
        }else if(currentTime < 4){
        $("#text4pm").toggleClass("bg-danger");
        }else{
        $("#text4pm").toggleClass("bg-light");
        }

    //Function to write chores to the box 5pm
    $("#button5").on("click", function(event){
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();
    
        var InputText = $("#chores5").val().trim();
    
        var Text5pm = $("<p>").text(InputText);
        $("#text5pm").append(Text5pm);
        console.log(InputText);
    });

        //Change text color with the time 5pm
        if (currentTime === 5){
        $("#text5pm").toggleClass("bg-success");
        }else if(currentTime < 5){
        $("#text5pm").toggleClass("bg-danger");
        }else{
        $("#text5pm").toggleClass("bg-light");
        }
        
        //Clear content at midnight;
        if (currentTime === 24){
            Text9am.remove();
            Text10am.remove();
            Text11am.remove();
            Text12pm.remove();
            Text1pm.remove();
            Text2pm.remove();
            Text3pm.remove();
            Text4pm.remove();
            Text5pm.remove();
        }
            
     
        function init9() {
            // Get stored todos from localStorage
            // Parsing the JSON string to an object
            var storedTodos9 = JSON.parse(localStorage.getItem("InputText9"));
          
            // If todos were retrieved from localStorage, update the todos array to it
            if (storedTodos9 !== null) {
                for(var i = 0; i<= storedTodos9.length; i++){
                    Text9am = $("<p>").text(storedTodos9);
                    $("#text9am").append(Text9am);
                }
                
            }
          
          }



});

