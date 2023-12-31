const { KEYMAP } = require('./constants');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};

const handleUserInput = function (key) {
  //exit when ctrl + c is pressed
  if (key === '\u0003') {
    process.exit();
  } else {
    //move the snake with keyboard input
    if (KEYMAP.hasOwnProperty(key)) {
      const movementCommand = KEYMAP[key];
      connection.write(movementCommand);
    }
  } 
}

module.exports = { setupInput };