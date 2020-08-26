const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
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
    // conn.write("Move: up");
    // setTimeout(x => {conn.write("Move: left")}, 1000);
    // setTimeout(x => {conn.write("Move: left")}, 2000);
    // setTimeout(x => {conn.write("Move: down")}, 3000);
    // setTimeout(x => {conn.write("Move: right")}, 4000);
  })

  return conn;
}

module.exports = connect;