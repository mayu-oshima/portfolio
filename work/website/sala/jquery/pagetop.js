$(function () {
  $('.pagetop').click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500); // 動作時間
    return false;
  });
});
