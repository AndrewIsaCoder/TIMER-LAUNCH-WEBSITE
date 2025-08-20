const text = "| WELCOME |";
let idx = text.length;
let dir = -1; 

function renderTitle(s) {
  document.title = s;
  const el = document.getElementById("titlu-tab");
  if (el) el.textContent = s;
}

function tickTitle() {
  renderTitle(text.slice(0, idx));
  idx += dir;
  if (idx === 1) dir = +1;             
  if (idx === text.length) dir = -1; 
}

clearInterval(window._titleInterval);
window._titleInterval = setInterval(tickTitle, 500);
tickTitle();

  // Data țintă: 24 mai 2027, ora 00:00:00
  const targetDate = new Date("May 24, 2027 00:00:00").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById("timer").innerHTML = "Time Expired!";
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


  const interval = setInterval(updateTimer, 1000);
  updateTimer();
// DE REZOLVAT :
console.log(
  "%cHI, IF YOU SEE THIS YOU JUST DISCOVERED AN EASTER EGG! WELL DONE! 🥚",
  "color: white; background: black; font-size: 18px; padding: 8px; border-radius: 6px;" 
);