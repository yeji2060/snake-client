const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: YJH");

    //   conn.write("Move: up");    
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 3000);
    // conn.write("Move: down");
    // conn.write("Move: down");
    // conn.write("Move: left");
  })

  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
};

console.log("Connecting ...");
connect();


module.exports = connect;
