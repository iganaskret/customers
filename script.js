let height = 0;
let customers = 0;
const array = [];
let i = 0;
for (i = 40; i > 0; i--) {
  array.push(Math.floor(Math.random() * 36));
}

console.log(array);

function getHeight() {
  for (i = array.length - 1; i > -1; i--) {
    height = array[i] * 4;
    document.querySelectorAll("div")[i].style.height = height + "px";
  }
}
getHeight();

function scrollArray() {
  for (i = 0; i < 39; i++) {
    array[i] = array[i + 1];
  }
  array.pop();
  array.push(Math.floor(Math.random() * 36));
  getHeight();
}
setInterval(scrollArray, 1000);
