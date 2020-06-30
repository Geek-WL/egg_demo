'use strict';

/*
* app    : 服务端实例对象
* mock   : egg提供给我们的辅助模块对象
* assert : 断言库对象
* */
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/extend/request.test.js', () => {

  it('request', async () => {
    let ctx = app.mockContext({
      headers: {
        'user-agent': 'Chrome',
      },
    });
    assert(ctx.request.isChrome() === true);
  });
});
