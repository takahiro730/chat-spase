$(document).on('turbolinks:load',function(){
  $(document).on('keyup','.new_message',function(e){
    e.preventDefault();
    var input = $('#message_content').val();
    console.log(input);
    $.ajax({
      url: '/users',
      type: 'GET',
      data: ('keyword' + input),
      dataType: 'json'
    })
  })
});