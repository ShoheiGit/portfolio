'use strict';

//トップに戻るボタン  
{
    //スクロールすると浮き上げる
    function onScrollCallback(entries) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            toTop.classList.add('scrolled');
          } else {
            toTop.classList.remove('scrolled');
          }
        });
      }

    const toTop = document.getElementById('to_top');
    
    //クリックした時の処理
    toTop.addEventListener('click', e => {
        e.preventDefault();

        window.scrollTo({
            top:0,
            behavior: 'smooth',
        });
    });


    const onScrollObserver = new IntersectionObserver(onScrollCallback);
    onScrollObserver.observe(document.getElementById('target'));
   
}

//ページ内リンク
{
   const anchorLinks = document.querySelectorAll('a[href^="#"]');
   const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

   anchorLinksArr.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);

        const targetoffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;

        window.scrollTo({
            top:targetoffsetTop,
            behavior: "smooth"
        });
    });
   });
}

//headerのテキスト
{
    function play(){
        setTimeout(() => {
            text[currentIndex].classList.remove('show');
            currentIndex++;


            if(currentIndex > text.length -1){
                currentIndex = 0;
            }

            text[currentIndex].classList.add('show');
            play();
        }, 3000);
    }

    const text = document.querySelectorAll('.header-text p');
    let currentIndex = 0;

    play();
}

//スクロールすると浮き出る処理
{
    function callback(entries, obs){
        //画面と交差したかを見る
        entries.forEach(entry => {
            //まだ公差していない場合
            if(!entry.isIntersecting){
                return;
            }
            //交差した場合
            entry.target.classList.add('appear');
            
            //一回実行したら監視をやめる
            obs.unobserve(entry.target);
        });
    }

    //ページがどのぐらい移動したか監視出来るようになる準備
    const observe = new IntersectionObserver(callback, {
        threshold:0.4,
    });

    //animateクラスが付いた要素を取得
    document.querySelectorAll('.animate').forEach(el => {
        observe.observe(el);
    });


    
}