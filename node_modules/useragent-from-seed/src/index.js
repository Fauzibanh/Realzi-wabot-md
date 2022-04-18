const Randoma = require('randoma')
const userAgents = require('./user-agents.json')

module.exports = (seed = Math.random().toString()) => {
  const random = new Randoma({ seed })
  return random.arrayItem(userAgents)
}
