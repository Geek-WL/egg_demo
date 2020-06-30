module.exports = {
  success(data, code = 200, msg = '成功') {
    // this就是ctx对象,在其中可以调用ctx上的其他方法,或访问属性
    this.body = {
      code,
      msg,
      data,
    };
  },
  error(code = 500, msg = '错误') {
    // this就是ctx对象,在其中可以调用ctx上的其他方法,或访问属性
    this.body = {
      code,
      msg,
    };
  },
};
