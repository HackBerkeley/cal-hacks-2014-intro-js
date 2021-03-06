var updatePosts = function(post) {
  var currentPosts = $('.posts');
  var newPost = $('<div class="post">' + post.author + ': ' + post.msg + '</div>');
  newPost.hide();
  currentPosts.append(newPost);
  newPost.show(400);
};

var createFormHandler = function() {
  $('button').on('click', function(e) {
    e.preventDefault();
    var author = $('input.author').val();
    var msg = $('input.msg').val();
    var post = {author:author, msg:msg};
    updatePosts(post);
  });
};

$(document).ready(function() {
  createFormHandler();
});