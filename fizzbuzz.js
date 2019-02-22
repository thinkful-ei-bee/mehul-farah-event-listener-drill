'use strict';

/* global $ */

function fizzBuzz(){
  $('#number-chooser').submit(event => { // this stops the default form submission behavior 
    
    event.preventDefault(); const userTextElement = $(event.currentTarget).find('#number-choice');
    for (let i = 0; i < userTextElement.val; i++) {
      if (i % 15 === 0){
        $( '.js-results' ).append(`<div class="fizz-buzz-item fizzbuzz">
        <span>fizzbuzz</span>
      </div>`);
      }
      else if (i % 5 === 0){
        $('.js-results').append(`<div class="fizz-buzz-item buzz">
        <span>buzz</span>
      </div>`);
      }
      else if (i % 3 === 0){
        $('.js-results').append(`<div class="fizz-buzz-item fizz">
        <span>fizz</span>
      </div>`);
      }
      else {
        $('.js-results').append(`<div class="fizz-buzz-item">
        <span>1</span>
      </div>`);
      }

    }

    //$(".js-display-user-text").text(user text is: ${userTextElement.val()}); userTextElement.val(""); });
    //console.log(userTextElement.val());

  });
}

$(fizzBuzz);