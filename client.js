const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  conn.setEncoding('utf8');

  conn.on('data', () => {
    console.log("you ded cuz u idled");
  })

  conn.on('connect', (connect) => {
    console.log("Successfully connected to game server");
    conn.write("Name: AMS");
  })

  return conn;
}

module.exports = connect;