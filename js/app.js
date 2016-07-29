 document.addEventListener("DOMContentLoaded", function(){


  //Resized menu
  var $menuElements = $(".menu ul");
  var $menuElement = $(".menuElement");

  $(window).on("resize", function (event){
    if ($(window).width() < 800) {
      $menuElements.removeClass("menuElements");
      $menuElements.addClass("tinyMenu");
      $menuElement.css("display", "inline");
    } else {
      $menuElements.removeClass("tinyMenu");
      $menuElements.addClass("menuElements");
      $menuElement.css("display", "none");
    }
  });

  $menuElement.on("click", function(event){
    if ($menuElements.hasClass("tinyMenu")) {
      if ($menuElements.css("display") ==  "none") {
        $menuElements.css("display", "list-item");
      } else {
        $menuElements.css("display", "none");
      }
    } else {
      event.preventDefault();
    }
  });
  
  //Triple2

  var triple2header = $(".triple2 h4");
  var triple2adds = $(".triple2 ul");

  $(window).on("resize", function(event){
    if ($(window).width() < 700) {
      triple2adds.removeClass("adds");
      triple2adds.addClass("noAdds");
    } else {
      triple2adds.removeClass("noAdds");
      triple2adds.addClass("adds");
    }
  });

  triple2header.on("click", function(event){
    console.log('in');
    console.log($(window).width());

    if ($(window).width() > 700) {
      return false;
    }

    if (triple2adds.hasClass("noAdds")) {
      triple2adds.removeClass("noAdds");
      triple2adds.addClass("adds");
    } else {
      triple2adds.removeClass("adds");
      triple2adds.addClass("noAdds");
    }

  });


//Slider:

    var kwota = 0;
    var liczbaRat = 0;
    var slider1 = $("#slider1");
    var slider2 = $("#slider2");

   

    slider1.slider({
    
      min: 1000,
      max: 10000,
      step: 500,
      slide: function( event, ui ) {
          kwota = ui.value;
          console.log(ui.value);
          changeValue();
      }
    });

    slider2.slider({
    
      min: 1,
      max: 24,
      step: 1,
      slide: function( event, ui ) {         
          liczbaRat = ui.value;
          console.log(ui.value);
          changeValue();
      }
    });
     function changeValue(){
        var rata = (kwota *1.03) / liczbaRat;
        $( "#amount" ).val( rata );

    }

  

});




















// });