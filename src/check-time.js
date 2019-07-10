const Sntp = require('@hapi/sntp')

const options = {
  host: 'a.st1.ntp.br',
  port: 123,
  resolveReference: true,
  timeout: 10000
}

const doCheckTime = () =>
  Sntp.offset(options)
    .then(console.log)


module.exports = doCheckTime
