$(function () {
  var pagetop = $('.pagetop');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({
      scrollTop: 0
      // 動作時間
    }, 500);
    return false;
  });
});
// フッター手前でストップ
$(document).ready(function () {
  $(".pagetop").hide();
  $(window).on("scroll", function () {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      $(".pagetop").css({ position: "absolute", bottom: footHeight + 0 });
    } else {
      $(".pagetop").css({ position: "fixed", bottom: "0" });
    }
  });
});
