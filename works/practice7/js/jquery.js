//slick slider
$(function () {
    $('#js-slider-1').slick({
        arrows:false,
        // spped:1000,
        slidesToShow:1,
        centerMode:true,
        variableWidth:true,
        autoplay:true,
        autoplaySpeed:4000,
    });

// ページ内リンクのイベント
  $('a[href^="#"]').click(function(){
    // リンクを取得
    let href= $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う
    // 600はスクロール速度で単位はミリ秒
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });



//スクロールすると浮き出る処理
    $(window).scroll(function() {
        // fadeinクラスに対して順に処理を行う
        $('.animate').each(function() {
          // スクロールした距離
          let scroll = $(window).scrollTop();
          // fadeinクラスの要素までの距離
          let target = $(this).offset().top;
          // 画面の高さ
          let windowHeight = $(window).height();
          // fadeinクラスの要素が画面下にきてから200px通過した
          // したタイミングで要素を表示
          if (scroll > target - windowHeight + 200) {
            $(this).css('opacity','1');
            $(this).css('transform','translateY(0)');
        }
    });
    });
});
