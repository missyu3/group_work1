$(document).ready(function(){

  $("#aaa").click(function(){
    $(".after_submit_label").text("お問い合わせの提出ありがとうございます！！");
    $(".after_submit_label").css('color', 'blue');
    $(".after_submit_label").css('position', 'absolute');
    $(".after_submit_label").css('left', '80px');
  });

});
