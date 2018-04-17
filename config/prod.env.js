'use strict'
module.exports = {
    NODE_ENV: '"production"',
    API_ROOT: process.env.API_ROOT
        ? "'" + process.env.API_ROOT + "'"
        : "'http://192.168.2.215:21000'"
}
