$(document).ready(function(){
  /* Start off with the messages hidden */
  $('.success').hide();
  $('.error').hide();

  // Open navigation menu
  $('.icon-menu').click(function() {
    $('.menu').animate({
        left: '0px'
      }, 200);
      
      $('body').animate({
          left: '285px'
      }, 200);
  });

  // Close navigation
  $('.icon-close').click(function() {
      $('.menu').animate({
          left: "-285px"
      }, 200);
      
      $('body').animate({
          left: "0px"
      }, 200);
  });
  //  add a function on all buttons thats run when clicked.
  $('.btn-success').click(function() {
      /* "this" refers to the element that was clicked. */
      // element.classList returns an array(sort of array) of the elements class names.
      const classList = this.classList;
      /* Using let so I can reassign the variable */
      let foundCorrect = false;
      for(let i = 0; i <= classList.length; i++) {
          /* If the element that was clicked has a class of "correct", I set the foundCorrect variable to true */
          if(classList[i] === 'correct') {
              foundCorrect = true;
          }
      }

      /* If foundCorrect is true I know that a user clicked the correct answer. If not I know that they clicked the wrong answer. */
      if (foundCorrect) {
          /* First hide the error message. Just incase it is shown. It may not be. */
          $('.error').hide();
          $('.success').show();
      } else {
          /* Do the same with Error message. */
          $('.success').hide();
          $('.error').show();
      }
  })

});