/**
 * Delete tables in Amazon DynamoDB
 */

require('../app-bootstrap')
const config = require('config')
const logger = require('../src/common/logger')
const helper = require('../src/common/helper')

logger.info('Delete DynamoDB tables.')

const deleteTables = async () => {
  const names = [config.AMAZON.DYNAMODB_SCORE_SYSTEM_TABLE, config.AMAZON.DYNAMODB_SCORECARD_TABLE]
  for (const name of names) {
    logger.info(`Delete table: ${name}`)
    await helper.deleteTable(name)
  }
}

deleteTables().then(() => {
  logger.info('Done!')
  process.exit()
}).catch((e) => {
  logger.logFullError(e)
  process.exit()
})
