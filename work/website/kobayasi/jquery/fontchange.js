$(function () {
  //変数にクッキー名を入れる
  var history = Cookies.get('fontSize');
  //適用する箇所を指定。今回は部分的に#test内のpに
  var elm = $('html');
  //変数が空ならfontMを、空でなければクッキーに保存しておいたものを適用
  if(!history){
    elm.addClass('fontS');
    $('#fontS').addClass('active');
  }else{
    elm.addClass(history);
    $('#'+history).addClass('active');
  }
  //ボタンをクリックしたら実行
  $('.fontchange li').click(function(){
    //activeでないボタンだった場合のみ動作
    if(!$(this).hasClass('active')){
      //現在activeのついているclassを削除
      $('.active').removeClass('active');
      //クリックしたボタンをactive
      $(this).addClass('active');
      //クリックした要素のID名を変数にセット
      var setFontSize = this.id;
      //クッキーに変数を保存
      Cookies.set('fontSize', setFontSize);
      //一度classを除去して、変数をclassとして追加
      elm.removeClass().addClass(setFontSize);
    }
  });
});
