'use strict';
/* global $ */
function changeImage(){
  $('.thumbnail').on('click', function(event) {

    
    $('.hero').find('img').attr('src',$(this).find('img').attr('src'));

    // $('.hero').children('src',$(this).find('img').attr('src'));
   
  });
}


$(changeImage);
