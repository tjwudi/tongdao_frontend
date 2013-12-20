var errors = module.exports;

errors.urlSuffix = function(err_code) {
  return "err_code=" + err_code;
}

// 未知错误
errors.UNKNOWN_ERROR = {
  code: "UNKNOWN_ERROR",
  msg: "未知错误"
};

// 登陆时邮箱或者密码错误
errors.LOGIN_FAILED = {
  code: "LOGIN_FAILED",
  msg: "用户名或者密码错误"
};