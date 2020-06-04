import request from '@/utils/request'

export default {
  //登录
  submitLoginUser(userInfo) {
    return request({
      url: `/educenter/member/login`,
      method: 'post',
      data:userInfo
    })
  },
  //根据token值获取用户信息
  getLoginUserInfo(){
    return request({
        url: `/educenter/member/getUserInfo`,
        method: 'get'
      })
  }
}