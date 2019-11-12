$( document ).ready(function() {
    
    
setTimeout(function(){
    $('.sat-1').addClass('active')
},1000);

setTimeout(function(){
    $('.sat-2').addClass('active')
},2000);

setTimeout(function(){
    $('.sat-3').addClass('active')
},3000);

setTimeout(function(){
    $('.rooftop-container').addClass('active')
},4000);

});

$( document ).ready(function() {
    
 $( function() {
    $( ".drag-image").draggable();
  } );