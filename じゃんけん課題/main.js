"use strict";

{
    function startMoving() {
        // 画像を一定時間ごとに動かす
        setInterval(moveRandomly, 1000);
    }
    
    // 画像をランダムに動かす関数
    function moveRandomly() {
        // 画像の要素を取得
        var image = document.getElementById("random-image");
    
        // 画像の位置をランダムに変更
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);
        image.style.left = x + "px";
        image.style.top = y + "px";
    }
    

}
