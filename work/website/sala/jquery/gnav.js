$(function () {
  $(".humburger").on("click", function(){
      $('body').toggleClass('open_nav');
  });
  $(".list_menu_navsp a").on("click", function(){
      $('body').removeClass('open_nav');
      // ヘッダーの高さを取得
      let headerHeight = $('.fixHeader').outerHeight();
      // スクロールの速度
      let speed = 400; // ミリ秒
      // アンカーの値取得 移動場所を取得
      let href= $(this).attr("href");
      // 移動先の値を取得
      let target = $(href);
      // 移動先を調整、座標をoffsetで取得し、その中で縦方向の座標をtop-header_heightで取得
      let position = target.offset().top - headerHeight;
      // 上記で取得した縦方向の座標の位置まで、
      // 上設定を行った速度でスムーススクロールを行う。swingは徐々に移動を行う
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      // aタグのページ遷移の機能を抑制。ページ遷移が行われると上記の処理が意味をなさない
      return false;
  });
});

$(function () {
  $(".list_menu_navpc a").on("click", function(){
      // ヘッダーの高さを取得
      let headerHeight = $('.fixHeader').outerHeight();
      // スクロールの速度
      let speed = 400; // ミリ秒
      // アンカーの値取得 移動場所を取得
      let href= $(this).attr("href");
      // 移動先の値を取得
      let target = $(href);
      // 移動先を調整、座標をoffsetで取得し、その中で縦方向の座標をtop-header_heightで取得
      let position = target.offset().top - headerHeight;
      // 上記で取得した縦方向の座標の位置まで、
      // 上設定を行った速度でスムーススクロールを行う。swingは徐々に移動を行う
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      // aタグのページ遷移の機能を抑制。ページ遷移が行われると上記の処理が意味をなさない
      return false;
  });
});
