import express from "express";
const router = express.Router();

const messages = [
  { text: "Hey Amando, how's it going?", user: "Charles", added: new Date() },
  { text: "Pretty good.", user: "Amando", added: new Date() }
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
