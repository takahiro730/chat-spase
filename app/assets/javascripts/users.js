$(document).on('turbolinks:load',function(){
  $(users).on('keyup','#form',function(e){
    e.preventDefault();
    var input = $.trim($(this).val());
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'GET',
      data: ('keyword=' + input),
      processData: false,
      contentType: false,
      dataType: 'json'
    })
  })
});