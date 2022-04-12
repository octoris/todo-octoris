const { router, methods, response } = require('octoris')
const serve = require('@octoris/static')
const { send } = response
const { route, fixed, composeRoutes } = router
const { GET } = methods

function handler () {
  return send(200, 'Okay!')
}

const home = route([fixed('/')], [GET(handler)])

module.exports = composeRoutes({ logger: true }, [home], [serve('public')])
