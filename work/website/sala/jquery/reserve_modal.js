$(function(){
  $('.btnOpen_Reserve_mobal').on("click", function(){
    $(".wrap_reserve_modal").fadeIn();
  });
  $('.btnClose, .bg_reserve_modal').on("click", function(){
    $(".wrap_reserve_modal").fadeOut();
  });
});

$(function () {
  var btn_reserve_fixed = $('.btn_reserve_fixed');
  $(document).ready(function () {
    $(window).on("scroll", function () {
      scrollHeight = $(document).height();
      scrollPosition = $(window).height() + $(window).scrollTop();
      footHeight = $("footer").innerHeight();
      if (scrollHeight - scrollPosition <= footHeight) {
        $(".btn_reserve_fixed").css({ position: "absolute", bottom: footHeight + 0 });
      } else {
        $(".btn_reserve_fixed").css({ position: "fixed", bottom: "0" });
      }
    });
  });

  var btn_reserve_fadeIn = $('.btn_reserve_fadeIn');
  btn_reserve_fadeIn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      btn_reserve_fadeIn.fadeIn();
    } else {
      btn_reserve_fadeIn.fadeOut();
    }
  });

});
