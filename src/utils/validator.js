export const tel = msg => (rule, value, callback) => {
  if (value && !/^1[3456789]\d{9}$/.test(value)) {
    callback(msg || '手机号格式不正确')
  } else {
    callback()
  }
}

export const password = msg => (rule, value, callback) => {
  if (value && (/(^[a-zA-Z]+$)|(^\d+$)/.test(value) || value.length < 8)) {
    callback(msg || '至少8个字符，同时包含字母和数字')
  } else {
    callback()
  }
}
