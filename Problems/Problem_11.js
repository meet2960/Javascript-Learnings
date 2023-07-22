// * Custom Debounce Function in JavaScript.
// Debounce Means, consider an example of search field, if user is typing don't make an API call, make it after user stops typing for some millisecond, and then make an API Call
// This is Cuctom Debounce Function.
// We can also use debounce function provided by lodash library of JavaScript.

const btn = document.querySelector(".btn");
const btnPressedText = document.querySelector(".increment_pressed_text");
const btnTriggeredText = document.querySelector(".increment_trigger_text");

let pressedCount = 0;
let triggerCount = 0;

const myDebounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) return clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const debounceCount = () =>
  myDebounce(() => {
    triggerCount += 1;
    btnTriggeredText.innerHTML = triggerCount;
  }, 800);

btn.addEventListener("click", () => {
  btnPressedText.innerHTML = ++pressedCount;
  debounceCount();
});
