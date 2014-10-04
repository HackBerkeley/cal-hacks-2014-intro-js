var createFormHandler = function() {
  $('button').on('click', function(e) {
    console.log('hi');
  });
};

$(document).ready(function() {
  createFormHandler();
});