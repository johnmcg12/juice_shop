var io = require('socket.io-client')

describe('socket', function () {
  var socket

  beforeEach(function (done) {
    socket = io.connect('http://localhost:3000', {
      'reconnection delay': 0,
      'reopen delay': 0,
      'force new connection': true
    })
    socket.on('connect', function () {
      done()
    })
  })

  afterEach(function (done) {
    if (socket.connected) {
      socket.disconnect()
    }
    done()
  })

  it('server should handle confirmation messages for emitted challenge resolutions', function (done) {
    socket.emit('notification received', 'Find the carefully hidden \'Score Board\' page.')
    socket.emit('notification received', 'Provoke an error that is not very gracefully handled.')
    socket.emit('notification received', 'Log in with the administrator\'s user account.')
    socket.emit('notification received', 'Retrieve a list of all user credentials via SQL Injection')
    socket.emit('notification received', 'Post some feedback in another users name.')
    socket.emit('notification received', 'Wherever you go, there you are.')
    socket.emit('notification received', 'Place an order that makes you rich.')
    socket.emit('notification received', 'Access a confidential document.')
    socket.emit('notification received', 'Access a salesman\'s forgotten backup file.')
    socket.emit('notification received', 'Change Bender\'s password into slurmCl4ssic.')
    socket.emit('notification received', 'Apply some advanced cryptanalysis to find the real easter egg.')
    done()
  })

  it('server should handle confirmation message for a non-existent challenge', function (done) {
    socket.emit('notification received', 'Emit a confirmation for a challenge that was never emitted!')
    done()
  })

  it('server should handle empty confirmation message', function (done) {
    socket.emit('notification received', undefined)
    done()
  })
})
