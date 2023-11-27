
// establishes a connection with the game server
const connect = function () {
  const net = require("net");
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: YJH");

    //conn.write("Move: up");    
  })

  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
};

module.exports = { connect };

