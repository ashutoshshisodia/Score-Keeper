let p1score = document.getElementById("p1score");
let p2score = document.getElementById("p2score");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let reset = document.getElementById("reset");
let limitin = document.getElementById("limitin");
let limit = document.querySelector("h3 span");
let p_1score = 0,
  p_2score = 0;
let winningScore = 5;
let win = false;
p1.addEventListener("click", function () {
  p_1score++;
  if (p_1score <= winningScore && win == false) {
    p1score.textContent = p_1score;
    if (p_1score === winningScore) {
      p1score.classList.add("win");
      win = true;
    }
  }
});
p2.addEventListener("click", function () {
  p_2score++;
  if (p_2score <= winningScore && win == false) {
    p2score.textContent = p_2score;
    if (p_2score === winningScore) {
      p2score.classList.add("win");
      win = true;
    }
  }
});
reset.addEventListener("click", function () {
  p_1score = 0;
  p_2score = 0;
  p1score.textContent = 0;
  p2score.textContent = 0;
  win = false;
  p1score.classList.remove("win");
  p2score.classList.remove("win");
});
limitin.addEventListener("change", function () {
  limit.textContent = limitin.value;
  winningScore = Number(limitin.value);
});
