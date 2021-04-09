/**
 * **Created on {{CREATED_DATE}}**
 *
 * apps/{{APP}}/controllers/{{CONTROLLER_FILE_NAME}}
 * @author {{AUTHOR}}
 *
 */
'use strict'

const Controller = require('sindri-framework/controller')
const logger = require('sindri-framework/logger')
const config = require('sindri-framework/config')

class {{CONTROLLER_NAME}}Controller extends Controller {
  /**
   * Inicialização
   */
  setup () {
    logger.info('ok')
  }

  /**
   * Configuração de Rotas
   */
  routes () {
    this.get('/{{CONTROLLER_NAME}}', async (request, response) => {
      response
        .status(200)
        .send('OK')
    })
  }
}

module.exports = {{CONTROLLER_NAME}}Controller
