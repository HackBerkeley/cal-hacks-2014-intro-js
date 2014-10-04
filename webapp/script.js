var createFormHandler = function() {
  $('button').on('click', function(e) {
    var author = $('input.author').val();
    var msg = $('input.msg').val();
    debugger;
  });
};

$(document).ready(function() {
  createFormHandler();
});