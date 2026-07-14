# 🎓 Student Discount Radar

A lightweight Google Chrome extension that automatically alerts you if the current website offers a verified student discount. 

As a student, you are entitled to hundreds of discounts across the web. However, finding out if a site has a discount usually requires digging through footer links or searching Google. This extension solves that problem by running quietly in the background and popping up an elegant notification only when a discount is found.

## ✨ Features
- **Zero Configuration:** Install it and forget it. It works automatically.
- **Non-Intrusive:** The banner only appears when a real discount is available, and disappears after 10 seconds.
- **Privacy First:** We only check the domain locally against our database. No browsing history is tracked or sent anywhere.

## 🚀 How to Install (Developer Mode)
1. Download or clone this repository.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the folder containing this extension.
5. You're all set! Try visiting `spotify.com` or `apple.com`.

## 🛠️ Built With
- JavaScript (ES6)
- Chrome Extension API (Manifest V3)
- Vanilla CSS with Glassmorphism

## 📝 Contribute
Want to add more student discounts to the database? Open `background.js`, add your entry to the `DISCOUNT_DB` object, and submit a Pull Request!
