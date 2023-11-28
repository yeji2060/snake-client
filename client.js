const { IP, PORT, NAME } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const net = require("net");
  const conn = net.createConnection({
    IP: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${NAME}`);
  })

  conn.on("data", (data) => {
  
    console.log(data);
  })

  return conn;
};

module.exports = { connect };

