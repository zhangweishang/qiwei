//pages/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    "bnrUrl": [{
      "url": "../../images/wx_logo.png"
    }, {
      "url": "../../images/wx_logo.png"
    }, {
      "url": "../../images/wx_logo.png"
    }, {
      "url": "../../images/wx_logo.png"
    }],
    "list": [{
      "id":"1",
      "title": "炒粉",
      "desc":"华软炒粉",
      "month_sales":"48",
      "like":"3",
      "sell_price":"18",
      "cover":"../../images/wx_logo.png",
      "number": 0
    },
    {
      "id": "2",
      "title": "河粉",
      "desc": "华软河粉",
      "month_sales": "428",
      "like": "32",
      "sell_price": "148",
      "cover": "../../images/wx_logo.png",
      "number": 0
      },
      {
        "id": "3",
        "title": "面",
        "desc": "华软面",
        "month_sales": "4",
        "like": "83",
        "sell_price": "148",
        "cover": "../../images/wx_logo.png",
        "number": 0
      }],
    indicatorDots: 'true',
    autoplay: 'true',
    circular: 'true',
    indicatorActiveColor: "#FF9C35",
    interval: 5000,
    duration: 1000,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.login({
            success(res) {
              if (res.code) {
                //发起网络请求
                // wx.request({
                //   url: app.globalData.urlPath + '/onLogin',
                //   data: {
                //     code: res.code
                //   },
                //   method: "POST"
                // })
              } 
            }
          })
        } else {
          // 未授权，跳转到授权页面
          wx.reLaunch({
            url: '/pages/login/login',
          });
        }
      }
    })

    if (options && options.searchValue) {
      this.setData({
        searchValue: "搜索：" + options.searchValue
      });
    }
  },
  // 搜索入口  
  wxSearchTab: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  //添加菜品
  add: function(e){
    var that = this;

  },
  //减少菜品
  reduce: function(e){
    var that = this;
    
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