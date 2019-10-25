$(document).on('turbolinks:load',function(){
  $(document).on('keyup','#form',function(e){
    e.preventDefault();
    var input = $('form__message').val();
    $.ajax({
      url: '/users',
      type: 'GET',
      data: ('keyword' + input),
      dataType: 'json'
    })
  })
});