const nextEnv = require('next-env')
const { default: next } = require('next')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withEnv = nextEnv()
module.exports = withEnv({})

// const withPlugins = require('next-compose-plugins')
// const withOffline = require('next-offline')
// const withReactSvg = require('next-react-svg')
// const config = {
//   env: {
//     MY_ENV: process.env.HELP_APP_URL,
//   },
// }

// module.exports = withPlugins(
//   [
//     withOffline,
//     [
//       withReactSvg,
//       {
//         // config for reactSvgPlugin
//       },
//     ],
//   ],
//   config,
// )
