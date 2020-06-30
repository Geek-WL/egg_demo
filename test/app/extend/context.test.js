'use strict';

/*
* app    : 服务端实例对象
* mock   : egg提供给我们的辅助模块对象
* assert : 断言库对象
* */
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/extend/context.test.js', () => {
  it('测试context', async () => {
    let ctx = app.mockContext();
    ctx.error();
    assert(ctx.body.code === 500);
    assert(ctx.body.msg === '错误');
  });
});
