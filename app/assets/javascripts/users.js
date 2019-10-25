$(document).on('turbolinks:load',function(){
  $(document).on('keyup','.new_message',function(e){
    e.preventDefault();
    var input = $('#message_content').val();
    $.ajax({
      url: '/users',
      type: 'GET',
      data: { keyword: input},
      dataType: 'json'
    })
    .done(function(input){
      console.log(input);
    })
  })
});