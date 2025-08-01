import express from "express";
const router = express.Router();

const messages = [
  { text: "Hey Amando, how's it going?", user: "Charles", added: new Date() },
  { text: "Pretty good, Charles! Just started working on a new project. You?", user: "Amando", added: new Date() },
  { text: "Same here! I've been learning Express.js. It's a bit tricky at first.", user: "Charles", added: new Date() },
  { text: "Stick with it—once you get the hang of routes and middleware, it gets fun!", user: "Amando", added: new Date() },
  { text: "Thanks! If I get stuck, can I ask you some questions?", user: "Charles", added: new Date() },
  { text: "Of course! That's what friends are for.", user: "Amando", added: new Date() }
];

router.get("/", (req, res) => {
  res.render("index", { title: "Message Board", messages });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

router.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

router.get("/message/:id", (req, res) => {
  const msg = messages[req.params.id];
  if (!msg) return res.status(404).send("Message not found!");
  res.render("message", { title: "Message Details", message: msg });
});

export default router;
