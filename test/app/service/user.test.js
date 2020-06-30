'use strict';

/*
* app    : 服务端实例对象
* mock   : egg提供给我们的辅助模块对象
* assert : 断言库对象
* */
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/service/user.test.js', () => {

  it('测试创建用户-成功', async () => {
    // 测试用户不存在创建用户
    const ctx = app.mockContext(); // 创建一个虚拟上下文 用于获取service
    const user = { username: 'jwl@qq.com', password: 'abc123', gender: '男' };
    const res = await ctx.service.user.createUser(user);
    assert(res.username === user.username);

    // 测试用户名已存在
    try {
      await ctx.service.user.createUser(user);
    } catch (e) {
      assert(e);
    }
  });
  after(async () => {
    await app.model.User.destroy({ truncate: true, force: true });
  });
});
