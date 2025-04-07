$(function () {
  // ページを開いたときはグローバルナビゲーションを非表示に
  $(".nav_sp").css("display", "none");

  // ボタンをクリックするとアコーディオンで表示
  $(".humburger").on("click", function(){
      $(".nav_sp").slideToggle();
  });
});
$(function(){
  $('.humburger').on("click", function(){
    $('.humburger').toggleClass('open_nav');
  });
});
