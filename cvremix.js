// var timeoutId = 20;
//
// $('.tresor').on('mousedown', function() {
//     timeoutId = setTimeout(openandclose, 1000);
// }).on('mouseup mouseleave', function() {
//     clearTimeout(timeoutId);
// });

var bs = document.querySelectorAll('.bullboutons')
for(var i=0;i<bs.length;i++){
(function(b){
    window.setInterval(function() {
    b.classList.toggle('red')
  },800)
})(bs[i])

}
var fs = document.querySelectorAll('.fleche')
for(var i=0;i<fs.length;i++){
(function(f){
    window.setInterval(function() {
    f.classList.toggle('opacity')
  },400)
})(fs[i])

}

var audio = document.querySelector("audio");
  audio.volume = 0.5;



function turnOff (){

  var buttOn = document.querySelector(".mutebutton");


    buttOn.classList.toggle('mutebuttoff');

    if (audio.volume!=0||fortnite.volume!=0 ){audio.volume=0;
      fortnite.volume=0;

    }
    else {
    audio.volume = 0.5;
    }
}
var fortnite =document.querySelector('#fortnite')
var sound1=document.querySelector("#tresoropeningsound");
var sound2=document.querySelector("#tresoropeningsound2");
  var tresor = document.querySelector(".tresor");
var perles = document.querySelector(".cachées")

function ouvert(){
if (tresor.classList.contains('open')){
      tresor.classList.replace( 'open', 'tresor' );
      perles.classList.replace('perles','cachées');
  sound1.play();
  sound1.volume=0.2;
}
else{
    tresor.classList.add('open');
        tresor.classList.replace( 'jamaisOuvert', 'dejaOuvert' );
          perles.classList.replace('cachées','perles');
    sound2.play();
    sound2.volume=0.2;
  fortnite.volume=0;}

};


// Poissonlanternetest

var poissonLanterne = document.querySelector(".poissoncaché")

function revele(){
if (poissonLanterne.classList.contains('poissoncaché')){
  poissonLanterne.classList.replace('poissoncaché', 'bouh' );
      

}
else{
  poissonLanterne.classList.add('bouh');
    poissonLanterne.classList.replace( 'bouh', 'poissoncaché' );
          
   

};}

// Poissonlanternetest




var conteneur = document.querySelector(".container1")
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]"
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

if ( isFirefox===true){
    conteneur.classList.replace( 'container1', 'container3' );
}

// var output = 'Detecting browsers by ducktyping:<hr>';
// output += 'isFirefox: ' + isFirefox + '<br>';
// output += 'isChrome: ' + isChrome + '<br>';
// output += 'isSafari: ' + isSafari + '<br>';
// output += 'isOpera: ' + isOpera + '<br>';
// output += 'isIE: ' + isIE + '<br>';
// output += 'isEdge: ' + isEdge + '<br>';
// output += 'isBlink: ' + isBlink + '<br>';
// document.body.innerHTML = output;
