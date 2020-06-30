const Subscription = require('egg').Subscription;

let count = 1;
class updataCache extends Subscription {
  static get schedule() {
    return {
      interval: '10s', // 每隔10s执行一次
      type: 'all', // all表示当前服务器上所有相同的node进程都执行
    };
  }
  // subscribe是真正定时任务执行时被运行的函数
  async subscribe() {
    this.ctx.app.msg = `jwl+${count++}`;
  }
}

module.exports = updataCache;
