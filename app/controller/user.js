'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx } = this;
    // 校验数据
    const res = await ctx.validate('schema.user', ctx.request.body);
    if (res) {
    //  将校验数据交给service存储到数据库中
      try {
        const res = await ctx.service.user.createUser(ctx.request.body);
        ctx.success(res);
      } catch (e) {
        ctx.error(400, e.message);
      }
    } else {
    // 告诉前端数据不符合预期
    //   ctx.body = {
    //     code: 400,
    //     msg: '数据不符合预期',
    //   };
      ctx.error(400, ctx.helper.errorCode[400]);
    }
  }
  async login() {
    const { ctx } = this;
    try {
      const res = await ctx.service.user.findUser(ctx.request.body);
      ctx.session.user = res;
      ctx.success(res);
    } catch (e) {
      ctx.error(202, e.message);
    }
  }
  async test() {
    const { ctx } = this;
    ctx.body = {
      name: 'jwl',
      age: 18,
    };
  }
}

module.exports = UserController;
