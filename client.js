const net = require('net');
const {IP, PORT} = require('./constants')

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('data', () => {
    setTimeout(() => {
      console.log("you ded cuz u idled");
    }, 3000)
  })

  conn.on('connect', (connect) => {
    console.log("Successfully connected to game server");
    conn.write("Name: AMS");
  })

  return conn;
}

module.exports = connect;