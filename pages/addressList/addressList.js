// pages/addressList/addressList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blankSpace: "\t\t",
    line: "\n",
    "list": [{
      "address":"广州大学华软软件学院",
      "door_card": "Q619",
      "name": "zj",
      "sex": "先生",
      "phone": "123456",
      "address_id":"1"
    }, 
    {
        "address": "广州大学华软软件学院",
        "door_card": "G139",
        "name": "zj",
        "sex": "女士",
        "phone": "12345678",
        "address_id": "2"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  //增加地址或编辑地址
  addAddreOrEdit: function (e) {
    wx.navigateTo({
      url: '/pages/address/address?id=' + e.currentTarget.dataset.id,
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