jQuery(document).ready(function(){
    //Exercice 1 ========================================================
    $("#btn-1").click(function()
    {
        $("#e-1 textarea").add("#e-1 p").css("border", "2px solid red")
    });
    
    //Exercice 2 ========================================================
    $("#btn-2").click(function()
    {
        $( "<p>World</p>" ).appendTo( "#e-2" );
    });
    
    //Exercice 3 ========================================================
    $("#e-3 div").click(function() 
    {
        let c = $(this).css("background-color")
        $(this).html(c)
    });
    
    //Exercice 4 ========================================================
    $("#btn-4").click(function() 
    {
        $("#e-4 p").last().addClass("orange");
    });
    
    //Exercice 5 ========================================================
    $("#btn-5").click(function() 
    {
        $("#e-5 div").addClass("color-f bg-color-0");
    });
    
    //Exercice 6 ========================================================
    $("#btn-6").click(function() 
    {
        $("#e-6 p").after("<p>World</p>");
        $("#btn-6").html("There it is !")
    });

});