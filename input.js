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
    if(key === '\u0003') {
      process.exit();
    } else {
      const keyMap = {
        'w': 'Move: up',
        'a': 'Move: left',
        's': 'Move: down',
        'd': 'Move: right'
      }
      if (keyMap.hasOwnProperty(key)) {
        const movementCommand = keyMap[key];
        connection.write(movementCommand);
    }
}
}


module.exports = { setupInput };