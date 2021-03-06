'use strict';

/* global $ */

function fizzBuzz(){
  $('#number-chooser').submit(event => { // this stops the default form submission behavior 
    
    event.preventDefault(); const userTextElement = $(event.currentTarget).find('#number-choice');
    for (let i = 1; i <= userTextElement.val(); i++) {
      if (i % 15 === 0){
        $( '.js-results' ).append(`<div class="fizz-buzz-item fizzbuzz">
        <span>fizzbuzz</span>
      </div>`);
      console.log(i);
      }
      else if (i % 5 === 0){
        $('.js-results').append(`<div class="fizz-buzz-item buzz">
        <span>buzz</span>
      </div>`);
      console.log(i);
      }
      else if (i % 3 === 0){
        $('.js-results').append(`<div class="fizz-buzz-item fizz">
        <span>fizz</span>
      </div>`);
      console.log(i);
      }
      else {
        $('.js-results').append(`<div class="fizz-buzz-item">
        <span>${i}</span>
      </div>`);
      console.log(i);
      }

    }

    //$(".js-display-user-text").text(user text is: ${userTextElement.val()}); userTextElement.val(""); });
    //console.log(userTextElement.val());

  });
}

$(fizzBuzz);