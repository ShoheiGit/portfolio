'use strict';



//モーダル
{
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');
    const nav = document.querySelectorAll('nav a');
    
    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
        open.classList.add('hidden');
    });
    
    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
        open.classList.remove('hidden');
    });
    
    mask.addEventListener('click', ()  => {
        close.click();
    });
    
    //リンクを押したときにモーダルを閉じる
    nav.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
        open.classList.remove('hidden');
    });
    
    
}

