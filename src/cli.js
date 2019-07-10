#!/usr/bin/env node

const meow = require('meow')
const checkTime = require('./check-time')

const cliInterface = meow({})

checkTime()

module.exports = cliInterface
