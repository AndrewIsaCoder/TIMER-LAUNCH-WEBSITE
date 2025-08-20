# ⏳ TIMER LAUNCH WEBSITE

A clean, single-page landing with a full-screen video background and a bold countdown timer to the official launch date.

[🚀 Live Demo](https://andrewisacoder.github.io/TIMER-LAUNCH-WEBSITE/)

![Hero](./assets/cover.png)

---

## ✨ Highlights
- 🎬 Fullscreen video background
- ⏲️ Live countdown to launch (May 24, 2027)
- 🆔 Title animation: “WELCOME” shrinking and growing
- 🎯 Social media icons fixed to the right, with hover grayscale/glow
- 🖋️ Elegant typography via Google Fonts (Bebas Neue)
- 🖼️ Favicon support (GIF/PNG/ICO; note: GIF shows static in some browsers)
- 🥚 Console easter egg message
- 🔐 Cookie consent (Iubenda) ready for GDPR

---

## 📸 Screenshots
> Replace placeholders with your images in ./assets.

- Landing preview  
  ![Landing](./assets/screenshot-landing.png)
- Social icons (right side)  
  ![Social](./assets/screenshot-social.png)
- Countdown timer  
  ![Timer](./assets/screenshot-timer.png)

---

## 🧩 Tech Stack
- HTML5, CSS3, JavaScript (vanilla)
- Google Fonts
- GitHub Pages (hosting)
- Google Analytics (gtag.js)
- Iubenda Cookie Solution

---

## 🗂️ Project Structure
```
.
├── index.html
├── style.css
├── main.js
└── assets/
    ├── favicon.(png|ico|gif)
    ├── cover.png
    └── screenshots…
```

---

## 🚀 Getting Started (Local)
1. Clone:
   ```
   git clone https://github.com/AndrewIsaCoder/TIMER-LAUNCH-WEBSITE.git
   ```
2. Open index.html in your browser  
   or use VS Code “Live Server”.

---

## ⚙️ Key Customizations

- Countdown target date (main.js):
  ```javascript
  // filepath: main.js
  // ...existing code...
  const targetDate = new Date("May 24, 2027 00:00:00").getTime();
  // ...existing code...
  ```

- Title animation text:
  ```javascript
  // filepath: main.js
  // ...existing code...
  const text = "WELCOME"; // change as needed
  // ...existing code...
  ```

- Social icons positioning and hover (style.css):
  ```css
  /* filepath: style.css */
  /* ...existing code... */
  .Social-media-icons { position: absolute; top: 40px; right: 40px; }
  .Social-media-icons a:hover img {
    filter: grayscale(1) contrast(2) brightness(1.2) drop-shadow(0 0 8px #fff);
    transform: scale(1.15);
    transition: 0.2s;
    cursor: pointer;
  }
  ```

- Favicon (index.html):
  ```html
  <!-- filepath: index.html -->
  <link rel="icon" type="image/png" href="./assets/favicon.png" />
  <!-- or -->
  <link rel="icon" type="image/gif" href="./assets/airplane.gif" />
  ```

---

## 📈 Analytics
Google Analytics (GA4) tag is added in the <head>.  
Note: Some browsers/extensions block analytics; GIF favicons may render static.

---

## 🌐 Deployment (GitHub Pages)
- Commit and push to the repo
- Pages is served from the default branch (root)
- Your site: https://andrewisacoder.github.io/TIMER-LAUNCH-WEBSITE/

```
git add .
git commit -m "Update site"
git push
```

---

## 🔎 SEO Tips
- Add a meta description in index.html
- Optionally add sitemap.xml and robots.txt
- Submit the site in Google Search Console for faster indexing

```html
<meta name="description" content="Timer Launch – countdown to our official release, with a cinematic video background.">
```

---

## 🗺️ Roadmap
- [ ] Mobile adjustments for ultra-small screens
- [ ] Accessibility improvements (alt text, focus states)
- [ ] Optional email notify form before launch
- [ ] Dark/Light mode toggle

---

## 🙌 Acknowledgements
- Fonts: Google Fonts (Bebas Neue)
- Icons/graphics: your assets in ./assets
- Hosting: GitHub Pages

---

## 📜 License
This project currently has no explicit license. If you plan to reuse code or assets, please request permission or add a LICENSE file (e.g., MIT) to clarify terms.

THE READ.ME FILE IS MADE WITH AI KNOWN BY ANDREW ():