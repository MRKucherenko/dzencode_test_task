let sessionCount = 0;

const sessionCounter = (io) => {
  io.on('connection', (socket) => {
    sessionCount++;
    io.emit('sessionCount', sessionCount);

    socket.on('disconnect', () => {
      sessionCount--;
      io.emit('sessionCount', sessionCount);
    });
  });
};

module.exports = sessionCounter;
