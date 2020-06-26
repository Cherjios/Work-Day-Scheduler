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
        storeTodos9();
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
        storeTodos10();
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
        storeTodos11();
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
        storeTodos12();
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
        storeTodos1();
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
        storeTodos2();
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
        storeTodos3();
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
        storeTodos4();
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
        storeTodos5();
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
            
        var todos9 = [];
        var todos10 = [];
        var todos11 = [];
        var todos12 = [];
        var todos1 = [];
        var todos2 = [];
        var todos3 = [];
        var todos4 = [];
        var todos5 = [];
  
        init9();
        init10();
        init11();
        init12();
        init1();
        init2();
        init3();
        init4();
        init5();


        function renderTodos9() {
            // Clear todoList element and update todoCountSpan
            todoList9.innerHTML = "";
            todoCountSpan.textContent = todos9.length;

             // Render a new <p> for each todo9
             for (var i = 0; i < todos9.length; i++) {
                var todos9 = todos9[i];
                var Text9am = $("<p>").text(todos9);
                $("#text9pm").append(Text9am);
              }
          }

          function renderTodos10() {
            // Clear todoList element and update todoCountSpan
            todoList10.innerHTML = "";
            todoCountSpan.textContent = todos10.length;

             // Render a new <p> for each todo10
             for (var i = 0; i < todos10.length; i++) {
                var todos10 = todos10[i];
                var Text10am = $("<p>").text(todos10);
                $("#text10pm").append(Text10am);
              }
          }

          function renderTodos11() {
            // Clear todoList element and update todoCountSpan
            todoList11.innerHTML = "";
            todoCountSpan.textContent = todos11.length;

             // Render a new <p> for each todo11
             for (var i = 0; i < todos11.length; i++) {
                var todos11 = todos11[i];
                var Text11am = $("<p>").text(todos11);
                $("#text11am").append(Text11am);
              }
          }

          function renderTodos12() {
            // Clear todoList element and update todoCountSpan
            todoList12.innerHTML = "";
            todoCountSpan.textContent = todos12.length;

             // Render a new <p> for each todo12
             for (var i = 0; i < todos12.length; i++) {
                var todos12 = todos12[i];
                var Text12pm = $("<p>").text(todos12);
                $("#text12pm").append(Text12pm);
              }
          }

          function renderTodos1() {
            // Clear todoList element and update todoCountSpan
            todoList1.innerHTML = "";
            todoCountSpan.textContent = todos1.length;

             // Render a new <p> for each todo1
             for (var i = 0; i < todos1.length; i++) {
                var todos1 = todos1[i];
                var Text1pm = $("<p>").text(todos1);
                $("#text1pm").append(Text1pm);
              }
          }
          function renderTodos2() {
            // Clear todoList element and update todoCountSpan
            todoList2.innerHTML = "";
            todoCountSpan.textContent = todos2.length;

             // Render a new <p> for each todo2
             for (var i = 0; i < todos2.length; i++) {
                var todos2 = todos2[i];
                var Text2pm = $("<p>").text(todos2);
                $("#text2pm").append(Text2pm);
              }
          }
          function renderTodos3() {
            // Clear todoList element and update todoCountSpan
            todoList3.innerHTML = "";
            todoCountSpan.textContent = todos3.length;

             // Render a new <p> for each todo2
             for (var i = 0; i < todos3.length; i++) {
                var todos3 = todos3[i];
                var Text3pm = $("<p>").text(todos3);
                $("#text3pm").append(Text3pm);
              }
          }
   
          function renderTodos4() {
            // Clear todoList element and update todoCountSpan
            todoList4.innerHTML = "";
            todoCountSpan.textContent = todos4.length;

             // Render a new <p> for each todo4
             for (var i = 0; i < todos4.length; i++) {
                var todos4 = todos4[i];
                var Text4pm = $("<p>").text(todos4);
                $("#text4pm").append(Text4pm);
              }
          }

          function renderTodos5() {
            // Clear todoList element and update todoCountSpan
            todoList5.innerHTML = "";
            todoCountSpan.textContent = todos5.length;

             // Render a new <p> for each todo4
             for (var i = 0; i < todos4.length; i++) {
                var todos5 = todos5[i];
                var Text5pm = $("<p>").text(todos5);
                $("#text5pm").append(Text5pm);
              }
          }
          
          function init9() {
            // Get stored todos from localStorage
            // Parsing the JSON string to an object
            var storedTodos9 = JSON.parse(localStorage.getItem("todos9"));
          
            // If todos were retrieved from localStorage, update the todos array to it
            if (storedTodos9 !== null) {
              todos9 = storedTodos9;
            }
          
            // Render todos to the DOM
            renderTodos9();
          }
          function init10() {
            // Get stored todos from localStorage
            // Parsing the JSON string to an object
            var storedTodos10 = JSON.parse(localStorage.getItem("todos10"));
          
            // If todos were retrieved from localStorage, update the todos array to it
            if (storedTodos10 !== null) {
              todos10 = storedTodos10;
            }
          
            // Render todos to the DOM
            renderTodos10();
          }
          function init11() {
            // Get stored todos from localStorage
            // Parsing the JSON string to an object
            var storedTodos11 = JSON.parse(localStorage.getItem("todos11"));
          
            // If todos were retrieved from localStorage, update the todos array to it
            if (storedTodos11 !== null) {
              todos11 = storedTodos11;
            }
          
            // Render todos to the DOM
            renderTodos11();
          }
          function init12() {
            // Get stored todos from localStorage
            // Parsing the JSON string to an object
            var storedTodos12 = JSON.parse(localStorage.getItem("todos12"));
          
            // If todos were retrieved from localStorage, update the todos array to it
            if (storedTodos12 !== null) {
              todos12 = storedTodos12;
            }
          
            // Render todos to the DOM
            renderTodos12();
          }

          function init1() {
            // Get stored todos from localStorage
            // Parsing the JSON string to an object
            var storedTodos1 = JSON.parse(localStorage.getItem("todos1"));
          
            // If todos were retrieved from localStorage, update the todos array to it
            if (storedTodos1 !== null) {
              todos1 = storedTodos1;
            }
          
            // Render todos to the DOM
            renderTodos1();
          }
          function init2() {
            // Get stored todos from localStorage
            // Parsing the JSON string to an object
            var storedTodos2 = JSON.parse(localStorage.getItem("todos2"));
          
            // If todos were retrieved from localStorage, update the todos array to it
            if (storedTodos2 !== null) {
              todos2 = storedTodos2;
            }
          
            // Render todos to the DOM
            renderTodos2();
          }
          function init3() {
            // Get stored todos from localStorage
            // Parsing the JSON string to an object
            var storedTodos3 = JSON.parse(localStorage.getItem("todos3"));
          
            // If todos were retrieved from localStorage, update the todos array to it
            if (storedTodos3 !== null) {
              todos3 = storedTodos3;
            }
          
            // Render todos to the DOM
            renderTodos3();
          }
          function init4() {
            // Get stored todos from localStorage
            // Parsing the JSON string to an object
            var storedTodos4 = JSON.parse(localStorage.getItem("todos4"));
          
            // If todos were retrieved from localStorage, update the todos array to it
            if (storedTodos4 !== null) {
              todos4 = storedTodos4;
            }
          
            // Render todos to the DOM
            renderTodos4();
          }
          function init5() {
            // Get stored todos from localStorage
            // Parsing the JSON string to an object
            var storedTodos5 = JSON.parse(localStorage.getItem("todos5"));
          
            // If todos were retrieved from localStorage, update the todos array to it
            if (storedTodos5 !== null) {
              todos5 = storedTodos5;
            }
          
            // Render todos to the DOM
            renderTodos5();
          }

          function storeTodos9() {
            // Stringify and set "todos" key in localStorage to todos array
            localStorage.setItem("todos9", JSON.stringify(todos9));
          }
          function storeTodos10() {
            // Stringify and set "todos" key in localStorage to todos array
            localStorage.setItem("todos10", JSON.stringify(todos10));
          }
          function storeTodos11() {
            // Stringify and set "todos" key in localStorage to todos array
            localStorage.setItem("todos11", JSON.stringify(todos11));
          }
          function storeTodos12() {
            // Stringify and set "todos" key in localStorage to todos array
            localStorage.setItem("todos12", JSON.stringify(todos12));
          }
          function storeTodos1() {
            // Stringify and set "todos" key in localStorage to todos array
            localStorage.setItem("todos1", JSON.stringify(todos1));
          }
          function storeTodos2() {
            // Stringify and set "todos" key in localStorage to todos array
            localStorage.setItem("todos2", JSON.stringify(todos2));
          }
          function storeTodos3() {
            // Stringify and set "todos" key in localStorage to todos array
            localStorage.setItem("todos3", JSON.stringify(todos3));
          }
          function storeTodos4() {
            // Stringify and set "todos" key in localStorage to todos array
            localStorage.setItem("todos4", JSON.stringify(todos4));
          }
          function storeTodos5() {
            // Stringify and set "todos" key in localStorage to todos array
            localStorage.setItem("todos5", JSON.stringify(todos5));
          }




});

