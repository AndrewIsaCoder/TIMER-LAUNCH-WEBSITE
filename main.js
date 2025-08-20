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

  // Data țintă: 24 mai 2027, ora 00:00:00
  const targetDate = new Date("May 24, 2027 00:00:00").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById("timer").innerHTML = "Timpul a expirat!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
      days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds";
  }

  // Actualizare la fiecare 1 secundă
  const interval = setInterval(updateTimer, 1000);
  updateTimer();

console.log(
  "%cHI, IF YOU SEE THIS YOU JUST DISCOVERED AN EASTER EGG! WELL DONE! 🥚",
  "color: white; background: black; font-size: 18px; padding: 8px; border-radius: 6px;"
);