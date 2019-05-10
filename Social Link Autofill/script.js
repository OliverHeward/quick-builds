$(document).ready(function(){
  $("#social-media").on('click tap', function(){
    if($(this).val() == ''){ $(this).val('@') }
  });
});

// This is jQuery. Change the # if you have changed the ID on the HTML element <input>