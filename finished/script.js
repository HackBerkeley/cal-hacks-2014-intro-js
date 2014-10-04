var updatePosts = function(posts) {
  var currentPosts = $('.posts');
  var currentChildren = currentPosts.children();

  if (posts.length < currentChildren.length) {
    currentPosts.empty();
    currentChildren = currentPosts.children();
  }

  var newPosts = [];
  for (var i = currentChildren.length; i < posts.length; i++) {
    var post = posts[i];
    var newPost = $('<div class="post">' + post.author + ': ' + post.msg + '</div>');
    newPost.hide();
    newPosts.push(newPost);
    currentPosts.append(newPost);
  }
  for (i = 0; i < newPosts.length; i++) {
    newPosts[i].show(400);
  }
};

var startPoll = function() {
  $.ajax({
    url: '/posts',
    type: 'GET',
    dataType: 'json',
  })
  .done(function(res) {
    updatePosts(res);
  })
  .fail(function() {
    console.log("get error");
  });
  setTimeout(startPoll, 2000);
};

var createFormHandler = function() {
  $('button').on('click', function(e) {
    e.preventDefault();
    var author = $('input.author').val();
    var msg = $('input.msg').val();
    var post = {author:author, msg:msg};
    $.ajax({
      url: '/posts',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(post),
    })
    .done(function(res) {
      console.log(res);
      updatePosts(res);
    })
    .fail(function() {
      console.log("error");
    });
  });
};

$(document).ready(function() {
  startPoll();
  createFormHandler();
});