'use strict';

/*
* app    : 服务端实例对象
* mock   : egg提供给我们的辅助模块对象
* assert : 断言库对象
* */
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/extend/helper.test.js', () => {
  it('测试helper', async () => {
    let ctx = app.mockContext();
    assert(ctx.helper.generatePwd('123') !== '123');
  });
});

