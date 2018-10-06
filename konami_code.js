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
// Keep track of index outside of the event handler.
let index = 0;

function init() {
  // your code here
  const main = document.body;

  main.addEventListener('keydown', // This is the function that would be invoked by the event listener.
  function onKeyDownHandler(e) {



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
  });

}
