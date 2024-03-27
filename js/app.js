

$(function(){
    'use strict'

    /* fixed header menu js starts */

    $(window).on('scroll', function(){
       if ($(window).scrollTop() > $('#header').height()){
           $('#header').addClass('fixed-menu')
       }else {
           $('#header').removeClass('fixed-menu')
       }
   })

   /* fixed header menu js ends */


   /* scroll top button js starts */

    $(window).on('scroll', function() {
        
        if($(this).scrollTop() > 450 ) {
            $('#topbtn').fadeIn(500);
        }else{
            $('#topbtn').fadeOut(500);
        }

    })


    
    $('#topbtn').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        },1000)
    })

    /* scroll top button js ends */

    /* smooth jump js starts*/ 

    $('a').on('click', function(event){
        event.preventDefault;
        if(this.hash !== '') {
            $('html,body').animate({
                scrollTop:$(this.hash).offset().top,
            },1000)
        }
    })

    /* smooth jump js ends*/





    /* counter up js starts */

    $('#cn').spincrement({
        duration: 5000,
        
    })

    $('#cn2').spincrement({
        duration: 5000,
        
    })

    $('#cn3').spincrement({
        duration: 5000,
        
    })

    $('#cn4').spincrement({
        duration: 5000,
        
    })

    /* counter up js ends */


    /* gallery filter js starts */

    $('.filtr-container').filterizr();


    /* gallery filter js ends */

    /* gallery filter link hover active js starts */

    $('.gallery-options ul li').on('click', function () {
        $(this).addClass('active')
        $(this).siblings('.active').removeClass('active');
    })
    /* gallery filter link hover active js ends */


    /* final count down js starts */

    $('#down').countdown('2022/03/01', function(event) {
  var $this = $(this).html(event.strftime(''
    
    + '<div class="count-down-content"> <span>%D</span> <span>days</span> </div>'
    + '<div class="count-down-content"> <span>%H</span> <span>hrs</span> </div>'
    + '<div class="count-down-content"> <span>%M</span>  <span>mins</span> </div>'
    + '<div class="count-down-content"> <span>%S</span> <span>secs</span> </div>'));
});

    /* final count down js ends */

    















})



/* typed js starts */

const typed = new Typed('.test-type', {
  
  strings: ['Everything',

  
            
        ],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true,
});

/* typed js ends */

/* gallery venobox js starts */
new VenoBox({
    spinner: 'circle',
    spinColor: 'rgb(231, 154, 10)'
});

/* gallery venobox js ends */


/* input dropdown date js starts */

let select = document.getElementById('day');

for (var i = 1; i <=31; i++) {
    let option = document.createElement('option');
    let text = document.createTextNode(i);

    option.appendChild(text);
    select.appendChild(option);
}


let month = document.getElementById('month');

for (var i = 1; i <=12; i++) {
    let option = document.createElement('option');
    let text = document.createTextNode(i);

    option.appendChild(text);
    month.appendChild(option);
}


let year = document.getElementById('year');

for (var i = 1980; i <=2010; i++) {
    let option = document.createElement('option');
    let text = document.createTextNode(i);

    option.appendChild(text);
    year.appendChild(option);
}
 /* input dropdown date js ends */


 /* preloader js starts */
$(window).on('load',function(){
    $('.preloader').fadeOut(4000)
}) 
/* preloader js ends */