let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput = (key) => {
    if(key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      conn.write("Move: up");
    } else if (key === 'a') {
      conn.write("Move: left");
    } else if (key === 's') {
      conn.write("Move: down");
    } else if (key === 'd') {
      conn.write("Move: right");
    } else if (key === 't') {
      conn.write("Say: my food");
    } else if (key === 'z') {
      conn.write("Say: gud pizza");
    } else if (key === 'j') {
      conn.write("Say: want wine");
    }
  });
  return stdin;
};

module.exports = setupInput;