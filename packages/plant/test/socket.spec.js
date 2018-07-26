const should = require('should');

const {Socket} = require('..');

describe('Socket()', function() {
  it('Should be a function', function() {
    should(Socket).be.a.Function();
  });

  describe('Socket.end()', function() {
    it('Should set isEnded `true`', function() {
      const socket = new Socket();

      should(socket.isEnded).be.False();
      socket.end();
      should(socket.isEnded).be.True();
    });
  });
});