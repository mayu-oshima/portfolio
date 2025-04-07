$(function(){
  $('#main_slick_hairImg').slick({
    slidesToShow: 1, // スライドに表示する画像の枚数
    slidesToScroll: 1, // スライド時に何枚分切り替えるかの枚数
    autoplay: false, // 自動でスライドを行うか
    arrows: false,
    asNavFor: "#sub_slick_hairImg",
  });
  /*
      カルーセルスライダー
  */
  $("#sub_slick_hairImg").slick({
    slidesToShow: 4,
    autoplay: false,
    asNavFor: "#main_slick_hairImg",
    arrows: false,
  });
  //#thumbnail_sliderでクリックしたスライドを現在表示する画像とする
  $("#sub_slick_hairImg" + " .slick-slide").on('click', function() {
    let index = $(this).attr("data-slick-index");
    $("#sub_slick_hairImg").slick("slickGoTo", index, false);
  });

  $('#slick_otherhair').slick({
    slidesToShow: 3, // スライドに表示する画像の枚数
    slidesToScroll: 1, // スライド時に何枚分切り替えるかの枚数
    autoplay: true, // 自動でスライドを行うか
    autoplaySpeed: 2000, // 自動でスライドが切り替わるミリ秒数
    arrows: true,
  });


});
