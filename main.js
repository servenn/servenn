$(document).ready(function(){
    
    //     var i = 0;
    // function move() {
    //     if (i == 0) {
    //         i = 1;
    //         var elem = document.getElementsByClassName('text');
    //         console.log(elem);
    //         var width = 0;
    //         var id = setInterval(frame, 30);
    //         function frame() {
    //             if (width >=60) {
    //                 clearInterval(id);
    //                 i = 0;
    //             } else {
    //                 width++;
    //                 // elem.style.width = width + "%";
    //                 var j;
    //                 for(j=0;j<elem.length;j++){
    //                     elem[j].innerHTML = width + "%";
    //                 }
                    
    //             }
    //         }
    //     }
        
    // }

    // move();
    // navbar section
    $(window).scroll(function(){

            //projects animation
            var $ptop = $('.test');
            

            // var top_of_element = $(".test").offset().top;
            // var bottom_of_element = $(".test").offset().top + $(".test").outerHeight();
            // var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            // var top_of_screen = $(window).scrollTop();

            $ptop.each(function(){
                var topof = $(this).offset().top;
                var bottomof = $(this).offset().top + $(this).outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();

                if ((bottom_of_screen > topof) && (top_of_screen < bottomof)){
                    // the element is visible, do something
                    var i = 0;
                    $(this).addClass('animate__animated animate__zoomIn');
                    $(this).css({
                        opacity:'1'
                    })
            
                }

            })


            // if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            //     the element is visible, do something
            //     var i = 0;
            //     $('.test').each(function(){
            //         $(this).addClass('animate__animated animate__zoomIn');
            //         i+=0.3;
            //         $(this).css({
            //             animationDelay:i+'s',
            //             opacity:1
            //         })
                    

            //     });
        
            // }
            // this section belongs to skill bar animation
            var top_of_element = $(".text").offset().top;
            var bottom_of_element = $(".text").offset().top + $(".text").outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){

                $('.html').addClass('htmls');
                //  setTimeout(show,2000);
                $('.css').addClass('csss');
                $('.js').addClass('jss');
                $('.java').addClass('javas');
                $('.wp').addClass('wps');
                $('.node').addClass('nodes');
                $('.android').addClass('androids');

                // add percentages now
                // $('.htmls').html();
                
            }

            
            //navbar responsivenes test
            navbar();
        
     });
    
    $('.p-testing').addClass('animate__animated animate__fadeInUp');
    $('.P-testing').css({
       opacity:1,
    //    animationDelay:'2.5s' 
    });

    //functions 
    function navbar(){
        if($(window).scrollTop()>0){
            $('.navbar').addClass('sticky');
            $('.logo').attr('src','https://img.icons8.com/material/24/ffffff/circled-s.png');
            // $('.nav-link').addClass('.navbrand');
          
        }else{
         $('.navbar').removeClass('sticky'); 
         $('.logo').attr('src','https://img.icons8.com/material/48/ffffff/circled-s.png');
        //  $('.nav-link').removeClass('.navbrand');
        }
    }

    
    

    
});