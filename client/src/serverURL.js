const request = require('request')

const fixieRequest = request.defaults({'proxy': process.env.FIXIE_URL})

export const serverURL = fixieRequest