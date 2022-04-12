const { listen } = require('octoris')
const routes = require('./routes')

listen({ port: 9000 }, routes)
  .then(addr => console.log(`Server Listening on ${addr}`))
  .catch(console.error)
