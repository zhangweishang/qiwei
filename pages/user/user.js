//pages/user/user.js
var e = require("../../utils/util.js"), time = require('../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this,
    userInfo = wx.getStorageSync("_userInfo");
    var userNid = wx.getStorageSync("unionid");
    // wx.request({ //位登录
    //   url: app.globalData.urlPath + '/api/login/event/userinfo/',
    //   data: {
    //     unionid: userNid,
    //   },
    //   method: 'POST',
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded' // 默认值
    //   },
    //   success: function (res) {
    //     console.log('----用户信息', res)
    //     if (res.data.data.utype == 2) {
    //       res.data.data.uvipdaoqi = time.toDate(res.data.data.uvipdaoqi)
    //       that.setData({
    //         vip: true,
    //         vip_time: res.data.data.uvipdaoqi,
    //       })
    //     } else if (res.data.data.utype == 1) {
    //       console.log(res.errMsg)
    //       that.setData({
    //         vip: false,
    //       })
    //     }
    //     that.setData({
    //       male: res.data.data.usex
    //     })
    //   },
    // })
    that.setData({ //转换完毕存储
      userInfo: userInfo,
    })
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth * 0.5;
        that.setData({
          //圆点坐标,x为屏幕一半,y为半径与margin-top之和,px
          //后面获取的触摸坐标是px,所以这里直接用px.
          dotPoint: {
            clientX: windowWidth,
            clientY: 250
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  openPage: function (a) {
    var e = a.currentTarget.dataset.url;
    wx.navigateTo({
      url: e
    });
  },
  changeView: function () {
    wx.openSetting({
      success: (res) => {
        console.log("授权结果..")
        console.log(res)
        if (!res.authSetting["scope.userInfo"] || !res.authSetting["scope.userLocation"] || !res.authSetting["scope.address"] || !res.authSetting["scope.camera"]) {
          console.log(res)
        }
      }
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

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