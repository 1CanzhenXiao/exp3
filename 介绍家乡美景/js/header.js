$(window).scroll( (e) => {
    let scrollTop = $(document).scrollTop();
    if(scrollTop>0){
        $('.header').css({'background-color': 'rgba(0, 0, 0, 0.479)', 'transition': 'all 0.4s linear'})
    }else{
        $('.header').css({'background-color': 'rgba(0, 0, 0, 0.25)', 'transition': 'all 0.4s linear'})
    }
})

$(".headerContentRight .nav2").hover(function(){
    $('.nav2').css({'border-bottom': '2px solid rgb(255, 254, 254)'})
}, function(){
    $('.nav2').css({'border-bottom': '0px solid rgb(255, 254, 254)'})
})

$(".headerContentRight .nav3").hover(function(){
    $('.nav3').css({'border-bottom': '2px solid rgb(255, 254, 254)'})
}, function(){
    $('.nav3').css({'border-bottom': '0px solid rgb(255, 254, 254)'})
})

$(".headerContentRight .nav4").hover(function(){
    $('.nav4').css({'border-bottom': '2px solid rgb(255, 254, 254)'})
}, function(){
    $('.nav4').css({'border-bottom': '0px solid rgb(255, 254, 254)'})
})

$(".headerContentRight .nav5").hover(function(){
    $('.nav5').css({'border-bottom': '2px solid rgb(255, 254, 254)'})
}, function(){
    $('.nav5').css({'border-bottom': '0px solid rgb(255, 254, 254)'})
})