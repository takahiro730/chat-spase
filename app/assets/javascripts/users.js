$(document).on('turbolinks:load',function(){
  $(document).on('keyup','.chat-group-form__field--right',function(e){
    e.preventDefault();
    var input = $('#user-search-field').val();
    var href = window.location.href
    $.ajax({
      url: '/users',
      type: 'GET',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
      $('.user-search-result').empty();
      if (users.length !== 0){
        users.forEach(function(user){
          var html = appendUser(user);
          $(".user-search-result").append(html);
        });
      }
    }) 
    .fail(function(){
      alert("エラーが出ました")
    })
  })
});