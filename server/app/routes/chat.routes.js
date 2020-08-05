const { authJwt } = require("../middleware");
const controller = require("../controllers/chat.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/chat/save", controller.save);
  app.post("/api/chat/getMessagesRoom", controller.getMessagesRoom);
};
