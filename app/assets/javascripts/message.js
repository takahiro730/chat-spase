$(document).on('turbolinks:load',function(){
  function buildHTML(message){
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${ message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${ message.time}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${ message.content}
                    </p>
                  </div>
                </div>`;
  return html;
}
function scrollBottom(){
  var target = $('.message').last();
  var position = target.offset().top + $('.messages').scrollTop();
  $('.messages').animate({
    scrollTop: position
  }, 300, 'swing');
}
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    console.log(formData);
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
})
  .done(function(message,data,XMLHttpRequest, textStatus, errorThrown,responseTex){
    var html = buildHTML(message);
    $('.messages').append(html);
    $('#message_content').val('');
    $('.form__submit').prop('disabled',false);
    $(".messages").animate({scrollTop:$('.messages')[0].scrollHeight});
    console.log(this);
    return false;
})
  .fail(function(XMLHttpRequest, textStatus, errorThrown,responseTex,message){
    alert('error');
    $('.form__submit').prop('disabled', false)
    console.log(textStatus,responseTex,errorThrown,XMLHttpRequest);
    console.log(message);
});
});
});