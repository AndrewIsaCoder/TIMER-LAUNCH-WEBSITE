const text = "| Welcome |"; // textul pe care vrei să îl scrie
let index = 0;

function typeTitle() {
  if (index <= text.length) {
    document.title = text.substring(0, index);
    index++;
  } else {
    index = 0; // reia animația de la început
  }
}

setInterval(typeTitle, 200); // scrie câte o literă la fiecare 200ms
