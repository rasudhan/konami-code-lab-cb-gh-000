const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  const main = document.body;

  main.addEventListener('keydown', onKeyDownHandler(e));

}


// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {

  // Keep track of index outside of the event handler.
  let index = 0;

  const key = e.key;

  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("Congrats!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
