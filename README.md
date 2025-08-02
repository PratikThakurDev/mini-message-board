Mini Message Board
A simple, stylish message board web app built with Node.js, Express.js, and EJS. Post messages, chat back-and-forth, and view all conversations in a clean, mobile-friendly dark theme!

✨ Features
💬 Post and view messages (mini chat board experience)

🚀 Responsive dark-themed UI, styled with modern CSS

👤 User avatars (first letter of name)

➕ Floating Action Button (FAB) for adding new messages

🌙 Accessible markup and interactive UI

🗂️ Clean project structure—easy to read and extend

🚦 Getting Started
Prerequisites
Node.js installed (v18 or later recommended)

npm

Setup
Clone this repository

bash
git clone https://github.com/PratikThakurDev/mini-message-board.git
cd mini-message-board
Install dependencies

bash
npm install
Run the server

bash
node app.js
The app will start on http://localhost:3000.

Project Structure
text
mini-message-board/
├── app.js
├── routes/
│   └── index.js
├── views/
│   ├── index.ejs
│   ├── form.ejs
│   └── message.ejs
├── public/
│   └── css/
│       ├── style.css
│       ├── form.css
│       └── message.css
├── package.json
└── README.md
🌍 Deployment
Deploying on Render.com
Push your repository to GitHub

Create a new Web Service on Render

Connect to your GitHub repo

Set Start Command: node app.js

Deploy!

Visit your live message board at the provided Render URL

Express automatically binds to the correct port using process.env.PORT.

📣 Credits
Built by @PratikThakurDev

Express.js, EJS, and public domain CSS icons/fonts

Enjoy chatting on your new message board!