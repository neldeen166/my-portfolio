let progressCircles = document.querySelectorAll(".circular-progress");
let progressValues = document.querySelectorAll(".progress-value");

let endValues = [300, 12, 2.5, 900]; 
let suffixes = ["K", "M", "M", "K"]; 

let speed = 20;
let duration = 3000;
let steps = duration / speed;

progressCircles.forEach((circle, index) => {
  let startValue = 0;
  let endValue = endValues[index]; 
  let suffix = suffixes[index]; 
  let step = endValue / steps;

  let progress = setInterval(() => {
    startValue += step;

    if (startValue >= endValue) {
      startValue = endValue;
      clearInterval(progress);
    }

    let decimals = endValue % 1 === 0 ? 0 : 2;
    progressValues[index].textContent = `${startValue.toFixed(decimals)}${suffix}`;

    let angle = (startValue / endValue) * 360;
    circle.style.background = `conic-gradient(#6ba5cd ${angle}deg, #ededed 0deg)`;
  }, speed);
});

document.querySelectorAll(".the-progress span").forEach(span => {
  let finalWidth = span.getAttribute("data-width");
  setTimeout(() => {
    span.style.width = finalWidth;
  }, 300); // small delay so animation looks smooth
});

const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));
