import xhr from './xhr/'

/**
 * 通用模块API
 */

/**
 * 获取当前登录的用户信息
 * @param  {String,requeired} appId
           {String,requeired} code
 * @return {Promise}
 */
export function getAuthorizationToken(appId, code) {
  return xhr({
    url: `/WeixinController/getAuthorizationToken`,
    params: {
      appId,
      code
    }
  })
}
