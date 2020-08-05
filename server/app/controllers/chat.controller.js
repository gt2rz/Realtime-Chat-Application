const db = require("../models");
const Chat = db.chat;

exports.save = (req, res) => {
  Chat.create({
    username: req.body.username,
    userid: req.body.userid,
    room: req.body.room,
    message:req.body.message
  })
    .then(data => {
      res.send({ message: data });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getMessagesRoom = (req, res) => {
  Chat.findAll({
    where: {
      room: req.body.room
    }
  }).then(data => {
      res.send({ message: data });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
