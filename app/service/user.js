'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async createUser({ username, password, gender }) {
    if ((await this.getUser(username)).length === 0) {
      const res = await this.ctx.model.User.create({ username, password: this.ctx.helper.generatePwd(password), gender });
      return res;
    }
    throw new Error('当前用户已存在');

  }
  async getUser(username, password) {
    if (password) {
      const res = await this.ctx.model.User.findOne({
        where: {
          username,
          password: this.ctx.helper.generatePwd(password),
        },
      });
      if (res) {
        return res.dataValues;
      } else {
        throw new Error('用户名或密码不正确');
      }
    }
    const res = await this.ctx.model.User.findAll({
      where: {
        username,
      },
    });
    return res;

  }
  async findUser({ username, password }) {
    const user = await this.getUser(username, password);
    return user;
  }
}

module.exports = UserService;
