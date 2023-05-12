function keepAlive() {
  require('http').createServer((req, res) => res.end(process.version)).listen(8080) // sends HTTP requests to uptimerobot.
}

module.exports = keepAlive
