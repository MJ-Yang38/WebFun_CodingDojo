$("document").ready(function(){
    $("#btn-top-left").click(function(){
        $("h1").hide();
    })
    $("#btn-top-right").click(function(){
        $("h1").show();
    })
    $("#btn-top-mid").click(function(){
        $("h2").toggle("slow");
    })
    $("h2").click(function(){
        $(this).addClass("highlighted");
    })

    $("p").click(function(){
        $(this).append("<p>a newly appened paragraph for testing!!!!</p>");
    })
    
    $("#btn-slide-down").click(function(){
        $("#doge").slideDown();
    })
    $("#btn-slide-up").click(function(){
        $("#doge").slideUp();
    })
    $("#btn-slide-toggle").click(function(){
        $("#doge").slideToggle();
    })
    $("#btn-fade-in").click(function(){
        $("#doge").fadeIn();
    })
    $("#btn-fade-out").click(function(){
        $("#doge").fadeOut();
    })
    $("h3").click(function(){
        $(this).before("<h3>this is a new h3 BEFORE the original</h3>");
    })
    $("h3").click(function(){
        $(this).after("<h3>this is a new h3 AFTER the original</h3>");
    })
    $("h4").click(function(){
        $(this).html("<p>setting the h4 to be a new p<p>");
    })
    $("#doge").click(function(){
        $("#doge").attr("width","50");
    })
    $("input").mouseover(function(){
        $(this).val("change the text now");
    })
    $("h6").click(function(){
        $(this).text("now I'm changing the text again");
    })
    




})