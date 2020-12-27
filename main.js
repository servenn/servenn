$(document).ready(function(){
    
    // navbar section
    $(window).scroll(function(){

            var top_of_element = $(".test").offset().top;
            var bottom_of_element = $(".test").offset().top + $(".test").outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                // the element is visible, do something
                var i = 0;
                $('.test').each(function(){
                    $(this).addClass('animate__animated animate__zoomIn');
                    i+=0.3;
                    $(this).css({
                        animationDelay:i+'s'
                        
                    })
                    

                });

            
            }

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

    // projects chain reaction
    

    

    // if((".test:visible")){
    //     var i = 0;
    //     $('.test').each(function(){
    //         $(this).addClass('animate__animated animate__zoomIn');
    //         i+=1;
    //         $(this).css({
    //             animationDelay:i+'s'
                
    //         })
            

    //     })
    // }
    

    

});