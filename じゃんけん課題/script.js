"use strict";

let timerId;
let image = document.getElementById("image");

//functionで関数を書いてみる
function startAnimation() {
  let container = document.getElementById("container");
  const start = document.getElementById("start");
  start.disabled = true;

  timerId = setInterval(function () {
    let x = Math.floor(
      Math.random() * (container.offsetWidth - image.offsetWidth)
    );
    let y = Math.floor(
      Math.random() * (container.offsetHeight - image.offsetHeight)
    );
    image.style.left = x + "px";
    image.style.top = y + "px";
  }, difficulty);
}

function stopAnimation() {
  clearInterval(timerId);
  start.disabled = false;
}

//addEventListenerでかいてみる
//難易度設定

let difficulty = 1000;
let difficultyElement = document.getElementById("difficulty");

let count = 0;
const clickCount = document.getElementById("click-count");

// 難易度が変更されたときに difficulty 変数を更新する
difficultyElement.addEventListener("change", () => {
  difficulty = difficultyElement.value;
  clickCount.textContent = count;
  start.disabled = false;
  count = 0; // カウントをリセットする
  clickCount.textContent = count; // 回数を表示する
  clearInterval(timerId);

  image.style.top = `${initialPosition.y}px`;
  image.style.left = `${initialPosition.x}px`;
  console.log(difficulty);
});

console.log(difficulty);

image.addEventListener("click", () => {
  let sound = document.getElementById("sound");
  let difficulty = parseInt(difficultyElement.value);
  //const difficultyElement = document.getElementById("difficulty");

  count++;
  console.log(count);
  console.log(difficulty);

  if (difficulty === 1000) {
    clickCount.textContent = count;
  } else if (difficulty === 500) {
    clickCount.textContent = count * 10;
  } else {
    clickCount.textContent = count * 10000;
  }

  //音を鳴らす
  sound.currentTime = 0;
  sound.play();

  //光らせて、消す
  container.classList.add("highlight");

  setTimeout(function () {
    container.classList.remove("highlight");
  }, 50);
});

//リセット
let initialPosition = { x: 0, y: 0 }; // 初期位置を保存する
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  count = 0; // カウントをリセットする
  clickCount.textContent = count; // 回数を表示する
  start.disabled = false;
  clearInterval(timerId);

  image.style.top = `${initialPosition.y}px`;
  image.style.left = `${initialPosition.x}px`;
});

//遺産
// function playSound() {
//   let sound = document.getElementById("sound");
//   container.classList.add("highlight");

//   setTimeout(function () {
//     container.classList.remove("highlight");
//   }, 50);

//   sound.currentTime = 0;

//   sound.play();
// }
