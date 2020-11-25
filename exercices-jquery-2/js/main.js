//======================== Exercice 1 ========================

$("#btn-1").on("click", function () { 
    $("#d-1").animate({
        right: "50px"
    },500).queue(function() {
        $(this).dequeue(); 
    }).animate({
        left: "50px",
        right: "0"
    },500).queue(function() {
        $(this).dequeue();
    }).animate({
        right:"50px",
        left: "0"
    },500, function () { $(this).removeAttr('style');});    
    
});

//======================== Exercice 2 ========================
$("#btn-2").on("click", function () { 
    $("#d-2a").add("#d-2c").toggleClass("green").slideToggle("slow");
});

//======================== Exercice 3 ========================
$("#btn-3").on("click", function () { 
    $("#d-3").animate({
        height: "150px", 
        width: "150px"
    },
    500,
    function () { $(this).removeAttr('style');});
});

//======================== Exercice 4 ========================
$("#btn-4").on("click", function () { 
    $("#d-4").fadeOut(1500).fadeIn(1500)
});

//======================== Exercice 5 ========================
$("#btn-5").on("click", function () { 
    setInterval(function () { 
        $("#d-5").fadeOut().fadeIn()
    },1000);
});

//======================== Exercice 6 ========================
let toggleFx = function() {
    $.fx.off = !$.fx.off;
  };
  $( "#btn-6b" ).on( "click", toggleFx );
  $( "#btn-6a" ).on("click",function() {
    $( "#d-6" ).toggle( "slow" );
  });