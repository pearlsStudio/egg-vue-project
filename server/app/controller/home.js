'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.html')
  }

  async api() {
    this.ctx.body = 'hi, api'
  }
}

module.exports = HomeController
