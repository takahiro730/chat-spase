$(document).on('turbolinks:load',function(){
  function buildHTML(message){
    var image = message.image ? `<img src=${message.image} class ="lower-message__image">`:" ";
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${ message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${ message.data}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${ message.content}
                    </p>
                    <p class="lower-message__image">
                    ${ image}
                    </p>
                  </div>
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
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
})
  .done(function(message){
    var html = buildHTML(message);
    $('.messages').append(html);
    $(".messages").animate({scrollTop:$('.messages')[0].scrollHeight});
    return false;
})
  .fail(function(){
    alert('エラーが発生しました');

})
  .always(function(){
    $('#message_content').val('');
    $('.hidden').val('');
    $('.form__submit').prop('disabled',false);
  });
});
});


