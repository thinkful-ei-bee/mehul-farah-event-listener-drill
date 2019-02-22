'use strict';

/* global $ */


function addItem(){

    $('input').prop('required',true);

    $('#js-shopping-list-form').submit(event => {
        event.preventDefault(); 
        const userTextElement = $(event.currentTarget).find('#shopping-list-entry');
 
        helpAdd(userTextElement.val());
        
   
    });
  }
  
  function checkItem(){
    $('.shopping-list').on('click', `.shopping-item-toggle`, event => {
        event.preventDefault(); 
    //    $(event.currentTarget.closest('li')).find('>:first-child').attr('class','shopping-item shopping-item__checked');
     //   const id = getItemIdFromElement(event.currentTarget);
        helpCheck(event.currentTarget);
        
    });
  }

  function deleteItem(){
    $('.shopping-list').on('click', `.shopping-item-delete`, event => {
        event.preventDefault(); 
    //    $(event.currentTarget.closest('li')).find('>:first-child').attr('class','shopping-item shopping-item__checked');
     //   const id = getItemIdFromElement(event.currentTarget);
     $(event.currentTarget.closest('li')).remove();
       
    });
  }





  function helpCheck(item) {
    if($(item.closest('li')).find('>:first-child').attr('class') === 'shopping-item shopping-item__checked')
    {
      $(item.closest('li')).find('>:first-child').attr('class','shopping-item');
    }
    else{
        $(item.closest('li')).find('>:first-child').attr('class','shopping-item shopping-item__checked');
    }

}
  
  

  function helpAdd(itemName){

    $( '.shopping-list').append(` <li>
    <span class="shopping-item">${itemName}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  }




  $(addItem);
  $(checkItem);
  $(deleteItem);