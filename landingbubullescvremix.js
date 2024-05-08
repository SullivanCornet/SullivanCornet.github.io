// $(window).scroll(function(){
// var wScroll = $(this).scrollTop();
//
// if(wScroll > $('.logoscode').offset().top-450){
//
// $('.image').each(function(i){
//   setTimeout(function(){
//      $('.logoscode').eq(i).addClass('is-showing');},
//      150* (i+1));
//
//   });
//
//
// }
//
//
// });
$(window).scroll(function(){
var wScroll = $(this).scrollTop();

if(wScroll > $('.logoscode').offset().top-300){

$('.image').each(function(i){

     $('.html5').eq(i).addClass('is-showing');
     ;

  });


}



});



$(window).scroll(function(){
var wScroll = $(this).scrollTop();

if(wScroll > $('.logoscode').offset().top-300){

$('.image').each(function(i){

     $('.css3').eq(i).addClass('is-showing');
     ;

  });


}



});


$(window).scroll(function(){
var wScroll = $(this).scrollTop();

if(wScroll > $('.logoscode').offset().top-300){

$('.image').each(function(i){

     $('.js').eq(i).addClass('is-showing');
     ;

  });


}



});

$(window).scroll(function(){
var wScroll = $(this).scrollTop();

if(wScroll > $('.logoscode').offset().top-300){

$('.image').each(function(i){

     $('.ps').eq(i).addClass('is-showing');
     ;

  });


}



});
$(window).scroll(function(){
var wScroll = $(this).scrollTop();

if(wScroll > $('.logoscode').offset().top-300){

$('.image').each(function(i){

     $('.ai').eq(i).addClass('is-showing');
     ;

  });


}



});


// ------------------------------------------------------------------
$(window).scroll(function(){
var wScroll = $(this).scrollTop();

if(wScroll > $('.experiencesTexte').offset().top -300){

$('.experiencesTexte').each(function(i){

     $('.experiencesTexte').eq(i).addClass('is-showing2');
     ;

  });


}



});

$(window).scroll(function(){
var wScroll = $(this).scrollTop();

if(wScroll > $('.experiencesTexte').offset().top -300){

$('.bullbouton2').each(function(i){

     $('.bullbouton2').eq(i).addClass('is-showing3');
     ;

  });


}



});

$(window).scroll(function(){
var wScroll = $(this).scrollTop();

if(wScroll > $('#formationTexte').offset().top -400){

$('.bullbouton4').each(function(i){

     $('.bullbouton4').eq(i).addClass('is-showing4');

     ;

  });


}



});


$(window).scroll(function(){
var wScroll = $(this).scrollTop();

if(wScroll > $('#competencesTexte').offset().top -400){

$('.bullbouton3').each(function(i){

     $('.bullbouton3').eq(i).addClass('is-showing5');
     ;

  });


}



});

$(window).scroll(function(){
var wScroll = $(this).scrollTop();

if(wScroll > $('#maisTexte').offset().top -400){

$('.bullbouton5').each(function(i){

     $('.bullbouton5').eq(i).addClass('is-showing6');


  });


}



});



$(window).scroll(function(){
var wScroll = $(this).scrollTop();

if(wScroll > $('#contact').offset().top-600){

$('.fleches').each(function(i){

     $('.fleches').eq(i).addClass('is-vanishing');
     ;

  });


}



});

var encours=(audio.currentSrc);
// console.log(encours);
var ambiance=$('#ambiance');
// console.log(ambiance);
// console.log(ambiance.src);
var src= $( "[src]" );
// console.log(src[3]);
var statesurface =false;

$(window).scroll(function(){
var wScroll = $(this).scrollTop();

 if (wScroll > $('#competencesTexte').offset().top-160 && statesurface==false) {
 statesurface= true;
    $('#ambiance').each(function(i){

         $('#ambiance').eq(i).attr({src:'UnderwaterBubblesSoundsplash5.wav'
        });
          });}
else  if (wScroll < $('#competencesTexte').offset().top-160&& statesurface==true) {
  statesurface=false;
  $('audio').each(function(i){

       $('#ambiance').eq(i).attr({src:'Lake1.wav'
      });


    });

  }
});




var fortnite =document.querySelector('#fortnite')


$(window).scroll(function() {

  var tresor = document.querySelector(".tresor");
var wScroll = $(this).scrollTop();


if(wScroll < $('.tresor').offset().top -3 && tresor.classList.contains('jamaisOuvert')){
fortnite.play('loop')
fortnite.volume=1;
  }
 if (wScroll < $('#maisTexte').offset().top -1 && tresor.classList.contains('jamaisOuvert') ){
  fortnite.play('loop')
  fortnite.volume=0.90;
}
if (wScroll < $('#formationTexte').offset().top -20 && tresor.classList.contains('jamaisOuvert') ){
  fortnite.play('loop')
  fortnite.volume=0.30;
}
 if (wScroll < $('#experiencesTexte').offset().top -200  && tresor.classList.contains('jamaisOuvert')){
  fortnite.play('loop')
  fortnite.volume=0.32;
}
 if (wScroll < $('#competencesTexte').offset().top -200  && tresor.classList.contains('jamaisOuvert')){
  fortnite.play('loop')
  fortnite.volume=0.10;
}
 if (wScroll < $('.citation').offset().top -100  && tresor.classList.contains('jamaisOuvert')){
fortnite.play('loop')
fortnite.volume=0.05;
}


});





//
//


// $(window).scroll(function(){
// var wScroll = $(this).scrollTop();
//
// if(wScroll > $('.container2').offset().top-6){
// history.go(0);
//&& (src!=='UnderwaterBubblesSoundsplash5.wav')
//
// }
//
//
//
// });
