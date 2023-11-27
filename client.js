const connect = require('./play');

connect.setEncoding("utf8");
connect.on("data", (data) => {
  console.log(data);
})

