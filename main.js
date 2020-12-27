$(document).ready(function(){
    
    // navbar section
    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $('.navbar').addClass('sticky');
            $('.logo').attr('src','https://img.icons8.com/material/24/ffffff/circled-s.png');
            
          
        }else{
         $('.navbar').removeClass('sticky'); 
         $('.logo').attr('src','https://img.icons8.com/material/48/ffffff/circled-s.png');
        }
     });
    
    $('.p-testing').addClass('animate__animated animate__fadeInUp');
    $('.P-testing').css({
       opacity:1,
    //    animationDelay:'2.5s' 
    });

});