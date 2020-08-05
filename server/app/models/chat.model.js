module.exports = (sequelize, Sequelize) => {
  const Chat = sequelize.define("chat", {
    username: {
      type: Sequelize.STRING
    },
    userid: {
      type: Sequelize.INTEGER,
    },
    room: {
      type: Sequelize.STRING
    },
    message: {
      type: Sequelize.STRING
    }
  });

  return Chat;
};
