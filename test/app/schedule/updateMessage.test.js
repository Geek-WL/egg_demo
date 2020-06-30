'use strict';

/*
* app    : 服务端实例对象
* mock   : egg提供给我们的辅助模块对象
* assert : 断言库对象
* */
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/schedule/updateMessage.test.js', () => {
  it('测试schedule', async () => {
    await app.runSchedule('updateMessage');
    assert(app.msg === 'jwl+1');
    await app.runSchedule('updateMessage');
    assert(app.msg === 'jwl+2');
  });
});

