const Sntp = require('@hapi/sntp')
const { stripIndent } = require('common-tags')

const options = {
  host: 'a.st1.ntp.br',
  port: 123,
  resolveReference: true,
  timeout: 10000
}

const calculateTimeFromOffset = offset =>
  new Date( (new Date().getTime()) + offset )

const doCheckTime = (customOptions) =>
  Sntp.offset({
    ...options,
    ...customOptions,
  })
    .then( serverOffset => ({
      serverOffset,
      computerTime: new Date().toISOString(),
      serverTime: calculateTimeFromOffset(serverOffset).toISOString(),
    }) )
    .then( ({ serverOffset, computerTime, serverTime }) =>
      stripIndent`
        Your computer time is: ${computerTime}.
               Server time is: ${serverTime}.

        The offset between them are ${serverOffset} miliseconds.
      `
    )
    .then(console.log)


module.exports = doCheckTime
