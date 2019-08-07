// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindGetUserInfo: function(e){
    if(e.detail.userInfo){
      //用户按了允许授权按钮
      var that = this;
      wx.login({
        success(res) {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: app.globalData.urlPath + '/onLogin',
              data: {
                code: res.code
              },
              method: "POST"
            })
          }
        }
      //插入登录的用户的相关信息到数据库
      // wx.request({
      //   url: app.globalData.urlPath + 'user/add',
      //   data: {
      //     openid: getApp().globalData.openid,
      //     nickName: e.detail.userInfo.nickName,
      //     avatarUrl: e.detail.userInfo.avatarUrl,
      //     province: e.detail.userInfo.province,
      //     city: e.detail.userInfo.city
      //   },
      //   header: {
      //     'content-type': 'application/json'
      //   },
      //   success: function(res){
      //     //从数据库获取用户信息
      //     that.queryUserInfo();
      //     console.log("插入小程序登录用户信息成功！");
      //   }
      });
      //授权成功后，跳转到小程序首页
      wx.switchTab({
        url: '/pages/index/index',
      })
    }else {
      wx.showModal({
        title: '温馨提示',
        content: '由于您拒绝授权，将无法进入小程序',
        showCancel: '返回授权'
      })
    }
  },
  //获取用户信息接口
  queryUserInfo: function(){
    wx.request({
      url: app.globalData.urlPath + 'user/userInfo',
      data: {
        openid: app.globalData.openid
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res){
        console.log(res.data);
        getApp().globalData.userInfo = res.data;
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})