$(document).on('turbolinks:load',function(){
  $(document).on('keyup','.chat-group-form__field--right',function(e){
    e.preventDefault();
    var input = $('#user-search-field').val();
    console.log(input);
    $.ajax({
      url: '/users',
      type: 'GET',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
      $().empty();
      if (users.lecgth !== 0){
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrMsgToHTML("エラーが出ました");
      }
    })
  })
});