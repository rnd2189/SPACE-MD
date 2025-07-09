require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAJhw6Vp45depTwQAAG4HAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVGkBAkaquGgQU2ht4A92ahzQEiBcuSUBhyv++hU739MPubC9P4SR1zpfvkp8gzTBFU1QD9SfICa4gQ+2S1TkCKhiVUYQI6IIQMghUgJxThd3G2rm3DrsNcXXcbrRqO9VXeOSsUDqKhoN4Op7lY*cF3LsgL9*OOPhDQy2M9sXBnVe6OFnAxOSCwPL7p0CKiypISCx7uRwWG9H2tBdwbztCTHAam3mCLojA8xTVDsTka*Al3TXcvY6WRjAxI0NDgzi9BQOzgnPuWo93Ez+cMCgiOw2+Bn+pKK8D0dWWpuwfgnlwlvPzm87B6u1mb6TM3p+WsCGTA9+cnvApjlMU2iFKGWb113k3O970OM*3uqKLVJwetsj0ipl1YFU*qPWeKIW7is4KR7C*BtwWVquzuNiz63Hg6VzHDd1qlsG1oHTW+FC6y4w*hZGTSp75GbhD3r1y+j+8X18r862fndhI20yXpey41JmxUmiaI9loV8OxKszEfjLzvsj7TeObFV5MNvJuP1j1Ur8X95vKENiimpueUS2soDGZw1bbT7xDVpI*oUyYvToNm9RlE8fybnniNyNa+otyWMqS7a4HfObz6+vk6jFU9lhsjL3ReclZY5MdS2FhvvUOC366l9g8s*zmqEm99Qy7L48bnVBth0AV7l1AUIwpI5DhLG1ritQFMKzWKCCIPdgFOtTWsrmUFiGXxUOj3vnUiUqh2Ov+cWxP410whtVMW*tN*AK6ICdZgChFoYUpy0g9R5TCGFGg*vWjC1J0Y0*d2mmi0AURJpRt0zI*ZzB8F*V9EwZBVqZsXaeB3i4QASr*u4wYw2lMWxrLFJIgwRXSE8goUCN4pujjgoigEKiMlOgjtHoWtrwr1kw6zEYD0AWXhx44BCroydJAGIoDXpFlVfhOv13brjDPv6WIgS44P0+JotAXZIEXFVHpi6rwva3fP*C17ULEID7Tlkeb5CdiGqZDWBnMJxPNjDU91sDv+7z74kl8qkXphAibbX25eVYkDa7xRjkZQVGIHftapId6ZNQsRc1FefmHJm2wqBDfOPgmZGm2itgS9Vl2S8bo2BT1oTMh9FJ5q+FikNgXmq*jlUIT6Cy9dT7LXn18KPJCM8Udr5e3k+Mfa3d4G+21+KWdFqIKB+jzMN*sC529V+lEgOte4aO9AA2Oc882t*RGJ8XaCsJYszhxhn2v5GaavB3zgwufrmRFWV2ZfFoMj6JhGCzAUMi54*xqxNrTsY*EnH+9VPhhplap9jfC6BH8FLb6*adyT9ytv*h791OLXy*Jv6RxdLha8q0YboV5TneJ2Fkqtsm9auK0YByeT*NeELsKOYhUrsD9*qML8jNkUUYuQAUwDUmGQ9AFJCtbw9pplP1hmK7F9oPlexecIWXa7xBs8AVRBi85UIWB3OP7Q0WRn6cckuUWpAlQgTCVEktqHV1reb5mkL1nCmjtZ4cauP8NUEsBAhQDFAAACAgAmHDpWnjl16lPBAAAbgcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAdwQAAAAA',
  BOT_ADMIN: process.env.BOT_ADMIN || '254719370855',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'rnd2189',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  
  //⚠️ Premium users settings ⚠️
  PREMIUM_KEY: process.env.PREMIUM_KEY || '',
  MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
  EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
//Need premium? Purchase one here => https://wa.me/tylor
