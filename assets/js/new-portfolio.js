$(".scroll").click(function() {
    console.log("hello");
    $('html,body').animate({
        scrollTop: $("#container-two").offset().top},
        'slow');
});